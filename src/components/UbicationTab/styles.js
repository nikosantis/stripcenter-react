import styled from 'styled-components'
import { TabContent } from '../Reusables/Tab'

export const Image = styled.img`
  width: 100%;
  max-width: 100%;
`

export const Tab = styled(TabContent)`
  display: ${props => props.active ? 'flex' : 'none'};
  height: 450px;
  &.ubication-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  &.ubication-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  &.ubication-exit {
    opacity: 1;
  }
  &.ubication-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`

export const Figure = styled.figure`
  width: 100%;
`

export const Responsive = styled.div`
  width: 100%;
  display: flex;
`
