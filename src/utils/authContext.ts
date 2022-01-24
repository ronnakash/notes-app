import { createContext, useState } from "react";
import IAuthContext from '../interfaces/IAuthContext'

const defaultContext : IAuthContext = {
    signIn: async () => {},
    signOut: async () => {},
    register: async () => {},
    user: undefined
}

export const AuthContext = createContext(defaultContext);

