import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`

export const Ul = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Li = styled.li`

  &.is-active {
    border-bottom: 3px solid green;
  }
`

export const Button = styled.button`
  color: #363636!important;
  border: none;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  padding: .5em 1em;
  font-size: 1.25rem;
  background: transparent;

  &:hover {
    border: none;
    color: #363636;
  }
  &.is-active {
    border: none;
    color: #363636;
  }
`
