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
    <Element name={id}>
      <ModalContextWrapper>
        <Section>
          <Container className='container'>
            <div className='columns'>
              <div className='column is-12'>
                <CarouselSlider />
              </div>
            </div>
          </Container>
        </Section>
      </ModalContextWrapper>
    </Element>
  )
}

export default Carousel
