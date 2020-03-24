import styled from 'styled-components'
import { Fade } from 'react-slideshow-image'
import { colors } from '../../styles/colors'
import { MQ } from '../../styles/mq'

export const Layout = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
`

export const Container = styled.div`
  width: 100% !important;
  max-width: 100% !important;
  height: 100vh;
  min-height: 100vh;
`

export const Carousel = styled(Fade)`
  height: 100vh;
`

export const Image = styled.div`
  width: 100vw;
  background: url(${props => props.bg});
  background-size: cover;
  height: 100vh;
`

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 3;
  display: flex;
  background: linear-gradient(to bottom, white 0%, rgba(255, 255, 255, 0.11) 25%, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0) 100%);
`

export const Body = styled.div`
  align-items: center;
  display: flex;
  padding: 3rem 1.5rem;
  width: 100%;
`

export const ContainerContent = styled.div`
  text-align: center;
`

export const Title = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-size: 38px;
  text-shadow: 0px 3px 10px rgba(0, 0, 0, 0.4);
  font-weight: 700;
  margin-bottom: 50px !important;
`

export const Subtitle = styled.h2`
  color: rgba(255,255,255,.9);
  text-transform: uppercase;
  text-shadow: 0px 3px 10px rgba(0, 0, 0, 0.4);
  font-weight: 700;
  margin-bottom: 50px !important;
`
