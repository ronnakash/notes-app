import AuthContext from '../../utils/authContext'
import { CSSProperties, useContext } from 'react'
import {Dropdown} from 'react-bootstrap'


const UserMenu = (props: {showMenu : boolean, setShowMenu : Function, baseStyle : CSSProperties}) => {

    const {user, signOut, loginRedirect} = useContext(AuthContext);

    // const [left, setLeft] = useState(window.innerWidth-190);

    // var baseStyle : CSSProperties = {
    //     position: 'absolute',
    //     // right: `${20}px`,
    //     left: `${window.innerWidth-190}px`,
    //     top: '50px',
    // }


    const UserAvatar = require('react-user-avatar');
    let {showMenu, setShowMenu, baseStyle} = props;



    const handleSignOut = () => {
        setShowMenu(false);
        signOut();
        loginRedirect();
    }


    // const handleResize = () => {
    //     baseStyle.left = `${window.innerWidth-190}px`;
    //     setStyle(baseStyle);
    // }

    const userInitials = () => {
        return (user && user.username)? user.username.substring(0,1).toUpperCase() : 'f'
    }

    // const cleanup : = (ret : any) => {window.removeEventListener('resize', handleResize)};

    // useEffect(() => { 
    //     window.addEventListener('resize', handleResize)
    //     handleResize();
    // },[])

    return(
        user==null?
            <Dropdown.Menu align="end" show={showMenu} style={ baseStyle } >
                <Dropdown.Item eventKey="1" href='/login' >Sign in</Dropdown.Item>
                <Dropdown.Item eventKey="2" href='/register' >Register</Dropdown.Item>
            </Dropdown.Menu> :
            <Dropdown.Menu align="end" show={showMenu} style={ baseStyle } >
                <div className='userDisplay'>
                    <div>
                    <UserAvatar className='bigAvatar' size="64" name={userInitials()} src={user.picture}/>
                    </div>
                    <div className='userDisplayData'>
                        <span className='boldText'>{user.username}</span>
                        <span className='greyText'>{user.email}</span>
                    </div>
                </div>
                <Dropdown.Divider />
                <Dropdown.Item eventKey='3' href='/notes'>Notes</Dropdown.Item>
                <Dropdown.Item eventKey='4' href='/profile' >Profile</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey='5' onClick={handleSignOut} className='dangerItem' >Sign out</Dropdown.Item>
            </Dropdown.Menu> 
    )

}

export default UserMenu;