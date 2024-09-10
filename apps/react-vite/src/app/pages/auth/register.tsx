import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { AuthLayout } from '@/components/layouts/auth-layout';
import { RegisterForm } from '@/features/auth/components/register-form';
import { useTeams } from '@/features/teams/api/get-teams';
import { CardContent, Typography } from '@mui/material';

export const RegisterRoute = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');
  const [chooseTeam, setChooseTeam] = useState(false);

  const teamsQuery = useTeams({
    queryConfig: {
      enabled: chooseTeam,
    },
  });

  return (
    <AuthLayout title="Register your account">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ mb: 4 }}>
        Register your account
        </Typography>

        <RegisterForm
          onSuccess={() =>
            navigate(`${redirectTo ? `${redirectTo}` : '/app'}`, {
              replace: true,
            })
          }
          chooseTeam={chooseTeam}
          setChooseTeam={() => setChooseTeam(!chooseTeam)}
          teams={teamsQuery.data?.data}
        />
      </CardContent>
    </AuthLayout>
  );
};
