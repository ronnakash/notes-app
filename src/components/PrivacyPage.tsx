

const PrivacyPage = () => {

    return (

        <div>
            <div className='about-header'>
                <h1 className='about-header'> Privacy Policy </h1>
                <body className='about-text'>
                    The app stores user data on MongoDB database.
                </body>
                <body>
                    The database is secure, but all data other than user passwords are not encrypted.
                </body>
                <body>
                    If you login using Google authentication, the app wil not keep an access token for your user credentials.
                </body>
                <body>
                    Do not save any sensitive data in notes!
                </body>
            </div>
        </div>
    )

};

export default PrivacyPage