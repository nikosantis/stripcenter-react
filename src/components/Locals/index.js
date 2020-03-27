import React from 'react'
import { Element } from 'react-scroll'
import { TabContextWrapper } from '../Reusables/Tab/TabContextWrapper'
import { LocalsNavbar } from '../LocalsNavbar'
import { LocalsTab } from '../LocalsTab'
import {
  Container,
  Title,
  Flex
} from './styles'

const Locals = ({ id }) => {
  return (
    <Container>
      <Element name={id}>
        <TabContextWrapper>
          <div className='container'>
            <div className='columns is-multiline is-centered is-mobile'>
              <div className='column is-10 mb-3'>
                <Title className='title is-3 s-title has-text-centered'>
              Strip Center de 4 pisos
                </Title>
              </div>

              <div className='column is-12-tablet is-10-desktop is-12-mobile'>
                <div className='columns'>
                  <div className='column is-3'>
                    <LocalsNavbar />
                  </div>

                  <Flex className='column is-9'>
                    <LocalsTab />
                  </Flex>
                </div>
              </div>
            </div>
          </div>
        </TabContextWrapper>
      </Element>
    </Container>
  )
}

export default Locals
