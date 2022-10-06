import React from "react"
import { Box } from "grommet"

const Container = (props) => {
  return (
    <Box
      {...props}
      pad="0 20px"
      justify="center"
      width="1200px"
      margin={{ horizontal: "auto" }}
    >
      {props.children}
    </Box>
  )
}

export default Container
