import React, { useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SidebarData from './SidebarData';
import './NavBarTest.css';
import { Box } from '@mui/system';
import { IconContext } from 'react-icons';
import { Grid, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Body from '../Dashboard/Body'
import TimeBody from "../TimeLogs/TimeBody";
import UserProf from "../UserProfile/UserProf";
import Back from "../LogIn/Back";
import NavUserDisplay from "./NavUserDisplay";
import SupportBack from '../Support/SupportBack';
import Notice from '../NoticeBoard/Notice';
import id from '../../Assets/id.png';

function NavBarTry() {

    const location = useLocation()
    console.log(location)
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            {
                location.pathname !== "/LogIn" ?

                    //Navbar component
                    <IconContext.Provider value={{ color: 'black' }}>
                        <Box className='navbar' sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                ml: '1rem',
                                fontSize: '2rem',
                                background: 'none',
                            }}>
                                <Link to='#' className='menu-bars'>
                                    <FaIcons.FaBars onClick={showSidebar} />
                                </Link>
                                <Typography sx={{
                                    fontWeight: 'bold',
                                    fontSize: '50px',
                                    ml: '10px',
                                    mt: '-5px',
                                }}>
                                    HRIS
                                </Typography>

                            </Box>

                            {/* Navigation User Display */}
                            <Box sx = {{
                                pr: '10px',
                                mt: '-5px',
                            }}>
                                <NavUserDisplay />
                            </Box>
                        </Box>


                        {/* Toggle Side Navbar */}
                        <Box sx={{
                            zIndex: 999,
                        }}>
                            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                                <ul className='nav-menu-items' onClick={showSidebar}>

                                    <Box>
                                        <Grid>
                                            <li className='navbar-toggle'>
                                                <Link to='#' className='menu-bars'>
                                                    <AiIcons.AiOutlineClose sx={{ fontSize: '2rem', }} />
                                                </Link>

                                            {/* HRIS NAME */}
                                                <Typography sx={{
                                                    fontWeight: 'bold',
                                                    fontSize: '50px',
                                                    ml: '10px',
                                                    mt: '-5px',
                                                }}>
                                                    HRIS
                                                </Typography>

                                            </li>
                                        </Grid>
                                    </Box>
                                    {SidebarData.map((item, index) => {
                                        return (
                                            <li key={index} className={item.cName}>
                                                <Link to={item.path}>
                                                    {item.icon}

                                                    <Box sx={{
                                                        ml: '10px',
                                                        fontSize: '20px',
                                                        fontWeight: 'medium',
                                                        fontFamily: 'Montserrat',
                                                    }}>
                                                        <span>{item.title}</span>
                                                    </Box>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                     <Box sx = {{
                                        mt: '35vh',
                                    }}>
                                        <img src={id} alt="" height={200} />
                                    </Box>
                                </ul>

                        {/* Routing */}
                            </nav>
                        </Box>
                        {
                            location.pathname === "/LogIn" ?
                                <Back />
                                :
                                location.pathname === "/Dashboard" ?
                                    <Body />
                                    :
                                    location.pathname === "/UserProfile" ?
                                        <UserProf />
                                        :
                                        location.pathname === "/TimeLogs" ?
                                            <TimeBody />
                                            :
                                            location.pathname === "/Support" ?
                                                <SupportBack />
                                                :
                                                location.pathname === "/NoticeBoard" ?
                                                    <Notice />
                                                    :
                                            ""
                        }
                    </IconContext.Provider>
                    :
                    <Back />
            }
        </>
    );
}

export default NavBarTry
