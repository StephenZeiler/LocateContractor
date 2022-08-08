import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import { Typography, NativeSelect, FormControl, InputLabel, Button } from '@mui/material';
import { business } from "../Pages/BusinessCard";
import { getBusiness, putBusiness } from "../Services/BusinessService";
import { useOktaAuth } from '@okta/okta-react';
import { useOutletContext } from "react-router-dom";
import { Status } from "@okta/okta-auth-js";


const userBusiness: business = {
    userEmailId: "",
    businessName: "",
    specialty: "",
    about: "",
    services: "",
    hoursOperation: "",
    phoneContact: "",
    emailContact: ""
}
function EditBusinessData(props: { businessData: business, setMessage: any, setEditMode: any }) {
    const [nameValue, setNameValue] = useState(props.businessData.businessName)
    const [specialtyValue, setSpecialtyValue] = useState('')
    const [nameError, setNameError] = useState(false)
    const [servicesValue, setServicesValue] = useState(props.businessData.services)
    const [aboutValue, setAboutValue] = useState(props.businessData.about)
    const [phoneValue, setPhoneValue] = useState(props.businessData.phoneContact)
    const [emailValue, setEmailValue] = useState(props.businessData.emailContact)
    const [hoursValue, setHoursValue] = useState(props.businessData.hoursOperation)
    const [saveMessage, setSaveMessage] = useState('')
    const handleSubmit = (e: any) => {
        e.preventDefault()
        setNameError(false);
        setSaveMessage('')
        if (nameValue == '') {
            setNameError(true);
        }
        else {
            userBusiness.userEmailId = "stephen.zeiler@neudesic.com"
            userBusiness.businessName = nameValue
            userBusiness.specialty = specialtyValue
            userBusiness.about = aboutValue
            userBusiness.services = servicesValue
            userBusiness.hoursOperation = hoursValue
            userBusiness.phoneContact = phoneValue
            userBusiness.emailContact = emailValue
            putBusiness(userBusiness.userEmailId, userBusiness)
                .then(res => {
                    if (res.status >= 300) {
                        props.setMessage("ERROR: Your changes have not been saved!")
                    }
                    else {
                        props.setMessage("Your changes have been saved!")
                        props.setEditMode(false)
                    }
                }
                )
        }
    }
    if (props.businessData) {
        return (
            <div>
                <div>{saveMessage}</div>
                <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                    <Typography variant="button" > Click in a field to begin edit. When you are finsihed hit submit.</Typography >
                    <TextField label="Business Name" required error={nameError} value={nameValue} onChange={(e) => setNameValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled">  </TextField>
                    <FormControl fullWidth>
                        <InputLabel variant="filled" htmlFor="uncontrolled-native">
                            Specialty
                        </InputLabel>
                        <NativeSelect
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                            }}
                            value={specialtyValue} onChange={(e) => setSpecialtyValue(e.target.value)}
                        >
                            <option value={''}> </option>
                            <option value={'Plumbing'}>Plumbing</option>
                            <option value={'Electric'}>Electric</option>
                            <option value={'Carpentry'}>Carpentry</option>
                            <option value={'Landscaping'}>Landscaping</option>
                            <option value={'Lawn Care'}>Lawn Care</option>
                            <option value={'Home Cleaning'}>Home Cleaning</option>
                            <option value={'Roofing'}>Roofing</option>
                            <option value={'Masonry'}>Masonry</option>
                        </NativeSelect>
                    </FormControl>
                    <TextField label="Services" value={servicesValue} onChange={(e) => setServicesValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" > </TextField>
                    <TextField label="About" value={aboutValue} onChange={(e) => setAboutValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" > </TextField>
                    <TextField label="Phone Number" value={phoneValue} onChange={(e) => setPhoneValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" > </TextField>
                    <TextField label="Business Email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" > </TextField>
                    <TextField label="Hours of Operation" value={hoursValue} onChange={(e) => setHoursValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" > </TextField>
                    <Button onClick={() => console.log('you clicked me')} type="submit"> Save Changes </Button>
                </form>
            </div>
        );
    }
    else {
        return (
            <div> Error Loading Page </div>
        )
    }
}

export default EditBusinessData


