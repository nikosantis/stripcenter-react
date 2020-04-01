import React, { useContext } from 'react'
import { Link } from 'react-scroll'
import { TabContext } from '../../Context/Tab'
import Pisom1 from '../../images/piso_-1.png'
import Piso1 from '../../images/piso_1.png'
import Piso2 from '../../images/piso_2.png'
import Piso3 from '../../images/piso_3.png'
import Piso4 from '../../images/piso_4.png'

import {
  Columns,
  DivTab,
  Tab,
  DivFlex,
  Text,
  DivCenter,
  Image
} from './styles'

import { Button } from '../Reusables/Buttons'

export const LocalsTab = () => {
  const {
    dataTab,
    activeTab
  } = useContext(TabContext)

  return (
    <Columns className='columns'>
      <DivTab className='column is-9'>
        <Tab id='1' imageData='Foto 1' activetab={activeTab === '1'}>
          <Image src={Pisom1} />
        </Tab>

        <Tab id='2' imageData='Foto 2' activetab={activeTab === '2'}>
          <Image src={Piso1} />
        </Tab>

        <Tab id='3' imageData='Foto 3' activetab={activeTab === '3'}>
          <Image src={Piso2} />
        </Tab>

        <Tab id='4' imageData='Foto 4' activetab={activeTab === '4'}>
          <Image src={Piso3} />
        </Tab>

        <Tab id='5' imageData='Foto 5' activetab={activeTab === '5'}>
          <Image src={Piso4} />
        </Tab>

      </DivTab>
      <DivFlex className='column is-3'>
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
    </Columns>
  )
}
