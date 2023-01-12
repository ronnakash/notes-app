import {Card} from 'react-bootstrap'
import {BsGithub} from 'react-icons/bs'

const AboutPage = (props: {}) => {
    
    return (
        <div>
            <div className='about-header'>
                <h1 className='about-header'> About The App </h1>
            </div>
            <Card className='form-container-small' style={{ width: '36rem', height:'20rem'}}>
                <Card.Body>
                    <Card.Title 
                        className="mb-2 ">
                        Backend Server
                    </Card.Title>
                    <Card.Text>
                        NestJS server written in Typescript. The server uses a MongoDB database to store user information and notes.
                    </Card.Text>

                    <Card.Title 
                        className="mb-2 ">
                        Frontend
                    </Card.Title>
                    <Card.Text>
                        React frontend web application writtend in Typescript. 
                        App allows logged in users to create, view and edit notes. App supports login with Google
                    </Card.Text>
                    <Card.Subtitle 
                        className="mb-2"
                        style={{marginTop: "30px"}}>
                        Links
                    </Card.Subtitle>
                    <Card.Link 
                        target="_blank" 
                        href="https://github.com/ronnakash/Server">
                        <BsGithub/>
                        Backend
                    </Card.Link>
                    <Card.Link 
                        target="_blank" 
                        href="https://github.com/ronnakash/notes-app">
                        <BsGithub/>
                        Frontend
                    </Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
};

export default AboutPage;