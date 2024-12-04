import React from 'react';
import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import InstagramIcon from '@mui/icons-material/Instagram';
import RssFeedIcon from '@mui/icons-material/RssFeed'; // Ikon untuk Blogger
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Ikon untuk WhatsApp

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#4527a0',
  color: '#fff',
  textAlign: 'center',
  padding: theme.spacing(3),
  boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.2)',
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  '& a': {
    margin: theme.spacing(1),
    color: '#fff',
    transition: 'color 0.3s ease-in-out',
  },
  '& a:hover': {
    color: '#ffca28',
  },
}));

const Footer = () => {
  return (
    <FooterContainer>

      {/* Social Media Icons */}
      <SocialIcons>
        {/* Instagram */}
        <IconButton
          component="a"
          href="https://www.instagram.com/imoutmight/"
          target="_blank"
          aria-label="Instagram"
        >
          <InstagramIcon />
        </IconButton>

        {/* Blogger */}
        <IconButton
          component="a"
          href="https://mrizkiramadhan01920.blogspot.com/"
          target="_blank"
          aria-label="Blogger"
        >
          <RssFeedIcon />
        </IconButton>

        {/* WhatsApp */}
        <IconButton
          component="a"
          href="https://wa.me/6282320729832"
          target="_blank"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon />
        </IconButton>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;