import { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { AuthMssg } from './BusinessPage';
import { getMyReview } from '../Services/BusinessService';
import { review } from './WriteReview';
import { MyReviewCard } from './MyReviewCard';
function PersonalPage() {
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
    console.log(reviewData)

    if (!userInfo) {
        return (
            <AuthMssg page="personal"> </AuthMssg>
        );
    }

    return (
        <div>
            <div>
                <p id="welcome">
                    Welcome, &nbsp;{userInfo.name}!
                </p>
                My Reviews:
                {
                    reviewData && reviewData.map((Review: review) => (
                        <MyReviewCard Review={Review} />
                    ))
                }
            </div>
        </div>
    );
};

export default PersonalPage;