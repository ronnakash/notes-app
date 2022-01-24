import { createContext, useState } from "react";
import ISigninForm from "../interfaces/ISigninForm";
import ISignupForm from "../interfaces/ISignupForm";
import IUser from "../interfaces/IUser";



interface IAuthContext {
    signIn : (form: ISigninForm) => Promise<void> | undefined
    signOut : () => Promise<void> | undefined 
    register : (form: ISignupForm) => Promise<void> | undefined
    user : IUser | undefined
}
const defaultContext : IAuthContext = {
    signIn: async () => {},
    signOut: async () => {},
    register: async () => {},
    user: undefined
}

export const AuthContext = createContext(defaultContext);
