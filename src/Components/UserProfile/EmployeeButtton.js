import React from 'react'
import { Button } from '@mui/material';

const EmployeeButton = () => {
    return (
        <Button color="secondary" variant="contained" sx={{
            fontSize: '25px',
            fontWeight: 'medium',
            color: '#FFFFFF',
            borderRadius: '10px',
            alignItems: 'right',
        }}>
            EDIT
        </Button>
    )
}

export default EmployeeButton