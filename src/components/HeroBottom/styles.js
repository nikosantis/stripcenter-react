import styled from 'styled-components'
import { MQ } from '../../styles/mq'

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  display: flex;
  bottom: 0;
  z-index: 3;
`

export const Left = styled.div`
  width: 65vw;
  height: 0;
  border-bottom: 100px solid #ffffff;
  border-right: 65vw solid transparent;

  ${MQ.md`
    border-bottom: 120px solid #ffffff;
  `}
`

export const Right = styled.div`
  width: 35vw;
  height: 0;
  border-bottom: 100px solid #ffffff;
  border-left: 35vw solid transparent;

  ${MQ.md`
    border-bottom: 120px solid #ffffff;
  `}
`
