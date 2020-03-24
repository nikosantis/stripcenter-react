import React, { useContext, useState } from 'react'
import { TabContext } from '../../Context/Tab'
import {
  Li,
  Button,
  Title,
  Subtitle
} from './styles'

export const LocalsNavbar = () => {
  const { activeTab, changeTab } = useContext(TabContext)
  const [isActive1, setIsActive1] = useState(true)
  const [isActive2, setIsActive2] = useState(false)
  const [isActive3, setIsActive3] = useState(false)
  const [isActive4, setIsActive4] = useState(false)
  const [isActive5, setIsActive5] = useState(false)

  const handleClick1 = () => {
    setIsActive1(!isActive1)
    setIsActive2(!isActive2)
    setIsActive3(!isActive3)
    setIsActive4(!isActive4)
    setIsActive5(!isActive5)
    changeTab('1')
  }

  const handleClick2 = () => {
    setIsActive1(!isActive1)
    setIsActive2(!isActive2)
    setIsActive3(!isActive3)
    setIsActive4(!isActive4)
    setIsActive5(!isActive5)
    changeTab('2')
  }

  const handleClick3 = () => {
    setIsActive1(!isActive1)
    setIsActive2(!isActive2)
    setIsActive3(!isActive3)
    setIsActive4(!isActive4)
    setIsActive5(!isActive5)
    changeTab('3')
  }

  const handleClick4 = () => {
    setIsActive1(!isActive1)
    setIsActive2(!isActive2)
    setIsActive3(!isActive3)
    setIsActive4(!isActive4)
    setIsActive5(!isActive5)
    changeTab('4')
  }

  const handleClick5 = () => {
    setIsActive1(!isActive1)
    setIsActive2(!isActive2)
    setIsActive3(!isActive3)
    setIsActive4(!isActive4)
    setIsActive5(!isActive5)
    changeTab('5')
  }

  return (
    <nav>
      <ul>
        <Li>
          <Button
            onClick={handleClick1}
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
            onClick={handleClick2}
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
            onClick={handleClick3}
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
            onClick={handleClick4}
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
            onClick={handleClick5}
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
