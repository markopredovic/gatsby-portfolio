import { Box, Paragraph } from "grommet"
import React from "react"

const Copyright = () => {
  return (
    <Box>
      <Paragraph margin="0">
        Copyright &copy; {new Date().getFullYear()} by markoni512.dev
      </Paragraph>
    </Box>
  )
}

export default Copyright
