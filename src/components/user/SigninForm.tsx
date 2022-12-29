import React, { useContext } from 'react';
import useForm from '../../utils/hooks/signin';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline, GoogleLogout  } from 'react-google-login';
import API from '../../utils/requests/API'
import AuthContext from '../../utils/authContext';
import User from '../../interfaces/User';
import { Button, Form, Card, Row, Col, InputGroup } from 'react-bootstrap'
import Swal from 'sweetalert2';


const SigninForm = (props : {submitForm : (event : any) => void , signInWithGoogle : (res: GoogleLoginResponse | GoogleLoginResponseOffline) => void}) => {
  
  let {submitForm, signInWithGoogle} = props;

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm
  );

    const failedLogin = () => {
      Swal.fire({
        title: 'Login Error',
        text:  'Faild to log you in with Google. please try again',
        icon: 'error' ,
        confirmButtonText: 'Dismiss'
      })
      console.log("Google login error")
    }

    const loginRedirect = () => {
      Swal.fire({
        title: 'Google Login',
        text:  'Finish login in the popup',
        icon: 'info' ,
        confirmButtonText: 'Ok'
      })
    }

    const googleLogin = (res : GoogleLoginResponse | GoogleLoginResponseOffline) => {
      Swal.close();
      signInWithGoogle(res);
    }

  return (
    <div className='center'>
      <h1 className='signin-header'>Sign In</h1>
      <Form noValidate onSubmit={handleSubmit}>
      <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          <Form.Label className='black-text'>Username</Form.Label>
          <InputGroup hasValidation>
              <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              onChange={handleChange}
              name='username'
              value={values.username}
              isValid={!errors.username && values.username!==''}
              isInvalid={(errors.username? true : false) && values.username!==''}
              />
              <Form.Control.Feedback type="invalid">
              {errors.username}
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
              
              </Form.Control.Feedback>
          </InputGroup>
          </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="12" controlId="validationCustom04">
          <Form.Label className='black-text'>Email</Form.Label>
          <Form.Control
          type="email" 
          name='email'
          placeholder="Email"
          onChange={handleChange}
          value={values.email}
          isValid={!errors.email && values.email!==''}
          isInvalid={(errors.email? true : false) && values.email!==''}
          />
          <Form.Control.Feedback type="invalid">
              {errors.email}
          </Form.Control.Feedback>
          </Form.Group>
      </Row>
      <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label className='black-text'>Password</Form.Label>
          <Form.Control 
          type="password" 
          name='password'
          placeholder="Password"
          onChange={handleChange}
          value={values.password}
          isValid={!errors.password}
          isInvalid={(errors.password? true : false) && values.password!==''}
          />
          <Form.Control.Feedback type="invalid">
              {errors.password}
          </Form.Control.Feedback>
          </Form.Group>
      </Row>
      <div className='even'>
        <Button type="submit" className='button-size button-space'>Login</Button>
        <GoogleLogin
              className='googleLoginButton'
              clientId={process.env.GOOGLE_CLIENT_ID? process.env.GOOGLE_CLIENT_ID : "888361755327-ad9pvtvsfpkhk09fqtpsqepbgtcapg4r.apps.googleusercontent.com"}
              onFailure={failedLogin}
              onSuccess={googleLogin}
              onRequest={loginRedirect}
              scope='openid profile email'
              responseType='code'
              prompt='consent'
            />
          </div>
      </Form>
    </div>
    
  );
};

export default SigninForm;