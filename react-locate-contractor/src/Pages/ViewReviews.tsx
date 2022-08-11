import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBusiness, getBusinessReview } from "../Services/BusinessService";
import { ReviewCard } from "./ReviewCard";
import { review } from "./WriteReview";
import Typography from '@mui/material/Typography';
import business from "./BusinessCard";
import { Box, Divider, LinearProgress } from "@mui/material";
function ViewReview() {
    let { businessId } = useParams();
    const [reviewData, setReviewData] = useState<review[]>([])
    const [businessData, setBusinessData] = useState<any>()
    const [searchString, setSearchString] = useState<string>("")
    const [errorState, setErrorState] = useState<boolean>(false)
    const [loadingMode, setLoadingMode] = useState(true)

    useEffect(() => {
        if (!errorState) {
            setErrorState(true)
            businessId && getBusinessReview(businessId)
                .then((res) => {
                    const review: review[] = res.data
                    review && setReviewData(review)
                })
                .catch(() => {
                    setErrorState(true)
                })

            businessId && getBusiness(businessId)
                .then((res) => {
                    const business = res.data[0]
                    business && setBusinessData(business)
                    setLoadingMode(false)
                })
                .catch(() => {
                    setErrorState(true)
                })
        }
    }, [])
    if (loadingMode) {
        return (
            <div>
                <Typography variant="h6">Loading Customer's Reviews...</Typography>
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
            </div>

        );
    }
    else {


        return (
            < div >
                <Typography variant="h5">
                    Customer reviews for {businessData && businessData.businessName}
                </Typography>
                <Divider sx={{ mt: 2 }} variant="middle" />
                {
                    reviewData.map((Review: review) => (
                        <ReviewCard Review={Review} />
                    ))
                }
                <Typography variant="subtitle2">
                    End of reviews
                </Typography>
            </div >
        );
    }
}
export default ViewReview;