import React from 'react'
import {
  Submit
} from './styles'

export const SubmitButton = ({ children }) => (
  <Submit className='button is-danger is-rounded'>
    {children}
  </Submit>
)
