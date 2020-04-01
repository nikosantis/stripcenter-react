import styled from 'styled-components'
import { TabContent } from '../Reusables/Tab'
import { MQ } from '../../styles/mq'

export const Container = styled.section`

`

export const Image = styled.img`
  width: 100%;
  max-width: 100%;
`

export const Tab = styled(TabContent)`
  display: ${props => props.active ? 'flex' : 'none'};
  height: 450px;
`

export const Figure = styled.figure`
  width: 100%;
`

export const Responsive = styled.div`
  width: 100%;
  display: flex;
`

export const Title = styled.h1`
  text-align: center;
  ${MQ.md`
    text-align: left;
  `}
`

export const Subtitle = styled.h1`
  text-align: center;
  ${MQ.md`
    text-align: left;
  `}
`
