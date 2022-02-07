import { createContext, useState } from "react";
import IAuthContext from '../interfaces/IAuthContext'

const defaultContext : IAuthContext = {
    signIn: async () => {},
    signOut: async () => {},
    register: async () => {},
    user: undefined
}

const AuthContext = createContext(defaultContext);

export default AuthContext;