import React from "react";
import axios from 'axios';
import { business } from "../Pages/BusinessCard";
import { Business } from "@mui/icons-material";

export const getBusiness = async (searchString: string) => {
    return await (await axios.get(`https://locatecontractorapi.azurewebsites.net/Business/email/${searchString}`));
}

export const postBusiness = async (userBusiness: business) => {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userEmailId: userBusiness.userEmailId,
            businessName: userBusiness.businessName,
            specialty: userBusiness.specialty,
            hoursOperation: userBusiness.hoursOperation,
            emailContact: userBusiness.emailContact,
            phoneContact: userBusiness.phoneContact,
            services: userBusiness.services,
            about: userBusiness.about,
        })
    };
    fetch(`https://locatecontractorapi.azurewebsites.net/Business/`, requestOptions)
        .then(res => res.json())
}

export const deleteBusiness = async (searchString: string) => {
    return await (await axios.delete(`https://locatecontractorapi.azurewebsites.net/Business/${searchString}`));
}

export const patchBusiness = async (searchString: string) => {
    return await (await axios.put(`https://locatecontractorapi.azurewebsites.net/Business/${searchString}`));
}



