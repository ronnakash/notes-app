import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import User from "./User";
import { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";


export default interface AuthContext {
    signIn : (form: SigninForm) => Promise<void>
    signOut : () => Promise<void>  
    register : (form: SignupForm) => Promise<void>
    signInWithGoogle : (res: GoogleLoginResponse | GoogleLoginResponseOffline) => Promise<void>
    user : User | undefined
    updateUser : (user : User | undefined) => void 
    loginRedirect : () => Promise<void>
    homeRedirect : () => Promise<void>
}