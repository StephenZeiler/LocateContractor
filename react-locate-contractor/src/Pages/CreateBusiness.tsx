import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Typography, NativeSelect, FormControl, InputLabel, Button, Alert, Box, FilledInput } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { business } from './BusinessCard';
import { postBusiness } from "../Services/BusinessService";
import DateFnsUtils from '@date-io/date-fns';
export var hasBusiness: boolean;
export const userBusiness: business = {
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

function CreateBusiness(props: { userInfo: any, setCreateMode: any, setMessage: any, message: any }) {
    const [redirect, setRedirect] = useState(false)
    const [name, setName] = React.useState("Ex) 0:00 - 0:00 ");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const [nameValue, setNameValue] = useState('')
    const [specialtyValue, setSpecialtyValue] = useState('')
    const [nameError, setNameError] = useState(false)
    const [servicesValue, setServicesValue] = useState('')
    const [aboutValue, setAboutValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [hoursValue, setHoursValue] = useState('')
    const [saveMessage, setSaveMessage] = useState('')
    const [mondayValue, setMondayValue] = useState('')
    const [tuesdayValue, setTuesdayValue] = useState('')
    const [wednesdayValue, setWednesdayValue] = useState('')
    const [thursdayValue, setThursdayValue] = useState('')
    const [fridayValue, setFridayValue] = useState('')
    const [saturdayValue, setSaturdayValue] = useState('')
    const [sundayValue, setSundayValue] = useState('')
    const handleSubmit = (e: any) => {
        e.preventDefault()
        setNameError(false);
        setSaveMessage('')
        if (nameValue == '') {
            setNameError(true);
        }
        else {
            userBusiness.userEmailId = props.userInfo
            userBusiness.businessName = nameValue
            userBusiness.specialty = specialtyValue
            userBusiness.about = aboutValue
            userBusiness.services = servicesValue
            userBusiness.monday = mondayValue
            userBusiness.tuesday = tuesdayValue
            userBusiness.wednesday = wednesdayValue
            userBusiness.thursday = thursdayValue
            userBusiness.friday = fridayValue
            userBusiness.saturday = saturdayValue
            userBusiness.sunday = sundayValue
            userBusiness.phoneContact = phoneValue
            userBusiness.emailContact = emailValue
            postBusiness(userBusiness)
                .then(res => {
                    if (res.status >= 300) {
                        setSaveMessage("ERROR: Create business failed!")
                    }
                    else {
                        props.setCreateMode(false)
                        props.setMessage('Your business has been created!')
                    }
                }
                )
        }
    }

    return (
        <div>

            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                {props.message ? <Alert sx={{ width: 470 }} severity="success">{props.message} </Alert> : <p> </p>}

                <Typography variant="h6" > Looks like you dont have a business yet...Lets create one!</Typography >
                <p> {saveMessage} </p>
                <TextField required error={nameError} value={nameValue} onChange={(e) => setNameValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" placeholder='Business name'>  </TextField>
                <FormControl fullWidth>
                    <InputLabel variant="filled" htmlFor="uncontrolled-native">
                        Specialty
                    </InputLabel>
                    <NativeSelect
                        defaultValue={''}
                        inputProps={{
                            name: 'age',
                            id: 'uncontrolled-native',
                        }}
                        value={specialtyValue} onChange={(e) => setSpecialtyValue(e.target.value)}
                    >
                        <option value={''}> </option>
                        <option value={'Plumbing'}>Plumbing</option>
                        <option value={'Electric'}>Electric</option>
                        <option value={'Carpenter'}>Carpentry</option>
                        <option value={'Landscaping'}>Landscaping</option>
                        <option value={'Lawn Care'}>Lawn Care</option>
                        <option value={'Home Cleaning'}>Home Cleaning</option>
                        <option value={'Roofing'}>Roofing</option>
                        <option value={'Handyman'}>Handyman</option>
                        <option value={'Masonry'}>Masonry</option>
                    </NativeSelect>
                </FormControl>
                <TextField value={servicesValue} onChange={(e) => setServicesValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" placeholder='What services do you offer?'> </TextField>
                <TextField value={aboutValue} onChange={(e) => setAboutValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" placeholder='Tell customers about your business...'> </TextField>
                <TextField value={phoneValue} onChange={(e) => setPhoneValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" placeholder='What is your business phone number?'> </TextField>
                <TextField value={emailValue} onChange={(e) => setEmailValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" placeholder='What is your business email?'> </TextField>
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
                                value={mondayValue} onChange={(e) => setMondayValue(e.target.value)}
                                id="standard-textarea"
                                label="Monday Hours"
                                placeholder="0:00 - 0:00"
                                multiline
                                variant="standard"
                            />
                            <TextField
                                value={tuesdayValue} onChange={(e) => setTuesdayValue(e.target.value)}
                                id="standard-textarea"
                                label="Tuesday Hours"
                                placeholder="0:00 - 0:00"
                                multiline
                                variant="standard"
                            />
                        </div>
                        <div>
                            <TextField
                                value={wednesdayValue} onChange={(e) => setWednesdayValue(e.target.value)}
                                id="standard-textarea"
                                label="Wednesday Hours"
                                placeholder="0:00 - 0:00"
                                multiline
                                variant="standard"
                            />
                            <TextField
                                value={thursdayValue} onChange={(e) => setThursdayValue(e.target.value)}
                                id="standard-textarea"
                                label="Thursday Hours"
                                placeholder="0:00 - 0:00"
                                multiline
                                variant="standard"
                            />
                        </div>
                        <div>
                            <TextField
                                value={fridayValue} onChange={(e) => setFridayValue(e.target.value)}
                                id="standard-textarea"
                                label="Friday Hours"
                                placeholder="0:00 - 0:00"
                                multiline
                                variant="standard"
                            />
                            <TextField
                                value={saturdayValue} onChange={(e) => setSaturdayValue(e.target.value)}
                                id="standard-textarea"
                                label="Saturday Hours"
                                placeholder="0:00 - 0:00"
                                multiline
                                variant="standard"
                            />
                        </div>
                        <div>
                            <TextField
                                value={sundayValue} onChange={(e) => setSundayValue(e.target.value)}
                                id="standard-textarea"
                                label="Sunday Hours"
                                placeholder="0:00 - 0:00"
                                multiline
                                variant="standard"
                            />
                        </div>
                    </Box>
                </div>
                <Button onClick={() => console.log('you clicked me')} type="submit"> Submit </Button>
            </form >
        </div >
    );
}

export default CreateBusiness;