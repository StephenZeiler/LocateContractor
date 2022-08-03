import React, { useEffect, useState } from "react";
import { business } from "./BusinessCard";
import { TextField, Typography, NativeSelect, FormControl, InputLabel, Button, Box, Rating } from '@mui/material';
import { postReview } from "../Services/BusinessService";
import { useParams } from "react-router-dom";
import { useOktaAuth } from '@okta/okta-react';
import { AuthMssg } from "./BusinessPage";

export type review = {
    userReview: string,
    name: string,
    userEmailId: string,
    rating: number,
    businessEmail: string
}
const userReview: review = {
    userReview: "",
    name: "",
    userEmailId: "",
    rating: 9,
    businessEmail: ""
}
function WriteReview() {
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

    let { businessId } = useParams();
    var businessEmail = { businessId }.businessId
    const [rating, setRating] = React.useState<any>(2);
    const [reviewValue, setReviewValue] = useState('')
    const [reviewError, setReviewError] = useState(false)
    const [saveMessage, setSaveMessage] = useState('')
    const handleSubmit = (e: any) => {
        e.preventDefault()
        setReviewError(false);
        if (reviewValue == '') {
            setReviewError(true);
        }
        else if (businessEmail) {
            userReview.userReview = reviewValue;
            userReview.name = userInfo.name;
            userReview.userEmailId = userInfo.email;
            userReview.rating = rating;
            userReview.businessEmail = businessEmail
            postReview(userReview)
                .then(res => {
                    if (res.status >= 300) {
                        setSaveMessage("ERROR: Failed to create review!")
                    }
                    else if (res.status >= 404) {
                        setSaveMessage("ERROR: You have already created a review for this business!")
                    }
                    else {
                        setSaveMessage("Your review has been saved!")
                    }
                }
                )
        }
    }
    if (!userInfo) {
        return (
            <AuthMssg page="reviews"> </AuthMssg>
        );
    }
    return (
        <div>
            <div>{saveMessage}</div>
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <Typography variant="button"> Rate your service.</Typography >
                <TextField required error={reviewError} value={reviewValue} onChange={(e) => setReviewValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" placeholder='Enter your review here...'>  </TextField>
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                >
                    <Typography component="legend">Rating:</Typography>
                    <Rating
                        name="simple-controlled"
                        value={rating}
                        onChange={(event, newValue) => {
                            setRating(newValue);
                        }}
                    />
                </Box>
                <Button onClick={() => console.log('you clicked me')} type="submit"> Submit </Button>
            </form>
        </div>
    );
}
export default WriteReview;