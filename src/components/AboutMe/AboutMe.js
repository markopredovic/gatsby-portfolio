import React from "react"
import { Link } from "gatsby"
import Container from "../UI/Container"
import { Box, Paragraph } from "grommet"
import Title from "../Modules/Title"
import styled from "styled-components"

const AboutMe = () => {
  return (
    <Box>
      <Container>
        <Title section margin={{ bottom: "30px" }}>
          About me
        </Title>
        <ContentBox>
          <Paragraph fill={true}>
            10+ years of hands-on frontend development experience, working with
            many clients on a diverse set of projects, gaining valuable
            knowledge along the way. I go an 'extra mile' to ensure success of
            each project and timely delivery. I value and invest into long term
            professional relationship.
          </Paragraph>
          <Paragraph fill={true}>
            After things start to go in the right direction and friendly rapport
            is established, client and developer form a partnership. Through
            these partnerships many great projects have been delivered, as seen
            on the page <Link to="/portfolio">portfolio</Link>. Check out the{" "}
            <Link to="/services">services</Link> page for available offerings.{" "}
            <Link to="/contact">Contact me</Link> today and let's start a new
            project together!
          </Paragraph>
        </ContentBox>
      </Container>
    </Box>
  )
}

export default AboutMe

const ContentBox = styled(Box)`
  display: block;
  @media (min-width: 768px) {
    column-count: 2;
  }
`
