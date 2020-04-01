import React, { useContext } from 'react'
import { ModalContext } from '../../Context/Modal'
import { Modal } from '../Reusables/Modal'

import {
  Image
} from './styles'

export const CarouselModal = ({ dataImage }) => {
  const { isOpen, modalHide } = useContext(ModalContext)
  return (
    <Modal
      isOpen={isOpen}
      closeModal={modalHide}
    >
      <div className='columns is-multiline'>
        <div className='column is-12'>
          <Image src={dataImage} />
        </div>
      </div>
    </Modal>
  )
}
