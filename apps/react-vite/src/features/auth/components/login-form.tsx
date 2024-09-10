import { Link, useSearchParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Form, Input } from '@/components/ui/form';
import { useLogin, loginInputSchema } from '@/lib/auth';
import { Stack, TextField } from '@mui/material';
import TextBox from '@/components/Molecules/Textbox.component';

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const login = useLogin({
    onSuccess,
  });
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  return (
    <>
      <Form
        onSubmit={(values) => {
          login.mutate(values);
        }}
        schema={loginInputSchema}
      >
        {({ register, formState }) => (
          <>
            <Stack direction='column' sx={{ width: '100%' }}>

              <TextBox name="email" label="Email Address" type="email" id={'email'} sx={{ mt: 4 }} />
              <TextBox name="password" label="Password" type="password" id={'password'} sx={{ mt: 4 }} />
              <Button
                id='login-btn'
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                disabled={login.isPending}
                sx={{mt:4}}
              >
                Log in
              </Button>
            </Stack>
          </>
        )}
      </Form>
      <Link
        to={`/auth/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`}
        className="font-medium text-blue-600 hover:text-blue-500"
      >
        Register
      </Link>
    </>
  );
};
