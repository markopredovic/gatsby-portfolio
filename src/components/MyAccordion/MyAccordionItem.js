import React from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

const MyAccordionItem = ({
  item_content,
  json,
  index,
  active,
  setActiveItem,
}) => {
  const onClickHandler = () => {
    if (!active) setActiveItem(index)
    else setActiveItem(null)
  }

  return (
    <div className="l-accordion-item">
      <h3 onClick={onClickHandler}>
        {item_content}
        <span>
  { active ? <FaChevronUp /> : <FaChevronDown /> }
        </span>
      </h3>
      {active && (
        <ul className="animated faster zoomIn">
          {json[item_content].map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MyAccordionItem
