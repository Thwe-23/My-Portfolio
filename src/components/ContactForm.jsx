import React, { useState } from 'react';
import axios from 'axios';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn
} from 'react-icons/fa';
import {
  Typography,
  Container,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
  Avatar,
  Link,
} from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      alert('Message sent!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('Failed to send message');
    }
  };

  return (
    <Box sx={{ bgcolor: '#1976d2', color: '#fafafa', minHeight: '100vh' }}>
      <Container maxWidth="sm" sx={{ pt: 12 }}>
        <Grid container justifyContent="center" spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" fontWeight="bold">
              CONTACT ME
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Box display="flex" alignItems="center" gap={2} mb={2}>
                <FaPhoneAlt />
                <Typography>Telephone no.  09 442 867 050</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={2}>
                <FaEnvelope />
                <Typography>
                  E‑Mail {' '}
                  <Link href="erithwe@gmail.com" color="#f57f17">
                    erithwe@gmail.com
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        
        <Paper elevation={4} sx={{  mt: 5, mb: 5, p: 4, bgcolor: '#f7fafc', color: '#1a1a1a' }}>
          <form onSubmit={handleSubmit} >
            <Grid container spacing={3} sx={{justifyContent: 'center'}}>
              <Grid item size={7}>
                <TextField
                  fullWidth
                  required
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>
                <Grid item size={7} xs={12} md={6}>
                  <TextField
                    fullWidth
                    required
                    label="Your E-mail Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item size={7} xs={12}>
                  <TextField
                    fullWidth
                    required
                    multiline
                    minRows={5}
                    label="Type your message here..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item size={7}>
                  <Button                    
                    type="submit"
                    variant="contained"
                    sx={{fontWeight: 'bold' }}
                  >
                    SEND!
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        
        <Box  display="flex" flexWrap="wrap" justifyContent="center" gap={3}>
          {[
            FaLinkedinIn,
            FaTwitter,
            FaFacebookF
          ].map((Icon, i) => (
            <Avatar key={i} sx={{ bgcolor: '#f7fafc', color: '#323232', width: 80, height: 80 , mb: 5}}>
              <Icon size={30} />
            </Avatar>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ContactForm;
