import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

import Logo from '../../images/logo-stripcenter.png'
import { Button } from '../Reusables/Buttons'

import {
  Container,
  Nav,
  ImageLogo,
  Burger,
  Navbar,
  NavbarBox,
  NavItem,
  NavButton
} from './styles'

const Header = (props) => {
  const [isActive, setIsActive] = useState(false)
  const [isSticky, setIsStickyl] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  const handleScroll = () => {
    window.pageYOffset > 100
      ? setIsStickyl(true)
      : setIsStickyl(false)
  }

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <Container
      className={
        isSticky
          ? 'scrolled'
          : 'noScrolled'
      }
    >
      <Nav
        className='navbar is-transparent'
        role='navigation'
        aria-label='main navigation'
        id='navbarNav'
      >
        <div className='container'>
          <div className='navbar-brand'>
            <a href='/'>
              <ImageLogo src={Logo} />
            </a>

            <Burger
              role='button'
              className={`navbar-burger burger${
                isActive
                  ? ' is-active'
                  : ''
              }`}
              aria-label='menu'
              aria-expanded='false'
              data-target='navbarHeader'
              onClick={handleClick}
            >
              <span aria-hidden='true' />
              <span aria-hidden='true' />
              <span aria-hidden='true' />
            </Burger>
          </div>

          <Navbar
            id='navbarHeader'
            className={`navbar-menu navbar-end${
              isActive
                ? ' is-active'
                : ''
            }`}
          >
            <NavbarBox className='navbar-end navbar-box'>
              <NavItem className='navbar-item' to='inicio' spy smooth duration={500}>
                Stripcenter
              </NavItem>

              <NavItem className='navbar-item' to='galeria' spy smooth duration={500}>
                Galería
              </NavItem>

              <NavItem className='navbar-item' to='proyecto' spy smooth duration={500}>
                Locales | Oficinas
              </NavItem>

              <NavItem className='navbar-item' to='contacto' spy smooth duration={500}>
                Ubicación
              </NavItem>

              <NavButton>
                <div>
                  <Link to='contacto' spy smooth duration={500}>
                    <Button>
                      <strong>Consultar</strong>
                    </Button>
                  </Link>
                </div>
              </NavButton>
            </NavbarBox>

          </Navbar>
        </div>
      </Nav>
    </Container>
  )
}

export default Header
