import styled from 'styled-components'

export const Image = styled.img`
  width: 100%;
  max-width: 100%;
`

export const Tab = styled.div`
  display: ${props => props.active ? 'flex' : 'none'};
`

export const Figure = styled.figure`
  width: 100%;
`

export const Responsive = styled.div`
  width: 100%;
  display: flex;
`
