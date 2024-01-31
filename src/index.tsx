import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/app/styles/index.scss';
import '@/shared/config/i18n/i18n';

import App from '@/app/App';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { PageError } from '@/widgets/PageError';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ErrorBoundary fallback={<PageError />}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>
);
