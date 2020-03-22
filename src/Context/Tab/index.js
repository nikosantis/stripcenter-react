import React, { useState, createContext } from 'react'

export const TabContext = createContext()

const Provider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('1')

  const changeActiveTab = (number) => {
    setActiveTab(number)
  }

  const value = {
    activeTab,
    changeTab: (number) => {
      changeActiveTab(number)
    }
  }

  return (
    <TabContext.Provider value={value}>
      {children}
    </TabContext.Provider>
  )
}

export default {
  Provider,
  Consumer: TabContext.Consumer
}
