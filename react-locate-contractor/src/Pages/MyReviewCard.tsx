import React, { useEffect, useState } from "react";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, Rating } from "@mui/material";
import { review } from "./WriteReview";
import { getBusiness } from "../Services/BusinessService";
import { business } from "./BusinessCard";

export const MyReviewCard = (props: { Review: review }) => {
    const [businessData, setBusinessData] = useState<business | null>(null)
    useEffect(() => {
        getBusiness(props.Review.businessEmail)
            .then((res) => {
                if (res && res.data) {
                    const business = res.data[0]
                    business && setBusinessData(business)
                }
            })
    }, [])
    return (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {businessData && businessData.businessName}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props && props.Review.name}
                </Typography>
                <Typography variant="h5" component="div">
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