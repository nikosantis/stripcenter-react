import React, { useContext, useState } from 'react'
import { TabContext } from '../../Context/Tab'
import {
  Nav,
  Ul,
  Li,
  Button
} from './styles'

export const UbicationNavbar = () => {
  const { activeTab, changeTab } = useContext(TabContext)
  const [isActive1, setIsActive1] = useState(true)
  const [isActive2, setIsActive2] = useState(false)

  const handleClick1 = () => {
    setIsActive1(!isActive1)
    setIsActive2(!isActive2)
    changeTab('1')
  }

  const handleClick2 = () => {
    setIsActive1(!isActive1)
    setIsActive2(!isActive2)
    changeTab('2')
  }
  return (
    <Nav>
      <Ul>
        <Li
          className={`is-transparent ${
              activeTab === '1'
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
              activeTab === '2'
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
