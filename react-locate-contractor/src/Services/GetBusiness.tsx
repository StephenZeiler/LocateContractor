import React, { useEffect, useState } from "react"
import { business } from "../Pages/BusinessCard";
import { deleteBusiness, getBusiness } from "./BusinessService"
import BusinessCard from "../Pages/BusinessCard"
import CreateBusiness from "../Pages/CreateBusiness";
import { Alert, Box, Button, LinearProgress, Typography } from "@mui/material";
import EditBusinessData from "./EditBusiness";
import { useNavigate } from "react-router-dom";
function GetBusinessData(props: { searchString: any }): JSX.Element {
    const navigate = useNavigate();
    const [editMode, setEditMode] = useState(false)
    const [deleteMode, setDeleteMode] = useState(false)
    const [createMode, setCreateMode] = useState(true)
    const [loadingMode, setLoadingMode] = useState(true)
    const [businessData, setBusinessData] = useState<business | null>(null)
    const [deleteMessage, setDeleteMessage] = useState('')
    const [createMessage, setCreateMessage] = useState('')
    const [message, setMessage] = useState('')

    getBusiness(props.searchString)
        .then((res) => {
            if (res && res.data) {
                const business = res.data[0]
                business && setBusinessData(business)
                setLoadingMode(false)
            }
        })

    useEffect(() => {
        if (!businessData && !createMode) {
            getBusiness(props.searchString)
                .then((res) => {
                    if (res && res.data) {
                        const business = res.data[0]
                        business && setBusinessData(business)
                        setLoadingMode(false)
                    }
                })
        }
    }, [businessData, createMode])

    const handleEditBusiness = () => setEditMode(true);
    const handleDeleteBusiness = () => {
        setDeleteMode(false)
        deleteBusiness(props.searchString)
            .then((res) => {
                if (res.status >= 300) {
                    setMessage("ERROR: Business has not deleted")
                }
                else if (businessData) {
                    setMessage("You have succesfully deleted your business")
                    setBusinessData(null)
                }
            }
            )
    }

    if (loadingMode) {
        return (
            <div>

                <Typography variant="h6">Loading...</Typography>
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
            </div>
        )
    }
    else if (businessData && (businessData).businessName.length > 0) {

        const handleAllReviews = async () => navigate(`/AllReview/${businessData.userEmailId}`);
        return (
            < div >
                {editMode ?
                    <EditBusinessData businessData={businessData} setEditMode={setEditMode} setMessage={setMessage} />
                    :
                    <>

                        {message ? <Alert sx={{ width: 470 }} severity="success">{message} </Alert> : <p> </p>}
                        <Button size="small" onClick={handleEditBusiness}>Edit</Button>
                        <Button size="small" onClick={handleDeleteBusiness}>Delete</Button>
                        <Button size="small" onClick={handleAllReviews}>Customer Reviews</Button>
                        {businessData && (businessData).businessName && <BusinessCard title="Business Name:" body={(businessData).businessName} cardWidth={500} cardHeight={140} actionHeight={0} > </BusinessCard>}
                        {businessData && (businessData).businessName && <BusinessCard title="Specialty:" body={(businessData).specialty} cardWidth={500} cardHeight={140} actionHeight={0} > </BusinessCard>}
                        {businessData && (businessData).businessName && <BusinessCard title="Hours of Operation::" body={(businessData).hoursOperation} cardWidth={500} cardHeight={140} actionHeight={0} > </BusinessCard>}
                        {businessData && (businessData).businessName && <BusinessCard title="Contact Information:" body={"Phone:" + (businessData).phoneContact + " " + "Email: " + (businessData).emailContact} cardWidth={500} cardHeight={160} actionHeight={0} > </BusinessCard>}
                        {businessData && (businessData).businessName && <BusinessCard title="Services:" body={(businessData).services} cardWidth={500} cardHeight={300} actionHeight={360} > </BusinessCard>}
                        {businessData && (businessData).businessName && <BusinessCard title="About:" body={(businessData).about} cardWidth={500} cardHeight={300} actionHeight={360} > </BusinessCard>}
                    </>
                }
            </div >
        );
    }
    else {

        return (
            <CreateBusiness userInfo={props.searchString} setCreateMode={setCreateMode} setMessage={setMessage} message={message}></CreateBusiness>
        );
    }
}
export default GetBusinessData