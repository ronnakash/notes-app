import {Card} from 'react-bootstrap'

const AboutPage = (props: any) => {
    

    return (
        <div>
            <div className='about-header'>
                <h1> About The App </h1>
                <body>
                    {"This is a React app for creating and editing notes. The app has a Typescript Nodejs backend and uses MongoDB to store users notes."}
                </body>
            </div>

            <Card className='form-container' style={{ width: '36rem', height:'36rem'}}>
                <Card.Body>
                    <Card.Img className='top-margin' variant="top" src="https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg" />
                    <Card.Title>Ron Nakash</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Fullstack Software Developer</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Card.Link target="_blank" href="https://github.com/ronnakash">GitHub Link</Card.Link>
                    <Card.Link target="_blank" href="https://www.linkedin.com/in/ron-nakash-402912223/">Linkedin Link</Card.Link>
                </Card.Body>
            </Card>
        </div>

    )

};

export default AboutPage;