import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Box } from '@mui/material';

// Layout component for page structure
const Layout = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <Box component="main" flexGrow={1} style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;