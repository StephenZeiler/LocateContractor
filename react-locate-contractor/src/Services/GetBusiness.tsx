import React, { useEffect, useState } from "react"
import { JsxElement } from "typescript";
import { business } from "../Pages/BusinessCard";
import { deleteBusiness, getBusiness } from "./BusinessService"
import BusinessCard from "../Pages/BusinessCard"
import CreateBusiness from "../Pages/CreateBusiness";

import { Button } from "@mui/material";
import { Route, BrowserRouter, Routes, useNavigate, useMatch, Outlet } from "react-router-dom";
import EditBusinessData from "./EditBusiness";
import { DeleteBusinessData } from "./DeleteBusiness";

function GetBusinessData(searchString: any): JSX.Element {
    const [editMode, setEditMode] = useState(false)
    const [deleteMode, setDeleteMode] = useState(false)
    const [loadingMode, setLoadingMode] = useState(true)
    const [businessData, setBusinessData] = useState<business>()
    useEffect(() => {
        getBusiness(searchString.searchString)
            .then((res) => {
                if (res && res.data) {
                    const business = res.data[0]
                    business && setBusinessData(business)
                    setLoadingMode(false)
                }
            })
    }, [])
    const handleEditBusiness = () => setEditMode(true);
    const handleDeleteBusiness = () => setDeleteMode(true);
    if (loadingMode) {
        return (
            <div>Loading...</div>
        )
    }
    else if (businessData && (businessData).businessName.length > 0) {
        return (
            < div >
                {editMode ?
                    <EditBusinessData businessData={businessData} />
                    :
                    <>
                        {deleteMode ?
                            <DeleteBusinessData businessData={searchString} />
                            :
                            <>
                                <Button size="small" onClick={handleEditBusiness}>Edit</Button>
                                <Button size="small" onClick={handleDeleteBusiness}>Delete</Button>
                                {businessData && (businessData).businessName && <BusinessCard title="Business Name:" body={(businessData).businessName} cardWidth={500} cardHeight={140} actionHeight={0} > </BusinessCard>}
                                {businessData && (businessData).businessName && <BusinessCard title="Specialty:" body={(businessData).specialty} cardWidth={500} cardHeight={140} actionHeight={0} > </BusinessCard>}
                                {businessData && (businessData).businessName && <BusinessCard title="Hours of Operation::" body={(businessData).hoursOperation} cardWidth={500} cardHeight={140} actionHeight={0} > </BusinessCard>}
                                {businessData && (businessData).businessName && <BusinessCard title="Contact Information:" body={"Phone:" + (businessData).phoneContact + " " + "Email: " + (businessData).emailContact} cardWidth={500} cardHeight={160} actionHeight={0} > </BusinessCard>}
                                {businessData && (businessData).businessName && <BusinessCard title="Services:" body={(businessData).services} cardWidth={500} cardHeight={300} actionHeight={360} > </BusinessCard>}
                                {businessData && (businessData).businessName && <BusinessCard title="About:" body={(businessData).about} cardWidth={500} cardHeight={300} actionHeight={360} > </BusinessCard>}</>}</>}
            </div >
        );
    }
    else {
        return (
            <CreateBusiness userInfo={searchString}></CreateBusiness>
        );
    }
}
export default GetBusinessData

function onCancel() {
    throw new Error("Function not implemented.");
}
