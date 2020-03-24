import React from 'react'
import ModalContext from '../../../../Context/Modal'

export const ModalContextWrapper = ({ children }) => (
  <ModalContext.Provider>
    {children}
  </ModalContext.Provider>
)
