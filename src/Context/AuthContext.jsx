
import React, { createContext } from 'react'
import Cookies from 'js-cookie';
export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  
    const token = Cookies.get('token') 
    return (
        <AuthContext.Provider value={token}>
            {children}  
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
