import styled from 'styled-components'
import { TabContent } from '../Reusables/Tab'
import { colors } from '../../styles/colors'
import { MQ } from '../../styles/mq'

export const DivTab = styled.div`
  height: 450px;
`

export const Tab = styled(TabContent)`
  height: 450px;
  display: ${props => props.active ? 'flex' : 'none'};
  &.alert-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  &.alert-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  &.alert-exit {
    opacity: 1;
  }
  &.alert-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
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
