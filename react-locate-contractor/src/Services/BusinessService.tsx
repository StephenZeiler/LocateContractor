import React from "react";
import axios from 'axios';
import { business } from "../Pages/BusinessCard";
import { Business } from "@mui/icons-material";

export const getBusiness = async (searchString: string) => {
    return await (await axios.get(`http://localhost:5149/Business/email/${searchString}`));
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
    fetch(`http://localhost:5149/Business/`, requestOptions)
        .then(res => res.json())
}

export const deleteBusiness = async (searchString: string) => {
    return await (await axios.delete(`http://localhost:5149/Business/${searchString}`));
}

export const patchBusiness = async (searchString: string) => {
    return await (await axios.put(`http://localhost:5149/Business/${searchString}`));
}



