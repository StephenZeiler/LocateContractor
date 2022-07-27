import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import { Typography, NativeSelect, FormControl, InputLabel, Button } from '@mui/material';
import { business } from "../Pages/BusinessCard";
import { getBusiness, patchBusiness, postBusiness } from "../Services/BusinessService";
import { useOktaAuth } from '@okta/okta-react';
import { useOutletContext } from "react-router-dom";


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
function EditBusinessData(props: { businessData: business }) {
    // const [businessData, setBusinessData] = useState<business>()
    // useEffect(() => {
    //     // console.log(userInfo.email)
    //     getBusiness("stephen.zeiler@neudesic.com")
    //         .then((res) => {
    //             if (res && res.data) {
    //                 const business = res.data[0]
    //                 business && setBusinessData(business)
    //             }
    //         })
    // }, [getBusiness])
    const [nameValue, setNameValue] = useState('')
    const [specialtyValue, setSpecialtyValue] = useState('')
    const [nameError, setNameError] = useState(false)
    const [servicesValue, setServicesValue] = useState('')
    const [aboutValue, setAboutValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [hoursValue, setHoursValue] = useState('')
    const handleSubmit = (e: any) => {
        e.preventDefault()
        setNameError(false);
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
            patchBusiness(userBusiness.userEmailId, userBusiness);
        }
    }
    if (props.businessData) {
        console.log(typeof props.businessData.about)
        return (
            <div>
                <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                    <Typography variant="button" > Click in a field to begin edit. When you are finsihed hit submit.</Typography >
                    <TextField required error={nameError} value={nameValue} onChange={(e) => setNameValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" defaultValue={props.businessData.businessName}>  </TextField>
                    <FormControl fullWidth>
                        <InputLabel variant="filled" htmlFor="uncontrolled-native">
                            Specialty
                        </InputLabel>
                        <NativeSelect
                            defaultValue={props.businessData.specialty}
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
                    <TextField value={servicesValue} onChange={(e) => setServicesValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" defaultValue={props.businessData.services.toString}> </TextField>
                    <TextField value={aboutValue} onChange={(e) => setAboutValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" defaultValue={props.businessData.about}> </TextField>
                    <TextField value={phoneValue} onChange={(e) => setPhoneValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" defaultValue={props.businessData.phoneContact}> </TextField>
                    <TextField value={emailValue} onChange={(e) => setEmailValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" defaultValue={props.businessData.emailContact}> </TextField>
                    <TextField value={hoursValue} onChange={(e) => setHoursValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" defaultValue={props.businessData.hoursOperation}> </TextField>
                    <Button onClick={() => console.log('you clicked me')} type="submit"> Submit </Button>
                </form>
            </div>
        );
    }
    else {
        return (
            <div> not working</div>
        )
    }
}

export default EditBusinessData