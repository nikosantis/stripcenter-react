import React from 'react'
import { Element } from 'react-scroll'
import { ModalContextWrapper } from '../Reusables/Modal/ModalContextWrapper'
import { CarouselSlider } from '../CarouselSlider'

import {
  Container,
  Section
} from './styles'

const Carousel = ({ id }) => {
  return (
    <Section>
      <Element name={id}>
        <ModalContextWrapper>
          <Container className='container'>
            <div className='columns'>
              <div className='column is-12'>
                <CarouselSlider />
              </div>
            </div>
          </Container>
        </ModalContextWrapper>
      </Element>
    </Section>
  )
}

export default Carousel
