import React from 'react'
import TabContext from '../../../../Context/Tab'

export const TabContextWrapper = ({ children }) => (
  <TabContext.Provider>
    {children}
  </TabContext.Provider>
)
