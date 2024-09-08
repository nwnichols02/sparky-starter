import { useNavigate } from 'react-router';

import logo from '@/assets/logo.svg';
import logoSmall from '../../../public/vitelg.png';
import { Head } from '@/components/seo';
// import { Button } from '@/components/ui/button';
import { useUser } from '@/lib/auth';
import { GitHub } from '@mui/icons-material';
import github from "@/assets/github-mark-white.png"
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
  CardMedia,
  Icon,
} from '@mui/material';
import Grid from "@mui/material/Grid2"
import viteLogo from '@/assets/vite.svg'

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


  return (
    <>
      <Head description="Welcome to sparky start react" />
      <Container maxWidth="sm" sx={{ height: '100vh', display: 'flex', alignContent: 'center' }}>
        <Grid container sx={{ display: 'flex', alignContent: 'center' }}>
          <Card>
            <CardMedia
              sx={{ height: 140 }}
              image={viteLogo}
              title="green iguana"
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
              <Button variant="text" color="inherit" size="small"
                startIcon={<GitHub />}
              >
                Github
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Container>
    </>
  );
};
