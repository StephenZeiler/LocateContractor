import { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Typography, Container } from '@mui/material';
import { business } from './BusinessCard';
import BusinessCard from './BusinessCard';
import CreateBusiness from './CreateBusiness';
import { getBusiness } from '../Services/BusinessService';
import { Business } from '@mui/icons-material';


async function UseBusinessName() {
    const result = await getBusiness("TEST1");
    console.log(result.data)
    return result.data;
}

const businessData = await UseBusinessName();


// async function UseBusinessName(email: string) {
//     var userBusiness: business;
//     var businessData: any;
//     businessData = await getBusiness(email);
//     userBusiness = {
//         userEmailId: email,
//         businessName: JSON.stringify(businessData.data[0].businessName),
//         specialty: JSON.stringify(businessData.data[0].specialty),
//         about: JSON.stringify(businessData.data[0].about),
//         services: JSON.stringify(businessData.data[0].services),
//         hoursOperation: JSON.stringify(businessData.data[0].hoursOperation),
//         phoneContact: JSON.stringify(businessData.data[0].phoneContact),
//         emailContact: JSON.stringify(businessData.data[0].emailContact)
//     }
//     console.log(userBusiness);
//     return (
//         { userBusiness }
//     );
// }
// const userBusiness = UseBusinessName("TEST1")
export const AuthMssg = (pageName: any) => {
    return (
        <div>
            <p>Uh oh, you are not logged in! To access the {pageName.page} page you must be logged in...</p>
        </div>
    );
}

const hasBusiness: boolean = false;

function BusinessPage(business: business) {
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
    var hasBusiness = false //temp value to force a createBusinessPage render
    if (hasBusiness) {
        const emailId: string = 'addTest'
        return (
            <CreateBusiness userInfo={userInfo} />
        );
    }

    else { //navigate to business page and display user's business data

        return (
            <div>
                <div>
                    <Typography variant="button" id="welcome">
                        Welcome, &nbsp;{userInfo.name}!
                    </Typography >
                    <Container>
                        {/* {userBusiness && (userBusiness).businessName && <BusinessCard title="Business Name:" body={(userBusiness).businessName} cardWidth={500} cardHeight={140} actionHeight={0} > </BusinessCard>}
                        {userBusiness && (userBusiness).businessName && <BusinessCard title="Specialty:" body={(userBusiness).specialty} cardWidth={500} cardHeight={140} actionHeight={0} > </BusinessCard>}
                        {userBusiness && (userBusiness).businessName && <BusinessCard title="Hours of Operation::" body={(userBusiness).hoursOperation} cardWidth={500} cardHeight={140} actionHeight={0} > </BusinessCard>}
                        {userBusiness && (userBusiness).businessName && <BusinessCard title="Contact Information:" body={"Phone:" + (userBusiness).phoneContact + " " + "Email: " + (userBusiness).emailContact} cardWidth={500} cardHeight={160} actionHeight={0} > </BusinessCard>}
                        {userBusiness && (userBusiness).businessName && <BusinessCard title="Services:" body={(userBusiness).services} cardWidth={500} cardHeight={300} actionHeight={360} > </BusinessCard>}
                        {userBusiness && (userBusiness).businessName && <BusinessCard title="About:" body={(userBusiness).about} cardWidth={500} cardHeight={300} actionHeight={360} > </BusinessCard>} */}

                    </Container>
                </div>
            </div >
        );
    };
};

export default BusinessPage;