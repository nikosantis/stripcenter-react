import React from 'react'
import {
  FaMapMarkerAlt,
  FaWaze,
  FaMobileAlt,
  FaRegEnvelope
} from 'react-icons/fa'
import {
  FooterContainer,
  LogoText,
  Logos,
  Cbs,
  Recorp,
  FooterColumns,
  IconBox,
  Icon
} from './styles'
import LogoCbs from '../../images/logo-cbs.png'
import LogoRecorp from '../../images/recorp-logo-white.png'

const Footer = () => (
  <FooterContainer className='section'>
    <div className='has-text-centered'>
      <div className='columns is-mobile is-centered is-multiline'>
        <div className='column is-10-tablet is-12-mobile'>
          <p className='has-text-white is-size-7'>Las imágenes contenidas en esta web fueron elaboradas con fines ilustrativos, pudiendo tener variaciones, por lo que no constituyen una representación exacta de la realidad. Su único objetivo es mostrar una caracterización general del proyecto y no cada uno de sus detalles. Las casas se entregan sin terrazas, sin pavimento de estacionamiento y sin pérgolas. Al momento de efectuar la compra, verifique las especificaciones técnicas y características definitivas de su casa, que podrán experimentar variaciones durante el desarrollo del proyecto.</p>
        </div>
        <div className='column is-12-tablet is-12-mobile'>
          <div className='columns is-multiline is-mobile is-vcentered is-centered'>
            <div className='column is-12 footer-bordered'>
              <LogoText className='has-text-white'>Venden:</LogoText>
              <Logos>
                <Cbs src={LogoCbs} />
                <Recorp src={LogoRecorp} />
              </Logos>
            </div>

            <div className='column is-12-mobile is-12-tablet is-10-desktop has-text-white-ter'>
              <FooterColumns className='columns is-multiline is-mobile'>
                <div className='column is-3-tablet is-12-mobile has-text-left-tablet is-size-7'>
                  <IconBox>
                    <div>
                      <Icon className='icon'>
                        <FaMapMarkerAlt />
                      </Icon>
                    </div>
                    <div>
                      <a href='https://www.google.com/maps/place/Av+Presidente+Kennedy+4700,+Vitacura,+Regi%C3%B3n+Metropolitana,+Chile/@-33.402602,-70.583952,15z/data=!4m5!3m4!1s0x9662cf3b2ddbf001:0x733a3facaca9a77f!8m2!3d-33.4026015!4d-70.5839518?hl=es-ES' className='has-text-white-ter'>Avenida Kennedy 4700, piso 6, Vitacura.</a>
                    </div>
                  </IconBox>
                </div>
                <div className='column is-3-tablet is-12-mobile is-size-7'>
                  <IconBox>
                    <div>
                      <Icon className='icon'>
                        <FaWaze />
                      </Icon>
                    </div>
                    <div>
                      <a href='https://www.waze.com/es-419/livemap?zoom=17&lat=-33.4025&lon=-70.58395' className='has-text-white-ter'>Abrir con Waze</a>
                    </div>
                  </IconBox>
                </div>
                <div className='column is-3-tablet is-12-mobile is-size-7'>
                  <IconBox>
                    <div>
                      <Icon className='icon'>
                        <FaMobileAlt />
                      </Icon>
                    </div>
                    <div>
                      <a href='tel:+56 2 2733 3200' className='has-text-white-ter'>+56 2 2733 3200</a>
                    </div>
                  </IconBox>
                </div>
                <div className='column is-3-tablet is-12-mobile has-text-right-tablet is-size-7'>
                  <IconBox>
                    <div>
                      <Icon className='icon'>
                        <FaRegEnvelope />
                      </Icon>
                    </div>
                    <div>
                      <a href='mailto:contacto@cbsinmobiliaria.cl' className='has-text-white-ter'>contacto@cbsinmobiliaria.cl</a>
                    </div>
                  </IconBox>
                </div>
              </FooterColumns>
            </div>
          </div>
        </div>
      </div>
    </div>
  </FooterContainer>
)

export default Footer
