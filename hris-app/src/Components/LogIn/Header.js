import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Logo from './Logo'

const Header = () => {
    return (
        <Box sx={{
            bgcolor: 'primary.main',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            mx: 'auto',
            width: '80vh',
            p: 0,
            m: 0,
            borderRadius: '20px 0 0 20px',

        }}>
            <Box>
                <Logo />
            </Box>


            <Typography variant="h1" sx={{
                fontSize: '80px',
                fontWeight: 'Bold',
            }}>
                HRIS
            </Typography>

            <Typography variant="h2" sx={{
                fontSize: '25px',
                fontWeight: 'medium',
                pb: '10px',
                m: '20px',
            }}>
                “The only place where SUCCESS comes first
                before WORK is in the dictionary.”
            </Typography>

        </Box>

    )
}

export default Header;