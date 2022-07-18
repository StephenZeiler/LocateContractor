import { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import styled from 'styled-components';
const BusinessCard = styled.p`
Max-height: 100px;
Max-width: 500px;
`
const ServiceCard = styled.p`
Max-height: 100px;
Max-width: 500px;
`

const HoursCard = styled.p`
Max-height: 100px;
Max-width: 500px;
`
function BusinessPage() {
    <h3 id="personal">Business</h3>
    const { authState, oktaAuth } = useOktaAuth();
    const [userInfo, setUserInfo]: [userInfo: any, setUserInfo: any] = useState(null);
    const businessName = "TODO: A Business Name";
    const businessDesc = "TODO: A very good business";
    const serviceOffered = "TODO: These are my services offered";
    const hoursOperation = "TODO: Hours of operation";

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
            <div>
                <p>Fetching user info ...</p>
            </div>
        );
    }

    return (
        <div>
            <div>
                <p id="welcome">
                    Welcome, &nbsp;{userInfo.name}!
                </p>
                <p>
                    <div>
                        <h1> {businessName} </h1>
                        <BusinessCard> {businessDesc} </BusinessCard>
                        <ServiceCard> {serviceOffered} </ServiceCard>
                        <HoursCard> {hoursOperation} </HoursCard>
                    </div>
                </p>
            </div>
        </div>
    );
};

export default BusinessPage;