import React, { useState } from 'react'
import Logo from "../Assets/LogoD.svg"
import {CgProfile} from "react-icons/cg"
import SchoolIcon from '@mui/icons-material/School';
import {HiOutlineBars3} from "react-icons/hi2"

import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import {Box, Drawer, ListItem, ListItemButton, ListItemIcon,
ListItemText,
colors, } from "@mui/material"

import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"


const NavBar = () => {
    const[openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
      {
        text: "Inicio",
        icon: <HomeIcon/>
      },

      {
        text: "Sobre nosotros",
        icon: <WorkOutlineIcon/>
      },

      {
        text: "Inicia sesión",
        icon: <CgProfile/>
      },
    ]
  
  

  return <nav>
    <div className = "nav-logo-container">
      <img src = {Logo} alt ="" />
    </div>

    <div className='navbar-links-container'>
      <a href="">Inicio</a>
      <a href="/About">Sobre nosotros</a>
      <a href="">Inicia Sesión</a>

      <button className='primary-button'>¡Registrate ya!</button>
    </div>

    <div className='navbar-menu-container'>
      <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
    </div>

    <Drawer open={openMenu} onClose={() => setOpenMenu(false)} 
    anchor="right"> 

      <Box
        sx={{width:250}}
        role="presentation"
        onClick={() => setOpenMenu(false)}
        onKeyDown={() => setOpenMenu(false)}
      >
        <list>
          {menuOptions.map((item) => (
            <ListItem key = {item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>

            </ListItem>
          
          
          ))}
        </list>


      </Box>
    </Drawer>
  </nav>;
};

export default NavBar;
