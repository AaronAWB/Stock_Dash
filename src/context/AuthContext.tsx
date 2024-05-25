import { createContext, useContext } from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import { auth } from '../firebase'

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  return (
    <UserContext.Provider value={{createUser, signIn}}>
      {children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext)
}