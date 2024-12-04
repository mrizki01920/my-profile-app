import React from 'react';
import { Grid, TextField, Button, Typography, Box, Paper } from '@mui/material';
import { styled } from '@mui/system';

// Styled components
const ContactSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#f5f5f5',
  padding: theme.spacing(4),
}));

const ContactForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: '600px',
  width: '100%',
  borderRadius: '10px',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#6200ea',
  color: '#fff',
  padding: '10px 20px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#3700b3',
  },
}));

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pesan Anda telah dikirim!');
  };

  return (
    <ContactSection>
      <ContactForm>
        <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', textAlign: 'center' }}>
          Hubungi Saya
        </Typography>
        <Typography variant="body1" paragraph style={{ textAlign: 'center', marginBottom: '20px' }}>
          Jika Anda memiliki pertanyaan atau ingin berkolaborasi, silakan isi form di bawah ini.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Nama Lengkap"
                variant="outlined"
                fullWidth
                required
                autoComplete="name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                required
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Pesan"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <StyledButton type="submit" variant="contained">
                Kirim Pesan
              </StyledButton>
            </Grid>
          </Grid>
        </form>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;