import React, { useContext } from 'react'
import { TabContext } from '../../Context/Tab'
import {
  Li,
  Button,
  Title,
  Subtitle
} from './styles'

export const LocalsNavbar = () => {
  const {
    activeTab,
    changeActiveTab
  } = useContext(TabContext)

  const handleClick = (tab) => {
    changeActiveTab(tab)
  }

  return (
    <nav>
      <ul>
        <Li>
          <Button
            onClick={() => handleClick('1')}
            className={
              activeTab === '1'
                ? 'active'
                : ''
            }
          >
            <Title>
              Subterráneo
            </Title>

            <Subtitle>
              Locales, estacionamientos y bodegas
            </Subtitle>
          </Button>
        </Li>

        <Li>
          <Button
            onClick={() => handleClick('2')}
            className={
              activeTab === '2'
                ? 'active'
                : ''
            }
          >
            <Title>
              Piso 1
            </Title>

            <Subtitle>
              Locales, supermercado
            </Subtitle>
          </Button>
        </Li>

        <Li>
          <Button
            onClick={() => handleClick('3')}
            className={
              activeTab === '3'
                ? 'active'
                : ''
            }
          >
            <Title>
              Piso 2
            </Title>

            <Subtitle>
              Locales, baños y bodegas
            </Subtitle>
          </Button>
        </Li>

        <Li>
          <Button
            onClick={() => handleClick('4')}
            className={
              activeTab === '4'
                ? 'active'
                : ''
            }
          >
            <Title>
              Piso 3
            </Title>

            <Subtitle>
              Oficinas
            </Subtitle>
          </Button>
        </Li>

        <Li>
          <Button
            onClick={() => handleClick('5')}
            className={
              activeTab === '5'
                ? 'active'
                : ''
            }
          >
            <Title>
            Piso 4
            </Title>

            <Subtitle>
            Oficinas
            </Subtitle>
          </Button>
        </Li>
      </ul>
    </nav>
  )
}
