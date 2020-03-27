import React, { useContext } from 'react'
import { TabContext } from '../../Context/Tab'
import {
  Nav,
  Ul,
  Li,
  Button
} from './styles'

export const UbicationNavbar = () => {
  const {
    isActive1,
    isActive2,
    changeActive1,
    changeActive2
  } = useContext(TabContext)

  const handleClick1 = () => {
    changeActive1(true)
    changeActive2(false)
  }

  const handleClick2 = () => {
    changeActive1(false)
    changeActive2(true)
  }
  return (
    <Nav>
      <Ul>
        <Li
          className={`is-transparent ${
              isActive1
              ? 'is-active'
              : ''
          }`}
        >
          <Button
            onClick={handleClick1}
          >
            MAPA DE SERVICIOS
          </Button>
        </Li>
        <Li
          className={`is-transparent ${
            isActive2
              ? 'is-active'
              : ''
          }`}
        >
          <Button
            onClick={handleClick2}
          >
            MAPA GOOGLE MAPS
          </Button>
        </Li>
      </Ul>
    </Nav>
  )
}
