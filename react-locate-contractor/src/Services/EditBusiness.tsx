import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import { Typography, NativeSelect, FormControl, InputLabel, Button, Box } from '@mui/material';
import { business } from "../Pages/BusinessCard";
import { getBusiness, putBusiness } from "../Services/BusinessService";
import { useOktaAuth } from '@okta/okta-react';
import { useOutletContext } from "react-router-dom";
import { Status } from "@okta/okta-auth-js";
import { TransgenderTwoTone } from "@mui/icons-material";


const userBusiness: business = {
    userEmailId: "",
    businessName: "",
    specialty: "",
    about: "",
    services: "",
    phoneContact: "",
    emailContact: "",
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
}
function EditBusinessData(props: { businessData: business, setMessage: any, setEditMode: any, handleGetBusiness: () => void }) {
    const [nameValue, setNameValue] = useState(props.businessData.businessName)
    const [specialtyValue, setSpecialtyValue] = useState('')
    const [nameError, setNameError] = useState(false)
    const [servicesValue, setServicesValue] = useState(props.businessData.services)
    const [aboutValue, setAboutValue] = useState(props.businessData.about)
    const [phoneValue, setPhoneValue] = useState(props.businessData.phoneContact)
    const [emailValue, setEmailValue] = useState(props.businessData.emailContact)
    const [mondayValue, setMondayValue] = useState('')
    const [tuesdayValue, setTuesdayValue] = useState('')
    const [wednesdayValue, setWednesdayValue] = useState('')
    const [thursdayValue, setThursdayValue] = useState('')
    const [fridayValue, setFridayValue] = useState('')
    const [saturdayValue, setSaturdayValue] = useState('')
    const [sundayValue, setSundayValue] = useState('')
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
            userBusiness.phoneContact = phoneValue
            userBusiness.emailContact = emailValue
            userBusiness.monday = mondayValue
            userBusiness.tuesday = tuesdayValue
            userBusiness.wednesday = wednesdayValue
            userBusiness.thursday = thursdayValue
            userBusiness.friday = fridayValue
            userBusiness.saturday = saturdayValue
            userBusiness.sunday = sundayValue
            putBusiness(userBusiness.userEmailId, userBusiness)
                .then(res => {
                    if (res.status >= 300) {
                        props.setMessage("ERROR: Your changes have not been saved!")
                    }
                    else {
                        props.handleGetBusiness()
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
                            <option value={'Handyman'}>Handyman</option>
                            <option value={'Masonry'}>Masonry</option>
                        </NativeSelect>
                    </FormControl>
                    <TextField label="Services" value={servicesValue} onChange={(e) => setServicesValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" > </TextField>
                    <TextField label="About" value={aboutValue} onChange={(e) => setAboutValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" > </TextField>
                    <TextField label="Phone Number" value={phoneValue} onChange={(e) => setPhoneValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" > </TextField>
                    <TextField label="Business Email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" > </TextField>
                    <Typography variant="button" >Add your businesses operating hours.</Typography >
                    <div>
                        <Box
                            component="form"
                            sx={{
                                "& .MuiTextField-root": { m: 1, width: "25ch" }
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <TextField
                                    onChange={(e) => setMondayValue(e.target.value)}
                                    id="standard-textarea"
                                    helperText="Monday"
                                    placeholder="Ex) 0:00 - 0:00"
                                    defaultValue={props.businessData.monday}
                                    multiline
                                    variant="standard"
                                />
                                <TextField
                                    onChange={(e) => setTuesdayValue(e.target.value)}
                                    id="standard-textarea"
                                    helperText="Tuesday"
                                    placeholder="Ex) 0:00 - 0:00"
                                    defaultValue={props.businessData.tuesday}
                                    multiline
                                    variant="standard"
                                />
                            </div>
                            <div>
                                <TextField
                                    onChange={(e) => setWednesdayValue(e.target.value)}
                                    id="standard-textarea"
                                    helperText="Wednesday"
                                    placeholder="Ex) 0:00 - 0:00"
                                    defaultValue={props.businessData.wednesday}
                                    multiline
                                    variant="standard"
                                />
                                <TextField
                                    onChange={(e) => setThursdayValue(e.target.value)}
                                    id="standard-textarea"
                                    helperText="Thursday"
                                    placeholder="Ex) 0:00 - 0:00"
                                    defaultValue={props.businessData.thursday}
                                    multiline
                                    variant="standard"
                                />
                            </div>
                            <div>
                                <TextField
                                    onChange={(e) => setFridayValue(e.target.value)}
                                    id="standard-textarea"
                                    placeholder="Ex) 0:00 - 0:00"
                                    defaultValue={props.businessData.friday}
                                    helperText="Friday"
                                    variant="standard"
                                    multiline

                                />
                                <TextField
                                    onChange={(e) => setSaturdayValue(e.target.value)}
                                    id="standard-textarea"
                                    helperText="Saturday"
                                    placeholder="Ex) 0:00 - 0:00"
                                    defaultValue={props.businessData.friday}
                                    multiline
                                    variant="standard"
                                />
                            </div>
                            <div>
                                <TextField
                                    onChange={(e) => setSundayValue(e.target.value)}
                                    id="standard-textarea"
                                    helperText="Sunday"
                                    placeholder="Ex) 0:00 - 0:00"
                                    defaultValue={props.businessData.sunday}
                                    multiline
                                    variant="standard"
                                />
                            </div>
                        </Box>
                    </div>
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


