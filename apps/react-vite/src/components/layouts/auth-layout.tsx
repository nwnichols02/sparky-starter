/* eslint-disable linebreak-style */
import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '@/assets/logo.svg';
import { Head } from '@/components/seo';
import { Link } from '@/components/ui/link';
import { useUser } from '@/lib/auth';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Typography } from '@mui/material';
import Grid from "@mui/material/Grid2"
type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const AuthLayout = ({ children, title }: LayoutProps) => {
  const user = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (user.data) {
      navigate('/app', {
        replace: true,
      });
    }
  }, [user.data, navigate]);

  return (
    <>
      <Head description={title} />
      <Container sx={{ height: '100vh', display: 'flex', alignContent: 'center', width: '100vw', justifyContent: 'center' }}>
        <Grid container sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }} size={{ md: 6 }}>
          <Card sx={{ width: '100%' }}>
            {children}
          </Card>
        </Grid>
      </Container>
    </>
  );
};
