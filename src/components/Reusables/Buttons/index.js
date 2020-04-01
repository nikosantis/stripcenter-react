import React from 'react'
import {
  Submit,
  Btn
} from './styles'

export const SubmitButton = ({ children, isValid, disabled }) => (
  <Submit className={`button is-danger is-rounded${isValid ? ' is-disabled' : ''}`} disabled={disabled}>
    {children}
  </Submit>
)

export const Button = ({ children }) => (
  <Btn className='button is-danger is-rounded'>
    {children}
  </Btn>
)
