import { business } from "./BusinessCard"
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from "@mui/material";
import WriteReview from "./WriteReview";
import { useNavigate } from "react-router-dom";
export const SearchCard = (props: { Business: business }) => {
    const navigate = useNavigate();
    console.log(props.Business.userEmailId)
    const handleCreateReview = async () => navigate(`/Review/${props.Business.userEmailId}`);
    const handleAllReviews = async () => navigate(`/AllReview/${props.Business.userEmailId}`);

    return (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props && props.Business.specialty}
                </Typography>
                <Typography variant="h5" component="div">
                    {props && props.Business.businessName}
                </Typography>
                <Typography sx={{}} color="text.secondary">
                    {"Phone: "}{props && props.Business.phoneContact}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {"Email: "}{props && props.Business.emailContact}
                </Typography>
                <Typography variant="body2">
                    {"Business Hours: "}{props && props.Business.hoursOperation}
                    <br />
                    {"Services Offered: "}{props.Business.services}
                </Typography>
            </CardContent>
            <CardActions>
                {props && <Button onClick={handleAllReviews} size="small">See Reviews</Button>}
                {props && <Button onClick={handleCreateReview} size="small">Write Review</Button>}
            </CardActions>
            <Divider variant="middle" />
        </React.Fragment>
    );
}