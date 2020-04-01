import styled from 'styled-components'
import { colors } from '../../styles/colors'
import { MQ } from '../../styles/mq'

export const Columns = styled.div`
  align-items: center;
`

export const DivTab = styled.div`
`

export const Tab = styled.div`
  display: ${props => props.activetab ? 'flex' : 'none'};
`

export const DivFlex = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Text = styled.div`
  color: ${colors.red};
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`

export const DivCenter = styled.div`
  text-align: center;
  ${MQ.md`
    text-align: left;
  `}
`

export const Figure = styled.figure`
  width: 100%;
`

export const Image = styled.img`
  width: 100%;
  max-width: 100%;
`
