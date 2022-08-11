import React from "react";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, Rating } from "@mui/material";
import WriteReview, { review } from "./WriteReview";
import { useNavigate } from "react-router-dom";
export const ReviewCard = (props: { Review: review }) => {
    return (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props && props.Review.name}
                </Typography>
                <Typography variant="h6" component="div">
                    {props && props.Review.userReview}
                </Typography>
                <Typography sx={{}} color="text.secondary">
                    <Rating name="read-only" value={props && props.Review.rating} readOnly />
                </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
            <Divider variant="middle" />
        </React.Fragment>
    );
}