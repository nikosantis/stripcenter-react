import styled from 'styled-components'
import { TabContent } from '../Reusables/Tab'
import { colors } from '../../styles/colors'
import { MQ } from '../../styles/mq'

export const Tab = styled(TabContent)`
  height: 450px;
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
