import React from "react";
import axios from 'axios';
import { business } from "../Pages/BusinessCard";
import { Business } from "@mui/icons-material";
import { review } from "../Pages/WriteReview";

export const getBusiness = async (searchString: string) => {
    return await (await axios.get(`http://localhost:5149/Business/email/${searchString}`));
}

export const searchBusiness = async (searchString: string) => {
    return await (await axios.get(`http://localhost:5149/Business/search/${searchString}`));
}
export const getSpecialty = async (searchString: string) => {
    return await (await axios.get(`http://localhost:5149/Business/specialty/${searchString}`));
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
            emailContact: userBusiness.emailContact,
            phoneContact: userBusiness.phoneContact,
            services: userBusiness.services,
            about: userBusiness.about,
            monday: userBusiness.monday,
            tuesday: userBusiness.tuesday,
            wednesday: userBusiness.wednesday,
            thursday: userBusiness.thursday,
            friday: userBusiness.friday,
            saturday: userBusiness.saturday,
            sunday: userBusiness.sunday,
        })
    };
    return await fetch(`http://localhost:5149/Business/`, requestOptions)
}
export const deleteBusiness = async (searchString: string) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };
    return await fetch(`http://localhost:5149/Business/${searchString}`, requestOptions)
}
export const putBusiness = async (searchString: string, userBusiness: business) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userEmailId: userBusiness.userEmailId,
            businessName: userBusiness.businessName,
            specialty: userBusiness.specialty,
            emailContact: userBusiness.emailContact,
            phoneContact: userBusiness.phoneContact,
            services: userBusiness.services,
            about: userBusiness.about,
            monday: userBusiness.monday,
            tuesday: userBusiness.tuesday,
            wednesday: userBusiness.wednesday,
            thursday: userBusiness.thursday,
            friday: userBusiness.friday,
            saturday: userBusiness.saturday,
            sunday: userBusiness.sunday,

        })
    };
    return await fetch(`http://localhost:5149/Business/${searchString}`, requestOptions)

}

export const postReview = async (Review: review) => {
    // Simple POST request with  JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userReview: Review.userReview,
            name: Review.name,
            userEmailId: Review.userEmailId,
            rating: Review.rating,
            businessEmail: Review.businessEmail
        })
    };
    return await fetch(`http://localhost:5149/Review/`, requestOptions)
}
export const getBusinessReview = async (searchString: string) => {
    return await (await axios.get(`http://localhost:5149/Review/BusinessReview/${searchString}`));
}
export const getMyReview = async (searchString: string) => {
    return await (await axios.get(`http://localhost:5149/Review/MyReview/${searchString}`));
}