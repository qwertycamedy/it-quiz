import { Container } from "@mui/material";
import React from 'react'

function MyPage({children, classNames}) {
  return (
    <div className={`min-h-screen ${classNames}`}>
      <Container maxWidth="lg" className="min-h-screen">{children}</Container>
    </div>
  )
}

export default MyPage