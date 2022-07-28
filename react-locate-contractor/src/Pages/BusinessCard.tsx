import React from 'react';
import { Typography, Card, CardContent, CardActions, Button } from '@mui/material';

export type business = {
    userEmailId: string,
    businessName: string,
    specialty: string,
    hoursOperation: string,
    emailContact: string,
    phoneContact: string,
    services: string,
    about: string,
}

const BusinessCard = (props: any) => {


    return (
        <Card variant="outlined" sx={{ maxWidth: props.cardWidth, height: props.cardHeight }} >
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.body}
                </Typography>
            </CardContent>
            <CardActions sx={{ height: props.actionHeight }}>
            </CardActions>
        </Card>
    );
}

export default BusinessCard;