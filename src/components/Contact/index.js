import React from 'react'
import { isMobile } from 'react-device-detect'
import { Element } from 'react-scroll'
import {
  ContactContainer,
  ContactParallax,
  Title,
  TitleContent,
  Text,
  Phones,
  Icons,
  IconLayout,
  Icon,
  IconText,
  Footer,
  FooterLeft,
  FooterRight
} from './styles'
import Image from '../../images/bg-contacto.jpg'
import { Waze } from '../Icons/Waze'
import { Maps } from '../Icons/Maps'
import { ContactForm } from '../ContactForm'

const Contact = ({ id }) => (
  <Element name={id}>
    <ContactContainer>
      <ContactParallax
        className='section fifth-content parallax-window'
        id='contacto'
        bgImage={Image}
        strength={
          isMobile
            ? 1000
            : 500
        }
      >
        <div className='columns is-centered is-mobile is-multiline'>
          <div className='column is-10'>
            <Title className='title is-3 has-text-white'>
            ¿Qué necesitas? Conversemos...
            </Title>
          </div>
          <div className='column is-12-tablet is-10-desktop is-12-mobile'>
            <div className='columns is-mobile is-multiline'>
              <div className='column is-6-tablet is-12-mobile'>
                <div className='columns is-centered'>
                  <div className='column is-12'>
                    <TitleContent className='subtitle is-5 is-uppercase has-text-white has-text-weight-semibold'>
                Dirección:
                    </TitleContent>
                    <Text className='is-size-6 has-text-white'>
                      <a href='#'>Alto Jahuel XXX, Buin</a>
                    </Text>
                    <br />
                    <TitleContent className='subtitle is-5 is-uppercase has-text-white has-text-weight-semibold'>
                Teléfono:
                    </TitleContent>
                    <Phones className='is-6 has-text-white has-text-centered-mobile'>
                      <a href='tel:+56232451242'>+562 3245 1242</a>
                    </Phones>
                    <Phones className='is-6 has-text-white has-text-centered-mobile'>
                      <a href='tel:+56232451243'>+562 3245 1243</a>
                    </Phones>
                    <Phones className='is-6 has-text-white has-text-centered-mobile'>
                      <a href='tel:+56993362842'>+569 9336 2842</a>
                    </Phones>
                    <Phones className='is-6 has-text-white has-text-centered-mobile'>
                      <a href='tel:+56984558853'>+569 8455 8853</a>
                    </Phones>
                    <br />
                  </div>
                </div>
                <Icons className='columns is-multiple is-mobile is-vcentered is-centered-mobile'>
                  <div className='column is-4'>
                    <a href='#'>
                      <IconLayout>
                        <div>
                          <Icon className='icon is-large'>
                            <figure className='image is-32x32'>
                              <Waze />
                            </figure>
                          </Icon>
                        </div>
                        <div>
                          <IconText>Ir Con <br />Waze</IconText>
                        </div>
                      </IconLayout>
                    </a>
                  </div>
                  <div className='column is-4-tablet is-6-mobile'>
                    <a href='#'>
                      <IconLayout>
                        <div>
                          <Icon className='icon is-large'>
                            <figure className='image is-32x32'>
                              <Maps />
                            </figure>
                          </Icon>
                        </div>
                        <div>
                          <IconText>Ir Con <br />GMaps</IconText>
                        </div>
                      </IconLayout>
                    </a>
                  </div>
                </Icons>
              </div>

              <div className='column is-6-tablet is-12-mobile'>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </ContactParallax>

      <Footer>
        <FooterLeft />
        <FooterRight />
      </Footer>
    </ContactContainer>
  </Element>
)

export default Contact
