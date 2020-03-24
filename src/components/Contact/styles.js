import styled from 'styled-components'
import { Parallax } from 'react-parallax'
import { MQ } from '../../styles/mq'

export const ContactContainer = styled.section`
  height: 1300px;
  position: relative;
  width: 100vw;

  ${MQ.sm`
    height: 750px;
  `}

  ${MQ.lg`
    height: 800px;
  `}
`

export const ContactParallax = styled(Parallax)`
  height: 1300px;
  position: relative;

  ${MQ.sm`
    height: 750px;
  `}

  ${MQ.lg`
    height: 800px;
  `}

  & img {
    object-fit: cover;
  }
`

export const Title = styled.h1`
  margin-bottom: 35px!important;
  font-weight: 700;
  text-align: center;

  ${MQ.lg`
    text-align: left;
  `}
`

export const TitleContent = styled.h2`
  text-align: center;

  ${MQ.lg`
    text-align: left;
  `}
`

export const Text = styled.p`
  font-weight: 600;
  line-height: 1.125;
  margin-bottom: 40px;
  font-size: 1rem;
  text-align: center;

  ${MQ.lg`
    text-align: left;
  `}

  & a {
    color: #ffffff;
  }
`

export const Phones = styled.p`
  font-weight: 600;
  line-height: 1.125;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 5px;

  ${MQ.lg`
    text-align: left;
  `}

  & a {
    color: #ffffff;
  }
`

export const Icons = styled.div`
  justify-content: center;
  align-items: center;
  ${MQ.md`
    justify-content: start;
    align-items: left;
  `}
`

export const IconLayout = styled.div`
  display: flex;
`

export const Icon = styled.span`
  margin-right: 10px;
  vertical-align: middle;
`

export const IconText = styled.span`
  margin-right: 10px;
  color: #ffffff!important;
  vertical-align: middle;
  font-weight: 600;
`

export const Footer = styled.div`
  position: absolute;
  width: 100vw;
  display: flex;
  bottom: -1px;
  left: 0;
`

export const FooterLeft = styled.div`
  width: 65vw;
  height: 0;
  border-bottom: 100px solid #1d1d1b;
  border-right: 65vw solid transparent;

  ${MQ.md`
  border-bottom: 120px solid #1d1d1b;
  `}
`

export const FooterRight = styled.div`
  width: 35vw;
  height: 0;
  border-bottom: 100px solid #1d1d1b;
  border-left: 35vw solid transparent;

  ${MQ.md`
  border-bottom: 120px solid #1d1d1b;
  `}
`
