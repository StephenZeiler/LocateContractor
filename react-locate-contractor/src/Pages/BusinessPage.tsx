import { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Typography, Container } from '@mui/material';
import { business } from './BusinessCard';
import BusinessCard from './BusinessCard';
import { getBusiness } from '../Services/BusinessService';
import GetBusinesData from '../Services/GetBusiness';
import { get } from 'http';
// var test = GetBusiness("patchtest");
// console.log(test);
const test2 = getBusiness("stephen.zeiler@neudesic.com").then((res) => { console.log(res.data) })

export const AuthMssg = (pageName: any) => {
    return (
        <div>
            <p>Uh oh, you are not logged in! To access the {pageName.page} page you must be logged in...</p>
        </div>
    );
}

export const userBusiness: business = {
    userEmailId: "TODO: userEmailId",
    name: "TODO: A Business Name",
    specialty: "TODO: a specialty",
    about: "TODO: A very good business",
    services: "TODO: These are my services offered",
    hoursOperation: "TODO: Hours of operation",
    yearsBusiness: "TODO: A lot of years",
    phone: "TODO: 612-321-3211",
    email: "TODO: todo@gmail.com"
}

function BusinessPage() {
    <h3 id="personal">Business</h3>
    const { authState, oktaAuth } = useOktaAuth();
    const [userInfo, setUserInfo]: [userInfo: any, setUserInfo: any] = useState(null);


    useEffect(() => {
        if (!authState || !authState.isAuthenticated) {
            // When user isn't authenticated, forget any user info
            setUserInfo(null);
        } else {
            oktaAuth.getUser().then((info: any) => {
                setUserInfo(info);
                console.log({ userInfo })
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

    // if(user has a business name proceed){}

    return (
        <div>
            <div>
                <Typography variant="button" id="welcome">
                    Welcome, &nbsp;{userInfo.name}!
                </Typography >
                <Container>
                    {userBusiness && userBusiness.name && <BusinessCard title="Business Name:" body={userBusiness.name} cardWidth={500} cardHeight={140} actionHeight={0} > </BusinessCard>}
                    {userBusiness && userBusiness.name && <BusinessCard title="Specialty:" body={userBusiness.specialty} cardWidth={500} cardHeight={140} actionHeight={0} > </BusinessCard>}
                    {userBusiness && userBusiness.name && <BusinessCard title="Years in Business:" body={userBusiness.yearsBusiness} cardWidth={500} cardHeight={140} actionHeight={0} > </BusinessCard>}
                    {userBusiness && userBusiness.name && <BusinessCard title="Hours of Operation::" body={userBusiness.hoursOperation} cardWidth={500} cardHeight={140} actionHeight={0} > </BusinessCard>}
                    {userBusiness && userBusiness.name && <BusinessCard title="Contact Information:" body={"Phone:" + userBusiness.phone + " " + "Email: " + userBusiness.email} cardWidth={500} cardHeight={160} actionHeight={0} > </BusinessCard>}
                    {userBusiness && userBusiness.name && <BusinessCard title="Services:" body={userBusiness.services} cardWidth={500} cardHeight={300} actionHeight={360} > </BusinessCard>}
                    {userBusiness && userBusiness.name && <BusinessCard title="About:" body={userBusiness.about} cardWidth={500} cardHeight={300} actionHeight={360} > </BusinessCard>}

                </Container>
            </div>
        </div >
    );

    // else if( user does not have a business name send to business create page)
    {

    }
};

export default BusinessPage;