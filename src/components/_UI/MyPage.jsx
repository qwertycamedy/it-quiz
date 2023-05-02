import { Container } from "@mui/material";
import React from 'react'

function MyPage({children}) {
  return (
    <div>
      <Container maxWidth="lg">{children}</Container>
    </div>
  )
}

export default MyPage