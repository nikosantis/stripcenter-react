import styled from 'styled-components'
import { fonts } from '../../styles/fonts'
import { MQ } from '../../styles/mq'

export const Subtitle = styled.div`
  font-size: 1rem;
  font-family: ${fonts.mainFont};
  color: #7a7a7a;
  font-weight: 600;
  padding-bottom: 15px;
`

export const Li = styled.li`
  display: flex;
  justify-content: center;
  ${MQ.md`
    justify-content: left;
  `}
`

export const Button = styled.button`
  border: none;
  background: transparent;
  margin-bottom: 25px;
  text-align: left;
  cursor: pointer;

  &.active ${Subtitle} {
    border-bottom: 3px solid green;
    padding-bottom: 12px;
  }
`

export const Title = styled.div`
  color: rgba(54, 54, 54, 0.7)!important;
  text-transform: uppercase;
  font-weight: 700;
  font-family: ${fonts.mainFont};
  font-size: 1.25rem;
`
