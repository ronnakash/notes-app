import ISigninForm from "./SigninForm";
import ISignupForm from "./SignupForm";
import IUser from "./User";
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