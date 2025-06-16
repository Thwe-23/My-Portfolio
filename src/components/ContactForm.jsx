import {
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import {
  Typography,
  Container,
  Box,
  Grid,
  Link,
} from '@mui/material';

 const ContactForm = () => {

  return (
    <div id='contact-me' >
      <Box sx={{ bgcolor: '#1976d2', color: '#fafafa' }}>
        <Container maxWidth="sm" sx={{p:'25px'}}>
          <Grid container direction="row" sx={{justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}   spacing={5} >
            <Grid item xs={12} md={6}>
              <Typography variant="h2" fontWeight="bold" >
                CONTACT ME
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <FaPhoneAlt />
                  <Typography>Telephone no. {' '}
                    <Link href="tel:09442867050" color="#f57f17">
                      09 442 867 050
                    </Link>
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={2}>
                  <FaEnvelope />
                  <Typography>
                    E‑Mail {' '}
                    <Link href="mailto:erithwe@gmail.com?subject=Hello" color="#f57f17">
                      erithwe@gmail.com
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default ContactForm;
