import { Typography } from '@mui/material'
import { Box, fontWeight } from '@mui/system';
import { Avatar } from '@mui/material';
import React from 'react'

const UserAvatar = () => {
    return (
        <Box sx = {{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'left',
            flexDirection: 'row',
            mb: '5px',
            
        }}>
                <Avatar sx={{
                    fontSize: '30px',
                    color: 'white',
                    width: 76,
                    height: 76,
                    mr: '5px',
                    bgcolor: 'primary.main',

                }}>
                    RH
                </Avatar>

                <Typography sx = {{
                    fontSize: '50px',
                    color: 'black',
                    fontWeight: 'bold',
                }}>
                    Rondel Hallare
                </Typography>
        </Box>
    )
}

export default UserAvatar
