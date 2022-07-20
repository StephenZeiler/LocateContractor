import { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { AuthMssg } from './BusinessPage';
const PersonalPage = () => {
    <h3 id="personal">Personal</h3>
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
            <AuthMssg page="personal"> </AuthMssg>
        );
    }

    return (
        <div>
            <div>
                <p id="welcome">
                    Welcome, &nbsp;{userInfo.name}!
                </p>
                <p>You have successfully authenticated against your Okta org, and have been redirected back to your PERSONAL PAGE.</p>
            </div>
        </div>
    );
};

export default PersonalPage;