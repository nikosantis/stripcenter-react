import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Field = styled.div`
  margin-bottom: 1.5rem !important;
`

export const Control = styled.div`
  padding-top: 20px;
  position: relative;
`

export const Input = styled.input`
  border: none;
  border-radius: 0;
  background-color: transparent;
  box-shadow: none;
  border-bottom: 1px solid #ffffff;
  color: #ffffff!important;

  &::placeholder {
    color: #ffffff!important;
  }
`

export const Label = styled.label`
  position: absolute;
  top: 0.25rem;
  pointer-events: none;
  padding-left: 0.125rem;
  z-index: 1;
  font-size: 1rem;
  transition: all 0.38s ease;
  color: #ffffff!important;
  text-transform: uppercase;
`

export const LabelPreRadio = styled.label`
  color: #ffffff!important;
  text-transform: uppercase;
  text-align: left;
  margin-right: 50px;
  margin-bottom: 0 !important;
`

export const RadioField = styled.div`
  margin-bottom: 1.5rem !important;
  align-items: center;
`

export const TextArea = styled.textarea`
  border: none;
  border-radius: 0;
  background-color: transparent;
  box-shadow: none;
  border-bottom: 1px solid #ffffff;
  color: #ffffff!important;
`
