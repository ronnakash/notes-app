import ISigninForm from "../interfaces/ISigninForm";
import ISignupForm from "../interfaces/ISignupForm";
import IUser from "../interfaces/IUser";
import { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";


export default interface IAuthContext {
    signIn : (form: ISigninForm) => Promise<void>
    signOut : () => Promise<void>  
    register : (form: ISignupForm) => Promise<void>
    signInWithGoogle : (res: GoogleLoginResponse | GoogleLoginResponseOffline) => Promise<void>
    user : IUser | undefined
    updateUser : (user : IUser | undefined) => void 
    loginRedirect : () => Promise<void>
}