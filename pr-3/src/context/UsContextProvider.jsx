import React from 'react';
import UsContext from './UsContext';

const UsContextProvider = ({children}) => {
    const [user,setUser] = React.useState(null)
  return (
    <UsContext.Provider value={{user,setUser}}>
         {children}
    </UsContext.Provider>
  )
}

export default UsContextProvider;