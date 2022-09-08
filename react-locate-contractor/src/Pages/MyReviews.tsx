import { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { AuthMssg } from './BusinessPage';
import { getMyReview } from '../Services/BusinessService';
import { review } from './WriteReview';
import { MyReviewCard } from './MyReviewCard';
import { Divider } from '@mui/material';
function MyReviews() {
    const { authState, oktaAuth } = useOktaAuth();
    const [userInfo, setUserInfo]: [userInfo: any, setUserInfo: any] = useState(null);
    const [reviewData, setReviewData] = useState<any>()
    const [searchString, setSearchString] = useState<string>("")
    const [errorState, setErrorState] = useState<boolean>(false)
    const [renderState, setRenderState] = useState<boolean>(true)

    useEffect(() => {
        if (!authState || !authState.isAuthenticated) {
            // When user isn't authenticated, forget any user info
            setUserInfo(null);
        } else {
            oktaAuth.getUser().then((info: any) => {
                setUserInfo(info);
            }).catch((err) => {
                console.error(err);
            })
        }
    }, [authState, oktaAuth]); // Update if authState changes

    if (renderState) {
        userInfo && getMyReview(userInfo.email)
            .then((res) => {
                const review = res.data
                review && setReviewData(review)
                setRenderState(false);
            })
            .catch(() => {
                setErrorState(true)
            })
    }

    if (!userInfo) {
        return (
            <AuthMssg page="reviews"> </AuthMssg>
        );
    }

    return (
        <div>
            <div>
                <p id="welcome">
                    Welcome, &nbsp;{userInfo.name}!
                </p>
                My Reviews:
                <Divider sx={{ mt: 2 }} variant="middle" />

                {
                    reviewData && reviewData.map((Review: review) => (
                        <MyReviewCard Review={Review} />
                    ))
                }
            </div>
        </div>
    );
};

export default MyReviews;