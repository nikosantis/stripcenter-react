import React, { useContext } from 'react'
import Iframe from 'react-iframe'
import { TabContextWrapper } from '../Reusables/Tab/TabContextWrapper'
import { TabContext } from '../../Context/Tab'
import { UbicationNavbar } from '../UbicationNavbar'
import MapaImage from '../../images/mapa.pn.png'
import {
  Container,
  Tab,
  Image
} from './styles'

export const Ubication = () => {
  return (
    <TabContextWrapper>
      <Container>
        <section className='section'>
          <div className='columns is-centered is-mobile is-multiline'>
            <div className='column is-12-mobile is-10-tablet'>
              <div className='columns is-mobile is-multiline'>
                <div className='column is-6-tablet is-12-mobile'>
                  <h2 className='title is-3 s-title'>Ubicación estratégica en Buin</h2>
                  <h5 className='subtitle has-text-grey is-5'>Emplazado en un barrio residencial de gran crecimiento habitacional y comercial</h5>
                </div>
                <div className='column is-6-tablet is-12-mobile is-relative' id='tabs-with-content'>
                  <UbicationNavbar />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Tab id='1'>
          <Image src={MapaImage} alt='' />
        </Tab>
        <Tab id='2'>
          <Iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1659.0336171256722!2d-70.68554382069847!3d-33.733077510658916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966326931ea83555%3A0x8b282c0b94e0fa82!2sMiraflores%20193%2C%20Alto%20Jahuel%2C%20Buin%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1580335464519!5m2!1ses!2scl'
            width='100%'
            height='450px'
            frameborder='0'
            style={{ border: '0' }}
            allowfullscreen
          />
        </Tab>
      </Container>
    </TabContextWrapper>
  )
}
