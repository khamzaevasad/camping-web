import './Navbar.css';
import navBottomIcon from '../assets/navbottom.svg';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ setModaltype, setShowModal }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isMobile = window.innerWidth <= 430;
  const drawerAnchor = isMobile ? 'right' : 'left';

  return (
    <nav className="navbar">
      <div className="navbar-container ">
        <div className="nav-left">
          <IconButton
            onClick={() => setIsDrawerOpen(true)}
            className="hamburger"
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <NavLink to="/" className="logo">
            Camper
          </NavLink>

          <NavLink to="/motor" className="nav-item">
            Motor <img src={navBottomIcon} alt="dropdown" />
          </NavLink>
          <NavLink to="/caravan" className="nav-item">
            Caravan <img src={navBottomIcon} alt="dropdown" />
          </NavLink>
          <NavLink to="/tuning" className="nav-item">
            Tuning <img src={navBottomIcon} alt="dropdown" />
          </NavLink>
          <NavLink to="/usedcar" className="nav-item">
            Used Car <img src={navBottomIcon} alt="dropdown" />
          </NavLink>
          <NavLink to="/campingplase" className="nav-item">
            Camping Place
          </NavLink>
        </div>

        <div className="nav-right">
          <FaShoppingCart className="icon" />
          <FaUser
            onClick={() => {
              console.log('iconClick');
              setModaltype('signup');
              setShowModal(true);
            }}
            className="icon"
          />
          <div className="nav-item">
            En <img src={navBottomIcon} alt="dropdown" />
          </div>
        </div>
      </div>

      <Drawer
        anchor={drawerAnchor}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <List sx={{ width: 250 }}>
          {['Motor', 'Caravan', 'Tuning', 'Used Car', 'Camping Place'].map(
            (text) => (
              <ListItem
                button
                key={text}
                onClick={() => setIsDrawerOpen(false)}
              >
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </nav>
  );
};

export default Navbar;
