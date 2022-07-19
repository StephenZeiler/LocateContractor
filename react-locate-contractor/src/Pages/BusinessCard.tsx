import { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Typography, Card, CardContent, CardActions, Container, Button } from '@mui/material';
import internal from 'stream';

export type business = {
    name: string,
    specialty: string,
    about: string,
    services: string,
    hoursOperation: string,
    yearsBusiness: string,
    phone: string,
    email: string,
}
const BusinessCard: any = (title: string, body: string, cardWidth: number, cardHeight: number, actionHeight: number) => {

    return (
        <Card variant="outlined" sx={{ maxWidth: cardWidth, height: cardHeight }} >
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {body}
                </Typography>
            </CardContent>
            <CardActions sx={{ height: actionHeight }}>
                <Button size="small">Edit</Button>
            </CardActions>
        </Card>
    );
}

export default BusinessCard;