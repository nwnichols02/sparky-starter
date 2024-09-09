import { Box, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

export const NotFoundRoute = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 52,
      }}
    >
      <Stack spacing={2} direction="column" >
        <h1>404 - Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/" replace>
          Go to Home
        </Link>
      </Stack>
    </Box>
  );
};
