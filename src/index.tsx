import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/app/styles/index.scss';
import '@/shared/config/i18n/i18n';
import App from '@/app/App';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
