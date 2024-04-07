import React from 'react'
import UsContextProvider from './context/UsContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

const App = () => {
  return (
   <UsContextProvider>
   <Login/>
   <Profile/>
   </UsContextProvider>
  )
}

export default App