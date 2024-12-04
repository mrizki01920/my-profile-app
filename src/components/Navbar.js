import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FolderIcon from '@mui/icons-material/Folder';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#4527a0',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
  position: 'sticky',
}));

const NavLink = styled(Link)(({ theme }) => ({
  color: '#fff',
  textDecoration: 'none',
  margin: theme.spacing(1.5),
  fontWeight: '600',
  fontSize: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  transition: 'color 0.3s ease-in-out',
  '&:hover': {
    color: '#ffca28',
  },
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '.MuiDrawer-paper': {
    width: '250px',
    backgroundColor: '#4527a0',
    color: '#fff',
  },
}));

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
      <List>
        <ListItem button component={Link} to="/">
          <HomeIcon style={{ color: '#ffca28', marginRight: '10px' }} />
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <InfoIcon style={{ color: '#ffca28', marginRight: '10px' }} />
          <ListItemText primary="About Me" />
        </ListItem>
        <ListItem button component={Link} to="/projects">
          <FolderIcon style={{ color: '#ffca28', marginRight: '10px' }} />
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ContactMailIcon style={{ color: '#ffca28', marginRight: '10px' }} />
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <StyledAppBar>
      <Toolbar>
        {/* Logo */}
        <Typography
          variant="h6"
          style={{
            flexGrow: 1,
            fontWeight: 'bold',
            fontFamily: 'Poppins, sans-serif',
            cursor: 'pointer',
          }}
        >
          My Profile
        </Typography>

        {/* Desktop Navigation */}
        <Box display={{ xs: 'none', md: 'flex' }}>
          <NavLink to="/">
            <HomeIcon />
            Home
          </NavLink>
          <NavLink to="/about">
            <InfoIcon />
            About Me
          </NavLink>
          <NavLink to="/projects">
            <FolderIcon />
            Projects
          </NavLink>
          <NavLink to="/contact">
            <ContactMailIcon />
            Contact
          </NavLink>
        </Box>

        {/* Mobile Menu Button */}
        <Box display={{ xs: 'block', md: 'none' }}>
          <IconButton color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Mobile Drawer */}
        <MobileDrawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
          {drawerContent}
        </MobileDrawer>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;