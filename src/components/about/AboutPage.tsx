import {Card} from 'react-bootstrap'

const AboutPage = (props: any) => {
    

    return (
        <div>
            <div className='about-header'>
                <h1 className='about-header'> About The App </h1>
                <body className='about-text'>
                    This is a React app for creating and editing notes.
                </body>
                <body>
                    The app has a Typescript Nodejs backend and uses MongoDB to store users notes.
                </body>
            </div>

            <Card className='form-container' style={{ width: '36rem', height:'36rem'}}>
                <Card.Body>
                    <Card.Img 
                        className='top-margin' 
                        variant="top" 
                        src="https://i.imgur.com/7spsp7a.jpg"/>
                    <Card.Title>
                        Ron Nakash
                    </Card.Title>
                    <Card.Subtitle 
                        className="mb-2 text-muted">
                        Fullstack Software Developer
                    </Card.Subtitle>
                    <Card.Text>
                    I'm a third year computer science student at The Open University of Israel, looking for my first job in the software development field. 
                    </Card.Text>
                    <Card.Link 
                        target="_blank" 
                        href="https://github.com/ronnakash">
                        GitHub Link
                    </Card.Link>
                    <Card.Link 
                        target="_blank" 
                        href="https://www.linkedin.com/in/ron-nakash-402912223/">
                        Linkedin Link
                    </Card.Link>
                </Card.Body>
            </Card>
        </div>

    )

};

export default AboutPage;