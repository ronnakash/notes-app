import { useContext } from 'react';
import SignupForm from './SignupForm';
import AuthContext from '../../utils/authContext';

const RegisterBox = (props : any) => {
    
    let {register} = useContext(AuthContext);

        return (
        <div className= 'form-container'>
            <SignupForm submitForm={register} />
            <span className='form-input-login'>
                have an account? Login <a href='/login'>here</a>
            </span>
        </div>
    );


}

export default RegisterBox;