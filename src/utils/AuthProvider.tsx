import React, { useState } from "react";
import AuthContext from "./authContext"
import ISigninForm from "../interfaces/SigninForm";
import ISignupForm from "../interfaces/SignupForm";
import IUser from "../interfaces/User";
import API from "./requests/API";
import { useCookies } from "react-cookie";
import { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import Swal from "sweetalert2";



const AuthProvider = ( props: {children : any}) => {

/** */
const useValues = () => {

    const [cookies, setCookie, removeCookie] = useCookies();
    let cookieUser = cookies?.user;
    let emptyUser : IUser | undefined;
    const [user, setUser] = useState(cookieUser? cookieUser : emptyUser);
  const cookieOptions = {
      path: '/',
      maxAge: 86400, 
      secure: true
  };

  const setUserAndCookie = (newUser : IUser | undefined) => {
      setUser(newUser);
      setCookie('user', newUser, cookieOptions)
  }

  const removeUserAndCookie = () => {
        setUser(undefined);
        removeCookie('user');
  }

  const signOut = async () => {
        removeUserAndCookie();
  };

  const signIn = async (form : ISigninForm) => {
      let newUser = await API.login(form);
      if (newUser) 
        setUserAndCookie(newUser);
  };

  const register = async (form : ISignupForm) => {
      let newUser = await API.register(form);
      if (newUser) {
        Swal.fire({
            title: 'Created User',
            text:  `Created user ${newUser.username} successfully.\nClick ok to be redirected to the login screen`,
            icon: 'success' ,
            confirmButtonText: 'Ok'
          }).then(homeRedirect)
      }
    //   setUserAndCookie(newUser)
  };

  const signInWithGoogle = async (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    let googleUser = await API.googleLoginUser(res.code?? '');
    if (googleUser) 
        setUserAndCookie(googleUser)
  };

  const homeRedirect = async () => {
    // console.log('redirected')
    console.log(window.location);
    if (window.location.href != (window.location.origin+'/'))
        window.location.replace(window.location.origin);
    else
      console.log('no redirect');
}

const loginRedirect = async () => {
    // console.log('redirected')
    if (!user)
        window.location.replace(window.location.origin);
    else 
        window.location.replace(window.location.origin + '/login');

}

  return {signIn, signOut, register, signInWithGoogle, user, updateUser: setUserAndCookie, loginRedirect, homeRedirect}
}

    let auth = useValues();
    let { children } = props;
    return (
        <AuthContext.Provider value={auth}> 
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;