import { createContext, useState, useEffect } from 'react'
//Esse é o valor atual de acesso
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(true)
  const value = { currentUser, setCurrentUser }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
