import React, { useState, createContext } from 'react'

export const ModalContext = createContext()

const Provider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [dataModal, setDataModal] = useState('')

  const value = {
    isOpen,
    modalShow: () => {
      setIsOpen(true)
    },
    modalHide: () => {
      setIsOpen(false)
    },
    dataModal,
    changeDataModal: (data) => {
      setDataModal(data)
    }
  }

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  )
}

export default {
  Provider,
  Consumer: ModalContext.Consumer
}
