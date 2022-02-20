import { createContext, useState } from "react";
import { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import IAuthContext from '../interfaces/IAuthContext'
import IUser from "../interfaces/IUser";

const defaultContext : IAuthContext = {
    signIn: async () => {},
    signOut: async () => {},
    register: async () => {},
    signInWithGoogle: async (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {},
    user: undefined
}

const AuthContext = createContext(defaultContext);

export default AuthContext;