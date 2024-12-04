import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

// Styled Components
const ProjectSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(4),
  backgroundColor: '#f5f5f5',
  minHeight: '100vh',
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const Projects = () => {
  const projectList = [
    {
      title: 'Konfigurasi Remote Server di Debian 10 Buster',
      description:
        'Panduan lengkap untuk mengatur remote server menggunakan Debian 10 Buster. Klik untuk membaca detailnya.',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNVTWLLSVWm57Id-3ojOeVgBn-8rxsp_CSV0mtURagxhCoxeeCPt0CZgfKrUs8ru5VPP8kjXLQlCBzDWBPntmDvFPaW5o6mAiYTKxCim-AoVbtkv30nOy8Fsfpucfy-IV0jsEc9SAFrrh2efjkbUcC9AgFlS4m7weKm6iQZCAZzxKS2gFBvlljxn7KTJk/w523-h294/maxresdefault.jpg', // Gambar random (opsional, bisa diganti)
      link: 'https://mrizkiramadhan01920.blogspot.com/2024/10/konfigurasi-remote-server-di-debian-10.html',
    },
    {
      title: 'Konfigurasi DHCP Server di Debian 10 Buster',
      description:
        'Pelajari cara mengkonfigurasi DHCP Server di Debian 10 Buster dengan panduan langkah demi langkah.',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitTNtvA1J_WsGZT7num7U0S23sIWq5Uf8s1slhmt5D7dxuCm2MIKhGmWM6nTX4Tuplc9JQ7k0za_xev56UjfwanY2pidVI6MRMwgn1nXHHqvwMgej1zXsX-w7_J759LAhRLrdej9lZUrXcgLKZhoTVCJZXk_Izp_zRXAPTDwrEAWNYvuWU7vSLP7wxh3s/w640-h360/hq720.jpg', // Gambar random (opsional, bisa diganti)
      link: 'https://mrizkiramadhan01920.blogspot.com/2024/11/konfigurasi-dhcp-server-debian-10-buster.html',
    },
    {
      title: 'Konfigurasi DNS Server di Debian 10 Buster',
      description:
        'Langkah-langkah konfigurasi DNS Server di Debian 10 Buster. Baca lebih lanjut untuk informasi lengkap.',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLREibPufBtX63YiH_TgJR5W_BQuCHPbzPIHTWwdol0auDPMm06K1i2BjzlMT7Tn4a33zESEUk8h_2E6_HaMteirAUg6DZMmpn_t1nQK7hwlE5Cnt7oFhWmGoe3Xly9oKhqvp6Xo75mD7Gk81MKAv5SzGysd1VqKnDOW_Iy2gmAQEZoROe-PUbQmQzAfg/w640-h360/maxresdefault.jpg', // Gambar random (opsional, bisa diganti)
      link: 'https://mrizkiramadhan01920.blogspot.com/2024/11/konfigurasi-dns-server-di-debian-10.html',
    },
  ];

  return (
    <ProjectSection>
      <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', marginBottom: '20px' }}>
        My Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projectList.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ProjectCard>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {project.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={project.link}
                  target="_blank"
                  style={{ textTransform: 'none' }}
                >
                  Lihat Detail
                </Button>
              </CardContent>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>
    </ProjectSection>
  );
};

export default Projects;