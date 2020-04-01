import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { MQ } from '../../../styles/mq'

export const ModalContainer = styled.div`
  align-items: center;
  display: ${props => props.display || 'none'};
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  z-index: 40;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`

export const Background = styled.div`
  background-color: rgba(10,10,10,.86);
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`

export const Content = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 40px);
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  border-radius: 6px;
  width: 90%;

  ${MQ.md`
    width: 70%;
  `}
`

export const Button = styled.button`
  border: none;
  cursor: pointer;
  outline: 0;
  position: absolute;
  right: 0;
  top: 15px;
  background: transparent;
`

export const Exit = styled(FaTimes)`
  font-size: 20px;
  vertical-align: middle;
  margin-right: 10px;
`

export const Body = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  overflow: auto;
  padding: 40px 25px 30px 25px;
`
