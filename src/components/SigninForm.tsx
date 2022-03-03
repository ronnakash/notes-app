import React, { useContext } from 'react';
import useForm from '../utils/hooks/signin';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline, GoogleLogout  } from 'react-google-login';
import API from '../utils/requests/API'
import AuthContext from '../utils/authContext';
import IUser from '../interfaces/IUser';


const SigninForm = (props : {submitForm : (event : any) => void , signInWithGoogle : (res: GoogleLoginResponse | GoogleLoginResponseOffline) => void}) => {
  

  let {submitForm, signInWithGoogle} = props;

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm
  );


  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Log into your account by filling out the information below, or use one of your social media accounts.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign in
        </button>
        <GoogleLogin
          className='googleLoginButton'
          clientId={"888361755327-ad9pvtvsfpkhk09fqtpsqepbgtcapg4r.apps.googleusercontent.com"}
          onFailure={() => {console.log('failed login with google')}}
          onSuccess={signInWithGoogle}
          onRequest={() => {console.log('requesting google login')}}
          scope='openid profile email'
          responseType='code'
          prompt='consent'
        />

        <span className='form-input-login'>
            Don't have an account? Register <a href='/register'>here</a>
          </span>
      </form>
    </div>
  );
};

export default SigninForm;