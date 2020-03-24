import React, { useRef, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  ModalContainer,
  Background,
  Content,
  Button,
  Exit,
  Body
} from './styles'

export const Modal = ({ isOpen, width, children, closeModal }) => {
  const refModal = useRef()

  const handleExit = () => {
    closeModal()
  }

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      closeModal()
    }
  }, [])

  const handleOutsideClick = e => {
    if (refModal.current.contains(e.target)) {
      return
    }

    closeModal()
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keydown', escFunction, false)

    return () => {
      document.removeEventListener('keydown', escFunction, false)
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen])

  return (
    <ModalContainer
      width={width}
      display={isOpen ? 'flex' : ''}
    >
      <Background />
      <Content ref={refModal}>
        <Button onClick={handleExit}>
          <Exit />
        </Button>
        <Body>
          {children}
        </Body>
      </Content>
    </ModalContainer>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  width: PropTypes.string
}

Modal.defaultProps = {
  width: '40'
}
