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
    isActive1,
    changeActive1,
    isActive2,
    changeActive2,
    isActive3,
    changeActive3,
    isActive4,
    changeActive4,
    isActive5,
    changeActive5
  } = useContext(TabContext)

  const handleClick1 = () => {
    changeActive1(true)
    changeActive2(false)
    changeActive3(false)
    changeActive4(false)
    changeActive5(false)
  }

  const handleClick2 = () => {
    changeActive1(false)
    changeActive2(true)
    changeActive3(false)
    changeActive4(false)
    changeActive5(false)
  }

  const handleClick3 = () => {
    changeActive1(false)
    changeActive2(false)
    changeActive3(true)
    changeActive4(false)
    changeActive5(false)
  }

  const handleClick4 = () => {
    changeActive1(false)
    changeActive2(false)
    changeActive3(false)
    changeActive4(true)
    changeActive5(false)
  }

  const handleClick5 = () => {
    changeActive1(false)
    changeActive2(false)
    changeActive3(false)
    changeActive4(false)
    changeActive5(true)
  }

  return (
    <nav>
      <ul>
        <Li>
          <Button
            onClick={handleClick1}
            className={
              isActive1
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
              isActive2
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
              isActive3
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
              isActive4
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
              isActive5
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
