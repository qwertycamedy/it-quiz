import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'

function MyLogo() {
  return (
    <Link to="/">
        <img src={logoImg} alt="logo" />
    </Link>
  )
}

export default MyLogo