import { useState, useEffect } from 'react';
import ISigninForm from '../../interfaces/SigninForm';
import ISigninFormError from '../../interfaces/SigninFormError'
import useForm from './useForm';

const useSignInForm = (callback : (values : ISigninForm) => void ) : {handleChange : (event : any) => void, handleSubmit : (event : any) => void, values : ISigninForm, errors : ISigninFormError} => {
    
    let emptyErrors : ISigninFormError = {
        username: undefined,
        email: undefined,
        password: undefined,
    };

    let emptyValues : ISigninForm = {
      username: '',
      email: '',
      password: '',
    };

    function validateInfo(values : ISigninForm) {
        let errors : ISigninFormError = {
            username: undefined,
            email: undefined,
            password: undefined,
        };
      
        if (!values.username.trim()) {
          errors.username = 'Username required';
        }    
        if (!values.email) {
          errors.email = 'Email required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
          errors.email = 'Email address is invalid';
        }
        if (!values.password) {
          errors.password = 'Password is required';
        } else if (values.password.length < 6) {
          errors.password = 'Password needs to be 6 characters or more';
        }
        return errors;
      }

      return useForm({callback, validateInfo, emptyValues, emptyErrors});

};

export default useSignInForm;
