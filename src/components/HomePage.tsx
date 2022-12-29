import AuthContext from '../utils/authContext'
import { useContext } from 'react'
import LoginBox from './user/LoginBox';
import NotesList from './notes/NotesList';


const HomePage = () => {
    const {user, signOut, loginRedirect} = useContext(AuthContext);

    return (
        user? 
            <NotesList/> :
            <LoginBox/>
    )

}

export default HomePage;