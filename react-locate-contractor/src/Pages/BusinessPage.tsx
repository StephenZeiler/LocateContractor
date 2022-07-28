import { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Typography, Container } from '@mui/material';
import GetBusinessData from '../Services/GetBusiness';

export const AuthMssg = (pageName: any) => {
    return (
        <div>
            <p>Uh oh, you are not logged in! To access the {pageName.page} page you must be logged in...</p>
        </div>
    );
}


function BusinessPage() {
    < h3 id="personal" > Business </h3 >
    const { authState, oktaAuth } = useOktaAuth();
    const [userInfo, setUserInfo]: [userInfo: any, setUserInfo: any] = useState(null);

    useEffect(() => {
        if (!authState || !authState.isAuthenticated) {
            // When user isn't authenticated, forget any user info
            setUserInfo(null);
        } else {
            oktaAuth.getUser().then((info: any) => {
                setUserInfo(info);
            }).catch((err) => {
                console.error(err);
            });
        }
    }, [authState, oktaAuth]); // Update if authState changes

    if (!userInfo) {
        return (
            <AuthMssg page="business"> </AuthMssg>
        );
    }
    return (
        <div>
            <div>
                <Typography variant="button" id="welcome">
                    Welcome, &nbsp;{userInfo.name}!
                </Typography >
<<<<<<< HEAD
                <Container>

=======
                <Container sx={{ mt: 10, mb: 2 }}>
>>>>>>> main
                    {userInfo && userInfo.email && <GetBusinessData searchString={userInfo.email} />}
                </Container>
            </div>
        </div >
    );
};

export default BusinessPage;