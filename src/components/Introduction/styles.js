import styled from 'styled-components'
import { MQ } from '../../styles/mq'

export const Section = styled.section`
  padding: 3rem 1.5rem;
`

export const Content = styled.div`
  margin-bottom: 45px;
`

export const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  margin-bottom: 40px !important;
  font-size: 1.75rem;

  ${MQ.sm`
    text-align: left;
    font-size: 2rem;
  `}
`

export const Subtitle = styled.h2`
  margin-bottom: 35px!important;
  text-align: center;

  ${MQ.lg`
    text-align: left;
  `}
`

export const Icon = styled.figure`
  margin: auto;
`

export const TextIcon = styled.h3`
  font-size: 1.25rem;
  font-weight: 700 !important;
  text-align: center !important;
  color: ${props => props.color};
`
