import ISigninForm from "../interfaces/ISigninForm";
import ISignupForm from "../interfaces/ISignupForm";
import IUser from "../interfaces/IUser";
import { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";


export default interface IAuthContext {
    signIn : (form: ISigninForm) => Promise<void> | undefined
    signOut : () => Promise<void> | undefined 
    register : (form: ISignupForm) => Promise<void> | undefined
    signInWithGoogle : (res: GoogleLoginResponse | GoogleLoginResponseOffline) => Promise<void>
    user : IUser | undefined
}