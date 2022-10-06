import { Anchor, Box, Heading, Paragraph } from "grommet"
import React from "react"

const About = () => {
  return (
    <Box pad={{ top: "40px" }}>
      <Heading level="3">JAM technology stack</Heading>
      <Paragraph>
        Website is built with{" "}
        <Anchor href="https://www.gatsbyjs.org/">Gatsby Js</Anchor>,{" "}
        <Anchor href="https://www.contentful.com/">Contentful CMS</Anchor>,{" "}
        <Anchor href="https://github.com/">github</Anchor> and{" "}
        <Anchor href="https://www.netlify.com/">netlify</Anchor> .
      </Paragraph>
      <Paragraph>
        Gatsby Js for building frontend with React Js, and pull dynamic data
        from Contentful headless CMS.
      </Paragraph>
      <Paragraph>
        Contentful CMS for creating custom content - Blog posts, banners,
        portfolio projects, services, testimonials.
      </Paragraph>
      <Paragraph>Github for code repository</Paragraph>
      <Paragraph>
        Netlify for deploying website, using netlify forms for implementing
        contact form.
      </Paragraph>
      <Paragraph>
        Page transition with{" "}
        <Anchor href="https://www.framer.com/motion/">framer motion</Anchor>
      </Paragraph>
      <Heading level="3">React 3rd-party plugins using on website:</Heading>

      <Box as="ul">
        <li>
          React responsive carousel:
          https://www.npmjs.com/package/react-responsive-carousel
        </li>
      </Box>
    </Box>
  )
}

export default About
