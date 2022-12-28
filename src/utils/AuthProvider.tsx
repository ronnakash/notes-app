import React, { useState } from "react";
import AuthContext from "./authContext"
import { CookiesProvider } from 'react-cookie';
import ISigninForm from "../interfaces/ISigninForm";
import ISignupForm from "../interfaces/ISignupForm";
import IUser from "../interfaces/IUser";
import API from "./requests/API";
import { useCookies } from "react-cookie";
import { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";



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
        setUserAndCookie(newUser)
  };

  const register = async (form : ISignupForm) => {
      let newUser = await API.register(form);
      if (newUser) 
        setUserAndCookie(newUser)
  };

  const signInWithGoogle = async (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    let googleUser = await API.googleLoginUser(res.code?? '');
    if (googleUser) 
        setUserAndCookie(googleUser)
  };

const loginRedirect = () => {
    console.log('redirected')
    console.log(window.location)
    window.location.replace(window.location.origin + '/login')
}

  return {signIn, signOut, register, signInWithGoogle, user, updateUser: setUserAndCookie, loginRedirect}
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