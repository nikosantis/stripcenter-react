import React from 'react'
import { Link } from 'react-scroll'
import {
  Layout,
  Container,
  Carousel,
  Image,
  Content,
  Body,
  ContainerContent,
  Title,
  Subtitle
} from './style'
import { Button } from '../Reusables/Buttons'
import { HeroBottom } from '../HeroBottom'
import Slide1 from '../../images/bg-stripcenter.jpg'
import Slide2 from '../../images/stripcenter-slider-2.jpg'
import Slide3 from '../../images/stripcenter-slider-3.jpg'

const properties = {
  duration: 5000,
  transitionDuration: 500,
  arrows: false,
  infinite: true,
  indicators: false,
  autoplay: false
}

const Hero = () => (
  <Layout>
    <Container className='container'>
      <div className='columns is-mobile'>
        <div className='column is-12-mobile is-12-tablet'>
          <Carousel {...properties}>
            <div className='each-fade'>
              <Image className='image-container' bg={Slide1} />
            </div>

            <div className='each-fade'>
              <Image className='image-container' bg={Slide2} />
            </div>

            <div className='each-fade'>
              <Image className='image-container' bg={Slide3} />
            </div>
          </Carousel>
        </div>
      </div>
    </Container>

    <Content>
      <Body>
        <ContainerContent className='container'>
          <div className='columns is-mobile'>
            <div className='column is-12-mobile is-12-tablet'>
              <Title className='title'>
            Buin Oriente boulevard
              </Title>
              <Subtitle className='subtitle'>
            Stripcenter en la mejor ubicación de Alto Jahuel en Buin
              </Subtitle>
              <div className='buttons is-centered'>
                <Link to='inicio' spy smooth duration={500}>
                  <Button className='button' href='#inicio'>
                    <strong>Ver proyecto</strong>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ContainerContent>
      </Body>
    </Content>
    <HeroBottom />
  </Layout>
)

export default Hero
