/* eslint-disable linebreak-style */
import * as React from 'react';

import { Head } from '../seo';
import Grid from '@mui/material/Grid2';
import { Divider, Typography } from '@mui/material';

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <Head title={title} />
      <Grid
          container
          size={12}
          sx={[
            {
              overflowY: 'auto',
            },
            {
              marginLeft: 260 - 25 + 'px',
            },
            {
              padding: 12,
            },
            {
              maxWidth: `calc(100vw - ${260}px)`,
            },
          ]}
          spacing={8}
        >
          {title ? (
            <Grid container size={12} display="flex" flexDirection="row" flexWrap="wrap" rowGap={4} height="100%">
              <Grid display="flex" flexDirection="column" size={12}>
                <Typography variant="h3" height={80}>
                  {title}
                </Typography>
                <Divider sx={{ borderBottomWidth: 2 }} />
              </Grid>
              {children}
            </Grid>
          ) : (
            children
          )}
        </Grid>
      {/* <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:px-8">
          {children}
        </div>
      </div> */}
    </>
  );
};
