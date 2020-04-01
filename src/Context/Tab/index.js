import React, { useState, createContext } from 'react'

export const TabContext = createContext()

const Provider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('1')
  const [dataTab, setDataTab] = useState('')

  const value = {
    activeTab,
    changeActiveTab: (number) => {
      setActiveTab(number)
    },
    dataTab,
    changeDataTab: (data) => {
      setDataTab(data)
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
