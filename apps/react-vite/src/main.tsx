import * as React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { App } from './app/App';
import { enableMocking } from './testing/mocks';
import { CssBaseline } from '@mui/material';

const root = document.getElementById('root');
if (!root) throw new Error('No root element found');

enableMocking().then(() => {
  createRoot(root).render(
    <React.StrictMode>
      <App />
      <CssBaseline/>
    </React.StrictMode>,
  );
});
