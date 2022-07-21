import React from "react";
import axios from 'axios';

export const getBusiness = async (searchString: string) => {
    return await (await axios.get(`http://localhost:5149/Business/email/${searchString}`));
}
export const postBusiness = async (searchString: string) => {
    return await (await axios.post(`http://localhost:5149/Business/`));
}

export const deleteBusiness = async (searchString: string) => {
    return await (await axios.delete(`http://localhost:5149/Business/${searchString}`));
}

export const patchBusiness = async (searchString: string) => {
    return await (await axios.put(`http://localhost:5149/Business/${searchString}`));
}
