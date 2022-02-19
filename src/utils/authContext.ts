import { createContext, useState } from "react";
import IAuthContext from '../interfaces/IAuthContext'
import IUser from "../interfaces/IUser";

const defaultContext : IAuthContext = {
    signIn: async () => {},
    signOut: async () => {},
    register: async () => {},
    signInWithGoogle: async (user: IUser) => {},
    user: undefined
}

const AuthContext = createContext(defaultContext);

export default AuthContext;