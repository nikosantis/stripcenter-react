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
    activeTab,
    changeActiveTab
  } = useContext(TabContext)

  const handleClick = (tab) => {
    changeActiveTab(tab)
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
            onClick={() => handleClick('1')}
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
            onClick={() => handleClick('2')}
          >
            MAPA GOOGLE MAPS
          </Button>
        </Li>
      </Ul>
    </Nav>
  )
}
