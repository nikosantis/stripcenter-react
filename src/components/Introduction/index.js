import React from 'react'
import { Element } from 'react-scroll'
import {
  Section,
  Content,
  Title,
  Subtitle,
  Icon,
  TextIcon
} from './styles'
import { colors } from '../../styles/colors'

import PrincipalImage from '../../images/icon-stripcenter.png'
import { Ubication } from '../Icons/Ubication'
import { Locals } from '../Icons/Locals'
import { Offices } from '../Icons/Offices'
import { Parking } from '../Icons/Parking'

const Introduction = ({ id }) => (
  <Element name={id}>
    <Section>
      <div className='container'>
        <div className='columns is-multiline is-mobile is-centered'>
          <Content className='column is-11-tablet is-12-mobile'>
            <Title className='title'>
            22 Locales Comerciales y 32 Oficinas
            </Title>
            <Subtitle className='subtitle has-text-grey is-5'>
            Con la mejor conectividad de Alto Jahuel en Buin
            </Subtitle>
            <div className='columns is-vcentered is-mobile is-multiline'>
              <div className='column is-8-tablet is-12-mobile'>
                <div className='content'>
                  <p>La alta conectividad y facilidad de accesos, son pilares fundamentales en el desarrollo de este nuevo proyecto de CBS.</p>
                  <p>Santiago, Puente Alto y Las Condes son importantes generadores de flujos, lo que se traduce en que el 33,5% de los vehículos que transitan por el sector pertenecen a los grupos ABC1 o C2.</p>
                  <p>La cercanía a desarrollos futuros de Colegio, Centro Educacional y Estación de Servicios, en pleno barrio residencial de gran crecimiento habitacional, son importantes factores de plusvalía.</p>
                </div>
              </div>
              <div className='column is-4-tablet is-12-mobile has-text-centered'>
                <img src={PrincipalImage} alt='Buin Oriente Boulevard | Stripcenter Alto Jahuel' className='first-content--icon' />
              </div>
            </div>
          </Content>
          <div className='column is-11'>
            <div className='columns is-variable is-multiline is-mobile'>
              <div className='column is-12-mobile is-desktop-3 has-text-centered'>
                <Icon className='image is-48x48 has-text-centered'>
                  <Ubication />
                </Icon>
                <TextIcon color={colors.red}>
                Ubicación estratégica de alto flujo
                </TextIcon>
              </div>
              <div className='column is-12-mobile is-desktop-3 has-text-centered'>
                <Icon className='image is-48x48 has-text-centered'>
                  <Locals />
                </Icon>
                <TextIcon color={colors.green}>
                22 Locales Comerciales de 29 a 168 m2
                </TextIcon>
              </div>
              <div className='column is-12-mobile is-desktop-3 has-text-centered'>
                <Icon className='image is-48x48 has-text-centered'>
                  <Offices />
                </Icon>
                <TextIcon color={colors.orange}>
                32 Oficinas de 22,59 a 31,79 m2
                </TextIcon>
              </div>
              <div className='column is-12-mobile is-desktop-3 has-text-centered'>
                <Icon className='image is-48x48 has-text-centered'>
                  <Parking />
                </Icon>
                <TextIcon color={colors.blue}>
                205 Estacionamientos subterráneos y en superficie
                </TextIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </Element>
)

export default Introduction
