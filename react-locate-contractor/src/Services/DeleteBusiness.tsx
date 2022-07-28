import React from 'react';
import Button from '@mui/material/Button';
import { useConfirm } from 'material-ui-confirm';

function DeleteBusinessData() {
    const confirm = useConfirm();

    const handleClick = () => {
        confirm({ description: 'This action is permanent!' })
            .then(() => { /* ... */ })
            .catch(() => { /* ... */ });
    };

    return (
        <Button onClick={handleClick}>
            Click
        </Button>
    );
};
export default DeleteBusinessData
