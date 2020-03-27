import React, { useContext } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-scroll'
import { TabContext } from '../../Context/Tab'
import {
  DivTab,
  Tab,
  DivFlex,
  Text,
  DivCenter,
  Figure,
  Image
} from './styles'
import Pisom1 from '../../images/piso_-1.jpg'
import Piso1 from '../../images/piso_1.jpg'
import Piso2 from '../../images/piso_2.jpg'
import Piso3 from '../../images/piso_3.jpg'
import Piso4 from '../../images/piso_4.jpg'

import { Button } from '../Reusables/Buttons'

export const LocalsTab = () => {
  const {
    dataTab,
    isActive1,
    isActive2,
    isActive3,
    isActive4,
    isActive5
  } = useContext(TabContext)

  return (
    <section>
      <div className='columns'>
        <DivTab className='column is-8'>
          <CSSTransition
            in={isActive1}
            timeout={300}
            classNames='alert'
            unmountOnExit
          >
            <Tab id='1' imageData='Foto 1' active={isActive1}>
              <Figure>
                <Image src={Pisom1} />
              </Figure>
            </Tab>
          </CSSTransition>
          <CSSTransition
            in={isActive2}
            timeout={300}
            classNames='alert'
            unmountOnExit
          >

            <Tab id='2' imageData='Foto 2' active={isActive2}>
              <Figure>
                <img src={Piso1} />
              </Figure>
            </Tab>
          </CSSTransition>
          <CSSTransition
            in={isActive3}
            timeout={300}
            classNames='alert'
            unmountOnExit
          >
            <Tab id='3' imageData='Foto 3' active={isActive3}>
              <Figure>
                <img src={Piso2} />
              </Figure>
            </Tab>
          </CSSTransition>
          <CSSTransition
            in={isActive4}
            timeout={300}
            classNames='alert'
            unmountOnExit
          >

            <Tab id='4' imageData='Foto 4' active={isActive4}>
              <Figure>
                <img src={Piso3} />
              </Figure>
            </Tab>
          </CSSTransition>
          <CSSTransition
            in={isActive5}
            timeout={300}
            classNames='alert'
            unmountOnExit
          >
            <Tab id='5' imageData='Foto 5' active={isActive5}>
              <Figure>
                <img src={Piso4} />
              </Figure>
            </Tab>
          </CSSTransition>
        </DivTab>
        <DivFlex className='column is-4'>
          <DivCenter>
            <Text>
              ¿Necesita tener más información o cotizar un Local Comercial u Oficina?
            </Text>
            <Link to='contacto' spy smooth duration={500}>
              <Button data={dataTab}>
              Consultar
              </Button>
            </Link>
          </DivCenter>
        </DivFlex>
      </div>
    </section>
  )
}
