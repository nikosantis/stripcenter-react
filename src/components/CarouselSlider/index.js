import React, { useContext } from 'react'
import { isMobile, isTablet } from 'react-device-detect'
import Slider from 'infinite-react-carousel'
import { ModalContext } from '../../Context/Modal'
import { CarouselModal } from '../CarouselModal'

import Slider1 from '../../images/render-1.jpg'
import Slider2 from '../../images/render-2.jpg'
import Slider3 from '../../images/render-3.jpg'
import Slider4 from '../../images/render-4.jpg'
import Slider5 from '../../images/render-5.jpg'
import Slider6 from '../../images/render-6.jpg'

import {
  Div,
  Image
} from './styles'

export const CarouselSlider = () => {
  const { modalShow, dataModal, changeDataModal } = useContext(ModalContext)

  const handleClick = e => {
    changeDataModal(e.target.src)
    modalShow()
  }
  return (
    <>
      <Div>
        <Slider
          dots
          arrows={false}
          centerMode
          centerPadding={isMobile ? 50 : isTablet ? 100 : 250}
          shift={isMobile ? 20 : isTablet ? 40 : 40}
          resizeHeight
        >
          <div>
            <Image src={Slider1} onClick={handleClick} />
          </div>
          <div>
            <Image src={Slider2} onClick={handleClick} />
          </div>
          <div>
            <Image src={Slider3} onClick={handleClick} />
          </div>
          <div>
            <Image src={Slider4} onClick={handleClick} />
          </div>
          <div>
            <Image src={Slider5} onClick={handleClick} />
          </div>
          <div>
            <Image src={Slider6} onClick={handleClick} />
          </div>
        </Slider>
      </Div>

      <CarouselModal
        dataImage={dataModal}
      />
    </>
  )
}
