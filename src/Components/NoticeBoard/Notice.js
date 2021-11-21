import { Box } from '@mui/system'
import React from 'react'
import NoticeGrid from './NoticeGrid'
import bgNotice from '../../Assets/bgNotice.png';

function Notice() {
    return (
        <Box sx={{
            backgroundImage: `url(${bgNotice})`,
            height: "calc(100vh - 80px)",
            maxHeight: '100vh',
        }}>
            <NoticeGrid />
        </Box>
    )
}

export default Notice
