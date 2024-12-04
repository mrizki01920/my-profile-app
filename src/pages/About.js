import React from 'react';
import { Typography, Grid, Box, Paper, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import ProfilePic from '../assets/profile.jpg'; // Pastikan foto ada di src/assets
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// Styled components
const AboutSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundImage: 'url(https://source.unsplash.com/random/1920x1080?nature)', // Bisa diganti dengan gambar lain
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  padding: theme.spacing(4),
}));

const InfoBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '10px',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(2),
  '& a': {
    margin: theme.spacing(1),
    color: '#fff',
    transition: 'color 0.3s ease-in-out',
  },
  '& a:hover': {
    color: '#f50057', // Warna merah muda untuk hover
  },
}));

const About = () => {
  return (
    <AboutSection>
      <Grid container spacing={4} style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Foto Profil */}
        <Grid item xs={12} md={4}>
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <img
              src={ProfilePic}
              alt="Profile"
              style={{
                width: '100%',
                maxWidth: '300px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                transition: 'transform 0.3s ease-in-out',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            
            {/* Ikon Media Sosial */}
            <SocialIcons>
              <IconButton
                component="a"
                href="https://www.instagram.com/imoutmight/"
                target="_blank"
                aria-label="Instagram"
                style={{ color: '#E4405F' }}
              >
                <InstagramIcon fontSize="large" />
              </IconButton>
              <IconButton
                component="a"
                href="https://mrizkiramadhan01920.blogspot.com/"
                target="_blank"
                aria-label="Blogger"
                style={{ color: '#FF5722' }}
              >
                <LanguageIcon fontSize="large" />
              </IconButton>
              <IconButton
                component="a"
                href="https://wa.me/6282320729832"
                target="_blank"
                aria-label="WhatsApp"
                style={{ color: '#25D366' }}
              >
                <WhatsAppIcon fontSize="large" />
              </IconButton>
            </SocialIcons>
          </Box>
        </Grid>

        {/* Informasi Tentang Saya */}
        <Grid item xs={12} md={8}>
          <InfoBox elevation={3}>
            <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', textAlign: 'center' }}>
              About Me
            </Typography>
            <Typography variant="body1" paragraph>
            Hai! Nama saya M. Rizki Ramadhan, saya adalah seorang Developer dan Programmer berusia 17 tahun yang saat ini sedang belajar di Kelas XI (11) di sekolah SMK Yadika 6, dalam urusan Teknik Komputer Jaringan (TKJ).
            </Typography>
            <Typography variant="body1" paragraph>
            Saya memiliki ketertarikan yang mendalam pada pemrograman dan coding, dan saya suka membuat aplikasi yang dapat memecahkan masalah di dunia nyata. Saya terus mengeksplorasi teknologi baru untuk meningkatkan keterampilan saya dan mengikuti tren terbaru di industri teknologi.
            </Typography>
            <Typography variant="body1" paragraph>
            Di waktu luang saya, saya senang bereksperimen dengan berbagai proyek pengkodean, berkontribusi pada sumber terbuka, dan mempelajari bahasa pemrograman baru.
            </Typography>
            <Typography variant="body1" paragraph>
            Jangan ragu untuk menghubungi saya jika Anda memiliki proyek yang menarik atau hanya ingin mengobrol tentang teknologi!
            </Typography>
          </InfoBox>
        </Grid>
      </Grid>
    </AboutSection>
  );
};

export default About;
