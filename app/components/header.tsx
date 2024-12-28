import React from 'react'
import logo from "../assets/svg/logo.svg";
import Container from './container'
import Button from './button';

function Header() {
  return (
    <header className="py-6">
        <Container className="flex justify-between items-center">
          <img src={logo} alt="Logo" className="logo" />

          <Button>Logout</Button>
        </Container>
    </header>
  )
}

export default Header