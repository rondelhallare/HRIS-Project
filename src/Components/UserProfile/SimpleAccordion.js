import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmployeeBox2 from './EmployeeBox2';
import EmployeeBox1 from './EmployeeBox1';
import UserTitle from './UserTitle';
import EmployeeButton from './EmployeeButton';
import UserAvatar from './UserAvatar';
import { Box } from '@mui/system';

export default function SimpleAccordion() {
    return (
        <Box>

            <UserTitle />

            <UserAvatar />

            <Accordion sx={{ bgcolor: 'secondary.main', }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >

                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: '20px',
                        color: '#FFFFFF',
                    }}>
                        Employee Information
                    </Typography>


                </AccordionSummary>

                <AccordionDetails sx={{ bgcolor: 'pengu.main', }}>

                    <Typography>
                        <EmployeeBox1 />
                        <EmployeeButton />
                    </Typography>


                </AccordionDetails>

            </Accordion>

            <Accordion sx={{ bgcolor: 'secondary.main', }}>

                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >

                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: '20px',
                        color: '#FFFFFF',
                    }}>
                        Employee Details
                    </Typography>

                </AccordionSummary>

                <AccordionDetails sx={{ bgcolor: 'pengu.main', }}>

                    <Typography>
                        <EmployeeBox2 />
                        <EmployeeButton />
                    </Typography>

                </AccordionDetails>

            </Accordion>
        </Box>
    );
}
