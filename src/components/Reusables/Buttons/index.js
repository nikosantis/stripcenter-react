import React from 'react'
import {
  Submit,
  Btn
} from './styles'

export const SubmitButton = ({ children }) => (
  <Submit className='button is-danger is-rounded'>
    {children}
  </Submit>
)

export const Button = ({ children }) => (
  <Btn className='button is-danger is-rounded'>
    {children}
  </Btn>
)
