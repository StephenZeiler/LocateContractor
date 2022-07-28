import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useConfirm, ConfirmProvider } from 'material-ui-confirm';
import { Alert, Snackbar } from '@mui/material';
import { business } from '../Pages/BusinessCard';
import { deleteBusiness } from './BusinessService';
import GetBusinessData from './GetBusiness';


export function DeleteBusinessData(props: { businessData: string }) {
    const [saveMessage, setSaveMessage] = useState('')
    deleteBusiness(props.businessData)
        .then(res => {
            if (res.status >= 300) {
                setSaveMessage("ERROR: Your changes have not been saved!")
            }
            else {
                setSaveMessage("Your changes have been saved!")
            }
        }
        )
    return (
        <GetBusinessData searchString={props.businessData}>
            <h1>{saveMessage} asdsadffffffff</h1>
        </GetBusinessData>
    )
}