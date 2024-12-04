import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Hero Section Styling (Desain Minimalis, Tanpa Efek Blur)
const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  color: '#333',  // Warna teks gelap untuk kontras yang lembut
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  textAlign: 'center',
  padding: theme.spacing(3),
  margin: 0,
  background: '#white',  // Latar belakang dengan warna netral yang lembut
  boxShadow: 'none',
}));

// Hero Text Styling (Teks Utama)
const HeroText = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: '600',
  textTransform: 'uppercase',
  marginBottom: theme.spacing(2),
  letterSpacing: '1px',
  color: '#333',  // Teks gelap yang minimalis
  zIndex: 2,
}));

// SubText Styling (Deskripsi Pendek)
const SubText = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  marginBottom: theme.spacing(3),
  maxWidth: '600px',
  marginLeft: 'auto',
  marginRight: 'auto',
  fontWeight: '400',
  lineHeight: 1.5,
  color: '#666',  // Warna abu-abu yang lembut untuk teks deskripsi
  zIndex: 2,
}));

// Action Button Styling (Minimalis)
const ActionButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#333',  // Warna tombol gelap
  color: '#fff',  // Teks tombol putih
  fontWeight: '500',
  padding: '12px 30px',
  fontSize: '1rem',
  border: '2px solid #333',  // Border gelap untuk kesan minimalis
  borderRadius: '30px',
  zIndex: 2,
  '&:hover': {
    backgroundColor: '#fff',  // Tombol akan berubah menjadi putih saat hover
    color: '#333',  // Teks berwarna gelap saat hover
  },
}));

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <HeroText variant="h1">
              Welcome to My Profile
            </HeroText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <SubText variant="body1">
            Hai! Saya M. Rizki Ramadhan, yuk jelajahi website profile saya!
            </SubText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <ActionButton component={Link} to="/about">
              Lebih Lanjut
            </ActionButton>
          </motion.div>
        </Container>
      </HeroSection>
    </Box>
  );
};

export default Home;