import styled from 'styled-components'
import { MQ } from '../../styles/mq'
import { Link } from 'react-scroll'

export const Nav = styled.nav`
  padding-top: 10px;
  background: transparent;
  /* ${MQ.md`
    padding: 0;
  `} */
`

export const Container = styled.header`
  z-index: 5;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.25s ease;

  &.scrolled {
    ${Nav} {
      background: #ffffff;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    }
  }

  &.noScrolled {
    ${Nav} {
      background: transparent;
    }
  }
`

export const ImageLogo = styled.img`
  height: 60px;
  margin: 0 20px;
`

export const Burger = styled.button`
  margin-right: 25px;
  margin-top: 11px;
  margin-bottom: 11px;

  &.is-active {
    background-color: transparent !important;
    border: none;
  }

  &:hover {
    background-color: transparent !important;
    border: none;
  }
`

export const NavbarBox = styled.div`

`

export const NavButton = styled.div`
  display: flex;
  align-items: center;
  ${MQ.md`
    margin-left: 20px;
  `}
`

export const Navbar = styled.div`
  &.is-active {
    display: flex;
    position: absolute;
    left: 0;
    width: 100%;
    background: #ffffff!important;
    text-align: center;
    z-index: 1111;

    ${NavbarBox} {
      width: 100%;
    }

    ${NavButton} {
      button {
        margin: auto;
      }
    }
  }
`

export const NavItem = styled(Link)`
  margin: 0 20px;
  padding: .5rem 0;
  text-transform: uppercase;
  font-weight: 900;
  color: #363636!important;
`
