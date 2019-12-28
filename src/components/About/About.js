import React from "react"

const About = () => {
  return (
    <div className="l-about-content">
      <h3>JAM technology stack</h3>
      <p>
        Website is built with <a href="https://www.gatsbyjs.org/">Gatsby Js</a>,{" "}
        <a href="https://www.contentful.com/">Contentful CMS</a>,{" "}
        <a href="https://github.com/">github</a> and{" "}
        <a href="https://www.netlify.com/">netlify</a> .
      </p>
      <p>
        Gatsby Js for building frontend with React Js, and pull dynamic data
        from Contentful headless CMS.
      </p>
      <p>
        Contentful CMS for creating custom content - Blog posts, banners,
        portfolio projects, services, testimonials.
      </p>
      <p>Github for code repository</p>
      <p>
        Netlify for deploying website, using netlify forms for implementing
        contact form.
      </p>
      <h3>React 3rd-party plugins using on website:</h3>

      <ul>
        <li>
          React responsive carousel:
          https://www.npmjs.com/package/react-responsive-carousel
        </li>
        <li>React icons: https://react-icons.netlify.com/#/</li>
        <li>
          Material UI useMediaQuery:
          https://material-ui.com/components/use-media-query/#simple-media-query
        </li>
      </ul>
    </div>
  )
}

export default About
