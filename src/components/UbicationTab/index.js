import React, { useContext } from 'react'
import Iframe from 'react-iframe'
import { TabContext } from '../../Context/Tab'
import MapaImage from '../../images/mapa.pn.jpg'
import MapaImageMobile from '../../images/mapa_mobile.jpg'

import {
  Tab,
  Image,
  Responsive,
  Figure
} from './styles'

export const UbicationTab = () => {
  const {
    activeTab
  } = useContext(TabContext)

  return (
    <section>
      <Tab id='1' active={activeTab === '1'}>
        <Responsive className='is-hidden-mobile'>
          <Figure className='image'>
            <Image src={MapaImage} />
          </Figure>
        </Responsive>
        <Responsive className='is-hidden-tablet'>
          <Figure className='image'>
            <Image src={MapaImageMobile} />
          </Figure>
        </Responsive>
      </Tab>

      <Tab id='2' active={activeTab === '2'}>
        <Iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1659.0336171256722!2d-70.68554382069847!3d-33.733077510658916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966326931ea83555%3A0x8b282c0b94e0fa82!2sMiraflores%20193%2C%20Alto%20Jahuel%2C%20Buin%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1580335464519!5m2!1ses!2scl'
          width='100%'
          height='450px'
          frameborder='0'
          style={{ border: '0' }}
          allowfullscreen
          loading='Loading'
        />
      </Tab>
    </section>
  )
}
