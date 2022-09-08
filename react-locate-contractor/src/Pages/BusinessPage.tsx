import { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Typography, Container, Alert, AlertTitle } from '@mui/material';
import GetBusinessData from '../Services/GetBusiness';

export const AuthMssg = (pageName: any) => {
    return (
        <div>
            <Alert severity="error" sx={{ mt: 3 }}>
                <AlertTitle>Error</AlertTitle>
                <strong>Login Failure - </strong> You must be logged in for access to your {pageName.page}.
            </Alert>
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
            !userInfo && oktaAuth.getUser().then((info: any) => {
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
                <Container sx={{ mt: 10, mb: 2 }}>
                    {userInfo && userInfo.email && <GetBusinessData searchString={userInfo.email} />}
                </Container>
            </div>
        </div >
    );
};

export default BusinessPage;