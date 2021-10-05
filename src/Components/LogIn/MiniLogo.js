import React from 'react'
import { Box } from '@mui/system';
import hand from '../../Assets/hand.png'

const MiniLogo = () => {
    return (
        <Box sx ={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'right',
        }}>
             <img src = {hand} alt = "" height = {80}/>
        </Box>
    )
}

export default MiniLogo