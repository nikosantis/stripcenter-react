import React, { useState, createContext } from 'react'

export const TabContext = createContext()

const Provider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('1')
  const [dataTab, setDataTab] = useState('')
  const [isActive1, setIsActive1] = useState(true)
  const [isActive2, setIsActive2] = useState(false)
  const [isActive3, setIsActive3] = useState(false)
  const [isActive4, setIsActive4] = useState(false)
  const [isActive5, setIsActive5] = useState(false)

  const value = {
    activeTab,
    changeActiveTab: (number) => {
      setActiveTab(number)
    },
    dataTab,
    changeDataTab: (data) => {
      setDataTab(data)
    },
    isActive1,
    changeActive1: (bool) => {
      setIsActive1(bool)
    },
    isActive2,
    changeActive2: (bool) => {
      setIsActive2(bool)
    },
    isActive3,
    changeActive3: (bool) => {
      setIsActive3(bool)
    },
    isActive4,
    changeActive4: (bool) => {
      setIsActive4(bool)
    },
    isActive5,
    changeActive5: (bool) => {
      setIsActive5(bool)
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
