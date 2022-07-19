import { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Typography, Card, CardContent, CardActions, Container, Button } from '@mui/material';
import { business } from './BusinessCard';
import BusinessCard from './BusinessCard';


function BusinessPage() {
    <h3 id="personal">Business</h3>
    const { authState, oktaAuth } = useOktaAuth();
    const [userInfo, setUserInfo]: [userInfo: any, setUserInfo: any] = useState(null);

    const userBusiness: business = {
        name: "TODO: A Business Name",
        specialty: "TODO: a specialty",
        about: "TODO: A very good business",
        services: "TODO: These are my services offered",
        hoursOperation: "TODO: Hours of operation",
        yearsBusiness: "TODO: A lot of years",
        phone: "TODO: 612-321-3211",
        email: "TODO: todo@gmail.com"
    }

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
                <p>Uh oh, you are not logged in! To access you're business account you must be logged in...</p>
            </div>
        );
    }

    return (
        <div>
            <div>
                <Typography variant="button" id="welcome">
                    Welcome, &nbsp;{userInfo.name}!
                </Typography >
                <Container>
                    <BusinessCard title="Business Name:" body={userBusiness.name} cardWidth={500} cardHeight={140} actionHeight={0} > </BusinessCard>
                    {/* <Card variant="outlined" sx={{ maxWidth: 500, height: 140 }} >
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Business Name:
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {businessName}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Edit</Button>
                        </CardActions>
                    </Card>

                    <Card variant="outlined" sx={{ maxWidth: 500, height: 140 }} >
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Specialty:
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {specialty}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Edit</Button>
                        </CardActions>
                    </Card>
                    <Card variant="outlined" sx={{ maxWidth: 500, height: 140 }} >
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Years in Business:
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {yearsBusiness}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Edit</Button>
                        </CardActions>
                    </Card>
                    <Card variant="outlined" sx={{ maxWidth: 500, height: 140 }} >
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Hours of Operation:
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {hoursOperation}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Edit</Button>
                        </CardActions>
                    </Card>
                    <Card variant="outlined" sx={{ maxWidth: 500, height: 160 }} >
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Contact Information:
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Phone Number: {phone}

                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Email: {email}

                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Edit</Button>
                        </CardActions>
                    </Card>
                    <Card variant="outlined" sx={{ maxWidth: 500, height: 300 }} >
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Services:
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {serviceOffered}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ height: 360 }}>
                            <Button size="small">Edit</Button>
                        </CardActions>
                    </Card>
                    <Card variant="outlined" sx={{ maxWidth: 500, height: 300 }} >
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                About:
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {aboutBusiness}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ height: 360 }}>
                            <Button size="small">Edit</Button>
                        </CardActions>
                    </Card> */}
                </Container>
            </div>
        </div >
    );
};

export default BusinessPage;