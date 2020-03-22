import styled from 'styled-components'
import {
  MdRadioButtonUnchecked,
  MdRadioButtonChecked
} from 'react-icons/md'
import { colors } from '../../../styles/colors'

export const RadioContainer = styled.div`
  display: flex;
`

export const Content = styled.div`
  display: flex;
  cursor: pointer;
`

export const Radio = styled.div`
  padding: 9px;
  position: relative;
`

export const Input = styled.input`
  top: 0;
  left: 0;
  width: 100%;
  cursor: inherit;
  height: 100%;
  margin: 0;
  opacity: 0;
  padding: 0;
  z-index: 1;
  position: absolute;
`

export const Background = styled.div`
  display: flex;
  position: relative;
`

export const Checked = styled(MdRadioButtonChecked)`
  color: ${colors.red};
  font-size: 20px;
`

export const Unchecked = styled(MdRadioButtonUnchecked)`
  color: #ffffff;
  font-size: 20px;
`

export const Text = styled.label`
  color: #ffffff;
  padding-top: 6px;
  padding-bottom: 6px;
`
