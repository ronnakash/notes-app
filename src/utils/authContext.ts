import { createContext, useState } from "react";
import { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import IAuthContext from '../interfaces/AuthContext'
import IUser from "../interfaces/User";

const defaultContext : IAuthContext = {
    signIn: async () => {},
    signOut: async () => {},
    register: async () => {},
    signInWithGoogle: async (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {},
    user: undefined,
    updateUser : (user : IUser | undefined) => {},
    loginRedirect: async () => {}
	}




const AuthContext = createContext(defaultContext);

export default AuthContext;