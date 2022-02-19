import React, { useState } from "react";
import AuthContext from "./authContext"
import { CookiesProvider } from 'react-cookie';
import ISigninForm from "../interfaces/ISigninForm";
import ISignupForm from "../interfaces/ISignupForm";
import IUser from "../interfaces/IUser";
import API from "./requests/API";
import { useCookies } from "react-cookie";



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


  const signOut = async () => {
      console.log('signing out')
      console.log(user);
      setUser(undefined);
      console.log(user);
      removeCookie('user');
  };

  const signIn = async (form : ISigninForm) => {
      console.log("login");
      let user = await API.login(form);
      console.log(user);
      console.log('setting user!')
      setUser(user)
      setCookie('user', user, cookieOptions)
  };

  const register = async (form : ISignupForm) => {
      console.log("register");
      let user = await API.register(form);
      console.log(user);
      console.log('setting user!')
      setUser(user);
      setCookie('user', user, cookieOptions);
  };

  const signInWithGoogle = async (googleUser : IUser) => {
    console.log("signed in with google!")
    setUser(googleUser);
  };

  return {signIn, signOut, register, user, signInWithGoogle}
}
//let values = {signIn, signOut, register, user};

/** */


/*
  const value = useMemo( () => ({user, setUser}), [user, setUser]) 
*/


    let auth = useValues();
    let { children } = props;
    return (
        <AuthContext.Provider value = {auth}> 
                {children}
        </AuthContext.Provider>
        
    );
};

export default AuthProvider;