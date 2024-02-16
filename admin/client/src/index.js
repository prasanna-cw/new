
import App from './App';
import * as React from 'react';
import {createRoot} from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
    <App />
    </StyledEngineProvider>
  </React.StrictMode>
);



