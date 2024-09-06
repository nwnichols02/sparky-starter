import { useNavigate } from 'react-router';

import logo from '@/assets/logo.svg';
import logoSmall from '../../../public/vitelg.png';
import { Head } from '@/components/seo';
// import { Button } from '@/components/ui/button';
import { useUser } from '@/lib/auth';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  styled,
  Card,
  CardContent,
  CardActionArea,
  CardHeader,
  CardActions,
  CardMedia
} from '@mui/material';

export const LandingRoute = () => {
  const navigate = useNavigate();
  const user = useUser();

  const handleStart = () => {
    if (user.data) {
      navigate('/app');
    } else {
      navigate('/auth/login');
    }
  };

  const HeroSection = styled(Box)(({ theme }) => ({
    backgroundImage: 'url(https://img.freepik.com/free-photo/digital-art-southwest-landscape_23-2151785541.jpg?t=st=1725664507~exp=1725668107~hmac=7de53b337f79422f2f2fa20def4d60e15b94c9fb21dc9f0512622e15f9df228c&w=1380)',
    imageResolution: 'from-image',
    // backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'flex-start',
    color: 'white',
    textAlign: 'center',
  }));

  return (
    <>
      <Head description="Welcome to sparky start react" />
      <HeroSection>
        <Card sx={{ mb: 26 }}>
          <CardMedia
            alt="logo-react"
            component="img"
            image={logoSmall}
            sx={{ height: 160 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sparky Start
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Showcasing Best Practices For Building Modern Applications
            </Typography>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" color="primary" size="small" onClick={handleStart}>
              Get Started
            </Button>
            <Button variant="text" color="inherit" size="small">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </HeroSection >
    </>
  );
};
