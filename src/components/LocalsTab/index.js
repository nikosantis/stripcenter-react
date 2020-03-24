import React, { useContext, useEffect } from 'react'
import { TabContext } from '../../Context/Tab'
import {
  Tab,
  DivFlex,
  Text,
  DivCenter
} from './styles'
import Local1 from '../../images/local-1.png'
import Local2 from '../../images/loca-2.png'
import { Button } from '../Reusables/Buttons'

export const LocalsTab = () => {
  const { activeTab, dataTab, changeDataTab } = useContext(TabContext)

  useEffect(() => {
    switch (activeTab) {
      case '1':
        return changeDataTab('Foto 1')

      case '2':
        return changeDataTab('Foto 2')

      case '3':
        return changeDataTab('Foto 3')

      case '4':
        return changeDataTab('Foto 4')

      case '5':
        return changeDataTab('Foto 5')

      default:
        return ''
    }
  }, [activeTab])

  return (
    <section>
      <div className='columns'>
        <div className='column is-8'>
          <Tab id='1' imageData='Foto 1'>
            <img src={Local1} />
          </Tab>

          <Tab id='2' imageData='Foto 2'>
            <img src={Local2} />
          </Tab>

          <Tab id='3' imageData='Foto 3'>
            <img src={Local1} />
          </Tab>

          <Tab id='4' imageData='Foto 4'>
            <img src={Local2} />
          </Tab>

          <Tab id='5' imageData='Foto 5'>
            <img src={Local1} />
          </Tab>
        </div>
        <DivFlex className='column is-4'>
          <DivCenter>
            <Text>
              ¿Necesita tener más información o cotizar un Local Comercial u Oficina?
            </Text>

            <Button data={dataTab}>
              Consultar
            </Button>
          </DivCenter>
        </DivFlex>
      </div>
    </section>
  )
}
