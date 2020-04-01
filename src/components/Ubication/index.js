import React from 'react'
import { TabContextWrapper } from '../Reusables/Tab/TabContextWrapper'
import { UbicationNavbar } from '../UbicationNavbar'
import { UbicationTab } from '../UbicationTab'
import {
  Container,
  Title,
  Subtitle
} from './styles'

const Ubication = () => {
  return (
    <TabContextWrapper>
      <Container>
        <section className='section'>
          <div className='container'>
            <div className='columns is-centered is-mobile is-multiline'>
              <div className='column is-12-mobile is-10-tablet'>
                <div className='columns is-mobile is-multiline'>
                  <div className='column is-6-tablet is-12-mobile'>
                    <Title className='title is-3 s-title'>Ubicación estratégica en Buin</Title>
                    <Subtitle className='subtitle has-text-grey is-5'>Emplazado en un barrio residencial de gran crecimiento habitacional y comercial</Subtitle>
                  </div>
                  <div className='column is-6-tablet is-12-mobilgite is-relative' id='tabs-with-content'>
                    <UbicationNavbar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <UbicationTab />
      </Container>
    </TabContextWrapper>
  )
}

export default Ubication
