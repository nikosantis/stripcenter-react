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
  FooterRight,
  BoxPhones,
  Box,
  BoxTitle,
  Link
} from './styles'
import Image from '../../images/bg-contacto.jpg'
import { Waze } from '../Icons/Waze'
import { Maps } from '../Icons/Maps'
import { ContactForm } from '../ContactForm'

const Contact = ({ id }) => (
  <ContactContainer>
    <Element name={id}>
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
                      Correo Electrónico
                    </TitleContent>
                    <Text className='is-size-6 has-text-white'>
                      <a href='mailto:contacto@cbsinmobiliaria.cl'>contacto@cbsinmobiliaria.cl</a>
                    </Text>
                    <br />
                    <TitleContent className='subtitle is-5 is-uppercase has-text-white has-text-weight-semibold'>
                      Teléfonos
                    </TitleContent>

                    <BoxPhones>
                      <Box>
                        <Phones className='is-6 has-text-white has-text-centered-mobile'>
                          <a href='tel:+56232451242'>+56 9 8455 8853</a>
                        </Phones>
                        <Phones className='is-6 has-text-white has-text-centered-mobile'>
                          <a href='tel:+56232451243'>+56 9 9336 2842</a>
                        </Phones>
                        <Phones className='is-6 has-text-white has-text-centered-mobile'>
                          <a href='tel:+56993362842'>+56 9 7688 1219</a>
                        </Phones>
                      </Box>

                    </BoxPhones>
                    <br />
                    <TitleContent className='subtitle is-5 is-uppercase has-text-white has-text-weight-semibold'>
                      Dirección
                    </TitleContent>
                    <Text className='is-size-6 has-text-white'>
                      <a href='#'>Alto Jahuel, Buin</a>
                    </Text>
                    <br />
                  </div>
                </div>
                <Icons>
                  <IconLayout>
                    <Link target='_blank' href='https://www.waze.com/ul?ll=-33.73307970%2C-70.68447200&navigate=yes'>
                      <div>
                        <Icon className='icon is-large'>
                          <figure className='image is-32x32'>
                            <Waze />
                          </figure>
                        </Icon>
                      </div>
                      <div>
                        <IconText>Ir Con Waze</IconText>
                      </div>
                    </Link>
                  </IconLayout>
                  <IconLayout>
                    <Link target='_blank' href='https://goo.gl/maps/iUq9z6JwnaakbhJbA'>
                      <div>
                        <Icon className='icon is-large'>
                          <figure className='image is-32x32'>
                            <Maps />
                          </figure>
                        </Icon>
                      </div>
                      <div>
                        <IconText>Ir Con GMaps</IconText>
                      </div>
                    </Link>
                  </IconLayout>
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
    </Element>
  </ContactContainer>
)

export default Contact
