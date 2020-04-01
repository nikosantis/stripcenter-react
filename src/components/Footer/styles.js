import styled from 'styled-components'
import { MQ } from '../../styles/mq'

export const FooterContainer = styled.footer`
  background: #1d1d1b;
  padding-bottom: 1.8rem;
`

export const LogoText = styled.p`
  width: 100%;
  margin-bottom: 10px!important;
`

export const Titles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`

export const Logos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`

export const LogoDesarrolla = styled.p`
  margin-right: 30px;
  margin-left: 30px;
  width: 100px;

  ${MQ.md`
    width: 100px;
  `}
`

export const LogoComercializa = styled.p`
  margin-right: 30px;
  margin-left: 30px;
  width: 150px;
  ${MQ.md`
    width: 130px;
  `}
`

export const Cbs = styled.img`
  margin-right: 30px;
  margin-left: 30px;
  width: 100px;

  ${MQ.md`
    width: 100px;
  `}
`

export const Recorp = styled.img`
  margin-right: 30px;
  margin-left: 30px;
  width: 150px;
  ${MQ.md`
    width: 130px;
    height: 60px;
  `}
`

export const FooterColumns = styled.div`
  padding-top: 10px;
`

export const Hr = styled.hr`
  height: 1px;
`

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
`

export const Icon = styled.span`
  font-size: 25px;
  vertical-align: bottom;
  margin-right: 10px;
`
