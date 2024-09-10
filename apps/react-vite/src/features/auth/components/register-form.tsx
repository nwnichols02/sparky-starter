import * as React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Form, Input, Select, Label, Switch } from '@/components/ui/form';
import { useRegister, registerInputSchema } from '@/lib/auth';
import { Team } from '@/interfaces/types/api';
import TextBox from '@/components/Molecules/Textbox.component';
import { Stack } from '@mui/material';

type RegisterFormProps = {
  onSuccess: () => void;
  chooseTeam: boolean;
  setChooseTeam: () => void;
  teams?: Team[];
};

export const RegisterForm = ({
  onSuccess,
  chooseTeam,
  setChooseTeam,
  teams,
}: RegisterFormProps) => {
  const registering = useRegister({ onSuccess });
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  return (
    <div>
      <Form
        onSubmit={(values) => {
          registering.mutate(values);
        }}
        schema={registerInputSchema}
        options={{
          shouldUnregister: true,
        }}
      >
        {({ register, formState }) => (
          <>
            <Stack direction='column' sx={{ width: '100%' }}>

              <TextBox name="firstName" label="First Name" id={'firstName'} sx={{ mt: 4 }} />
              <TextBox name="lastName" label="Last Name" id={'lastName'} sx={{ mt: 4 }} />
              <TextBox name="email" label="Email Address" id={'email'} sx={{ mt: 4 }} />
              <TextBox name="password" label="Password" id={'password'} sx={{ mt: 4 }} />

              <div className="flex items-center space-x-2">
                <Switch
                  checked={chooseTeam}
                  onCheckedChange={setChooseTeam}
                  className={`${chooseTeam ? 'bg-blue-600' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2`}
                  id="choose-team"
                />
                <Label htmlFor="airplane-mode">Join Existing Team</Label>
              </div>

              {chooseTeam && teams ? (
                <Select
                  label="Team"
                  error={formState.errors['teamId']}
                  registration={register('teamId')}
                  options={teams?.map((team) => ({
                    label: team.name,
                    value: team.id,
                  }))}
                />
              ) : (
                <Input
                  type="text"
                  label="Team Name"
                  error={formState.errors['teamName']}
                  registration={register('teamName')}
                />
              )}
              <div>
                <Button
                  id="register-btn"
                  // isLoading={registering.isPending}
                  type="submit"
                  fullWidth
                  variant='contained'
                  className="w-full"
                >
                  Register
                </Button>

              </div>
            </Stack>
          </>
        )}
      </Form>
      <div className="mt-2 flex items-center justify-end">
        <div className="text-sm">
          <Link
            to={`/auth/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`}
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Log In
          </Link>
        </div>
      </div>
    </div >
  );
};
