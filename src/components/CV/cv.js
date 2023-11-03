import React from "react"
import styled from "styled-components"
import { Box, Heading, List, Text } from "grommet"

const Cv = () => {
  const textItems = [
    "Developed custom Shopify themes, including responsive designs, for various clients in diverse industries.",
    "Created and maintained Shopify Plus stores, optimizing performance and scalability.",
    "Integrated third-party APIs and plugins to enhance e-commerce functionality.",
    "Developed custom Shopify apps to meet specific client requirements.",
  ]

  return (
    <>
      <Text>&nbsp;</Text>
      <SectionBox>
        <Text>Marko Predovic</Text>
        <Text>Belgrade, Serbia</Text>
        <Text>mpredovic@gmail.com</Text>
        <Text>https://www.linkedin.com/in/marko-predovic/</Text>
      </SectionBox>
      <SectionBox>
        <Heading level={3} color="brand">Objective:</Heading>
        <Text>
          Senior Shopify Developer with 10+ years of experience in frontend
          development and expertise in Shopify and Shopify Plus. Proven track
          record in creating custom Shopify themes, plugins, and delivering
          high-quality, responsive web solutions. Seeking a challenging role to
          leverage my skills and experience to enhance eCommerce platforms.
        </Text>
      </SectionBox>
      <SectionBox>
        <Heading level={3} color="brand">Professional Experience:</Heading>
        <Heading level={4} color="graph-2">Senior Shopify Developer</Heading>
        <Text>
          - Developed custom Shopify themes, including responsive designs, for
          various clients in diverse industries.
        </Text>
        <Text>
          - Created and maintained Shopify Plus stores, optimizing performance
          and scalability.
        </Text>
        <Text>
          - Integrated third-party APIs and plugins to enhance e-commerce
          functionality.
        </Text>
        <Text>
          - Developed custom Shopify apps to meet specific client requirements.
        </Text>
        <Text>
          - Collaborated with cross-functional teams, including designers,
          project managers, and QA testers.
        </Text>
        <Text>
          - Utilized JavaScript, HTML5, CSS, React.js, Alpine.js, and Tailwind
          CSS to build efficient and user-friendly front-end interfaces.
        </Text>
        <Text>
          - Implemented version control and code collaboration with Git.
        </Text>
        <Text>
          - Conducted code reviews and provided mentorship to junior developers.
        </Text>
        <Text>
          - Led optimization efforts to improve site performance and page load
          times.
        </Text>
        <Text>
          - Resolved complex technical issues and provided ongoing support for
          clients.
        </Text>
        <Text>
          - Maintained a high standard of code quality and adhered to best
          practices.
        </Text>
        <Text>
          - Actively participated in client meetings and demonstrated excellent
          communication skills.
        </Text>
        <Text>&nbsp;</Text>
        <Heading level={4} color="graph-2">Frontend Developer</Heading>
        <Text>
          - Collaborated with designers and backend developers to create and
          maintain websites with a focus on user experience.
        </Text>
        <Text>
          - Utilized HTML, CSS, JavaScript, and various frontend libraries and
          frameworks to build web applications.
        </Text>
        <Text>
          - Conducted regular website updates, bug fixes, and feature
          enhancements.
        </Text>
        <Text>
          - Ensured cross-browser compatibility and responsive design.
        </Text>
        <Text>- Implemented version control and code management with Git.</Text>
        <Text>
          - Worked with clients to understand project requirements and provided
          technical guidance.
        </Text>
        <Text>
          - Contributed to code documentation and knowledge sharing within the
          team.
        </Text>
      </SectionBox>
      <SectionBox>
        <Heading level={3} color="brand">Education:</Heading>
        <Text>Bachelor of Computer Science</Text>
        <Text>Faculty of mathematics in Belgrade</Text>
      </SectionBox>
      <SectionBox>
        <Heading level={3} color="brand">Skills:</Heading>
        <Text>- Shopify Plus</Text>
        <Text>- Shopify Plugins</Text>
        <Text>- JavaScript</Text>
        <Text>- HTML5</Text>
        <Text>- CSS</Text>
        <Text>- Git</Text>
        <Text>- React.js</Text>
        <Text>- Alpine.js</Text>
        <Text>- Tailwind CSS</Text>
        <Text>- Responsive Web Design</Text>
        <Text>- Cross-browser Compatibility</Text>
        <Text>- Problem Solving</Text>
        <Text>- Team Collaboration</Text>
        <Text>- Detail-Oriented</Text>
        <Text>- Strong Communication Skills</Text>
      </SectionBox>
    </>
  )
}

export default Cv

const SectionBox = styled(Box)`
  margin-bottom: 40px;
`
