import { useNavigate, useSearchParams } from 'react-router-dom';

import { AuthLayout } from '@/components/layouts/auth-layout';
import { LoginForm } from '@/features/auth/components/login-form';
import { Card, CardContent, Typography } from '@mui/material';

export const LoginRoute = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  return (
    <AuthLayout title="Log in to your account">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ mb: 4 }}>
          Sparky Start
        </Typography>
        <LoginForm
          onSuccess={() =>
            navigate(`${redirectTo ? `${redirectTo}` : '/app'}`, {
              replace: true,
            })
          }
        />
      </CardContent>
    </AuthLayout>
  );
};
