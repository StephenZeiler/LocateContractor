import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Typography, NativeSelect, FormControl, InputLabel, Button } from '@mui/material';
import { business } from "../Pages/BusinessCard";
import { postBusiness } from "../Services/BusinessService";
export var hasBusiness: boolean;
export const userBusiness: business = {
    userEmailId: "",
    businessName: "",
    specialty: "",
    about: "",
    services: "",
    hoursOperation: "",
    phoneContact: "",
    emailContact: ""
}

// function EditBusinessData(userInfo: any) {
//     const [nameValue, setNameValue] = useState('')
//     const [specialtyValue, setSpecialtyValue] = useState('')
//     const [nameError, setNameError] = useState(false)
//     const [servicesValue, setServicesValue] = useState('')
//     const [aboutValue, setAboutValue] = useState('')
//     const [phoneValue, setPhoneValue] = useState('')
//     const [emailValue, setEmailValue] = useState('')
//     const [hoursValue, setHoursValue] = useState('')
//     const handleSubmit = (e: any) => {
//         e.preventDefault()
//         setNameError(false);
//         if (nameValue == '') {
//             setNameError(true);
//         }
//         else {
//             userBusiness.userEmailId = userInfo.userInfo.email
//             userBusiness.businessName = nameValue
//             userBusiness.specialty = specialtyValue
//             userBusiness.about = aboutValue
//             userBusiness.services = servicesValue
//             userBusiness.hoursOperation = hoursValue
//             userBusiness.phoneContact = phoneValue
//             userBusiness.emailContact = emailValue
//             postBusiness(userBusiness);
//         }
//     }

//     return (
//         <div>
//             <form noValidate autoComplete='off' onSubmit={handleSubmit}>
//                 <Typography variant="button" > Looks like you dont have a business yet...Lets create one!</Typography >
//                 <TextField required error={nameError} value={nameValue} onChange={(e) => setNameValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" placeholder='Business name'>  </TextField>
//                 <FormControl fullWidth>
//                     <InputLabel variant="filled" htmlFor="uncontrolled-native">
//                         Specialty
//                     </InputLabel>
//                     <NativeSelect
//                         defaultValue={''}
//                         inputProps={{
//                             name: 'age',
//                             id: 'uncontrolled-native',
//                         }}
//                         value={specialtyValue} onChange={(e) => setSpecialtyValue(e.target.value)}
//                     >
//                         <option value={''}> </option>
//                         <option value={'Plumbing'}>Plumbing</option>
//                         <option value={'Electric'}>Electric</option>
//                         <option value={'Carpentry'}>Carpentry</option>
//                         <option value={'Landscaping'}>Landscaping</option>
//                         <option value={'Lawn Care'}>Lawn Care</option>
//                         <option value={'Home Cleaning'}>Home Cleaning</option>
//                         <option value={'Roofing'}>Roofing</option>
//                         <option value={'Masonry'}>Masonry</option>
//                     </NativeSelect>
//                 </FormControl>
//                 <TextField value={servicesValue} onChange={(e) => setServicesValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" placeholder='What services do you offer?'> </TextField>
//                 <TextField value={aboutValue} onChange={(e) => setAboutValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" placeholder='Tell customers about your business...'> </TextField>
//                 <TextField value={phoneValue} onChange={(e) => setPhoneValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" placeholder='What is your business phone number?'> </TextField>
//                 <TextField value={emailValue} onChange={(e) => setEmailValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" placeholder='What is your business email?'> </TextField>
//                 <TextField value={hoursValue} onChange={(e) => setHoursValue(e.target.value)} sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" placeholder='What hours does your business operate'> </TextField>
//                 <Button onClick={() => console.log('you clicked me')} type="submit"> Submit </Button>
//             </form>
//         </div>
//     );
// }

