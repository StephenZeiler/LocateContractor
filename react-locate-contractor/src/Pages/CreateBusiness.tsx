import React from "react";
import TextField from '@mui/material/TextField';
import { Typography, NativeSelect, FormControl, InputLabel } from '@mui/material';

function CreateBusiness() {
    <div>
        <Typography variant="button" > Looks like you dont have a business yet...Lets create one!</Typography >
        <TextField sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" placeholder='Business name'>  </TextField>
        <FormControl fullWidth>
            <InputLabel variant="filled" htmlFor="uncontrolled-native">
                Specialty
            </InputLabel>
            <NativeSelect
                defaultValue={30}
                inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                }}
            >
                <option value={1}>Plumber</option>
                <option value={2}>Electrician</option>
                <option value={3}>Carpenter</option>
                <option value={4}>Landscaping</option>
                <option value={5}>Lawn Care</option>
                <option value={6}>Home Cleaning</option>
                <option value={7}>Roofing</option>
                <option value={8}>Concrete</option>
            </NativeSelect>
        </FormControl>
        <TextField sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" placeholder='What services do you offer?'> </TextField>
        <TextField sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" placeholder='Tell customers about your business...'> </TextField>
        <TextField sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" placeholder='What services do you offer?'> </TextField>
        <TextField sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" placeholder='What hours does your business operate'> </TextField>
        <TextField sx={{ mt: 2 }} fullWidth multiline minRows='4' variant="filled" placeholder='How long have you been in business?'>  </TextField>
    </div>
}