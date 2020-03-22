import React, { useContext } from 'react'
import { TabContext } from '../../../Context/Tab'
import { Content } from './styles'

export const TabContent = ({ id, children }) => {
  const { activeTab } = useContext(TabContext)

  return activeTab === id && <Content>{children}</Content>
}
