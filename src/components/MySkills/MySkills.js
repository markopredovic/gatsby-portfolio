import React, { useContext } from "react"
import Container from "../UI/Container"
import myskills from "../../data/my-skills.json"
import styled from "styled-components"
import {
  Box,
  Accordion,
  AccordionPanel,
  ResponsiveContext,
  Heading,
} from "grommet"
import { FormCheckmark } from "grommet-icons"
import Title from "../Modules/Title"

const MySkills = () => {
  // my skills json extract data
  const size = useContext(ResponsiveContext)

  const formatMySkillsJson = (json) => {
    return Object.keys(json).map((item, index) => {
      return size === "small" ? (
        <MyAccordionPanel key={index} label={item}>
          <Box>
            {json[item].map((skill) => (
              <Box as="span" pad={{ vertical: "3px" }} direction="row">
                <FormCheckmark /> {skill}
              </Box>
            ))}
          </Box>
        </MyAccordionPanel>
      ) : (
        <DesktopBoxItem>
          <Heading level="4">{item}</Heading>
          <Box>
            {json[item].map((skill) => (
              <Box direction="row">
                <FormCheckmark />
                {skill}
              </Box>
            ))}
          </Box>
        </DesktopBoxItem>
      )
    })
  }

  const mySkillsDataContent = formatMySkillsJson(myskills)

  return (
    <Box margin={{ bottom: "60px" }}>
      <Container>
        <Title section margin={{ bottom: "30px" }}>
          My skills
        </Title>
      </Container>
      <SkillsBox background="brand" pad={{ vertical: "20px" }}>
        <Container>
          {size === "small" ? (
            <Accordion>{mySkillsDataContent}</Accordion>
          ) : (
            <DesktopBox>{mySkillsDataContent}</DesktopBox>
          )}
        </Container>
      </SkillsBox>
    </Box>
  )
}

export default MySkills

const SkillsBox = styled(Box)``

const MyAccordionPanel = styled(AccordionPanel)`
  h4 {
    margin-bottom: 0;
    line-height: 2;
    font-size: 2rem;
  }
`

const DesktopBox = styled(Box)`
  flex-direction: row;
  justify-content: space-between;
`
const DesktopBoxItem = styled(Box)``
