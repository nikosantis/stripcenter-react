import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const Btn = styled.button`
  text-transform: uppercase;
  font-weight: 700;
  border-color: #ffffff!important;
`

export const Submit = styled.button`
  text-transform: uppercase;
  font-weight: 700;
  border-color: #ffffff!important;

  &.is-disabled {
    opacity: .5;
    cursor: not-allowed;
  }
`
