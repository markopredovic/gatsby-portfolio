import React, { useState } from "react"
import myskills from "../../data/my-skills.json"
import MyAccordion from "../MyAccordion/MyAccordion"
import MyAccordionItem from "../MyAccordion/MyAccordionItem"

const MySkills = ({ layoutCssClass }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  // my skills json extract data
  const formatMySkillsJson = json => {
    return Object.keys(json).map((item, index) => {
      return (
        <MyAccordionItem
          key={index}
          json={json}
          item_content={item}
          index={index}
          active={activeIndex === index ? true : false}
          setActiveItem={index => setActiveIndex(index)}
        />
      )
    })
  }

  const mySkillsDataContent = formatMySkillsJson(myskills)

  return (
    <div className={layoutCssClass}>
      <div className="l-container">
        <h3 className="title-section">
          <span>My skills</span>
        </h3>
      </div>
      <div className="l-wrapper">
        <div className="l-container">
          <MyAccordion>{mySkillsDataContent}</MyAccordion>
        </div>
      </div>
    </div>
  )
}

export default MySkills
