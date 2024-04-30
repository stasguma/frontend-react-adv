import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/app/styles/index.scss';
import '@/shared/config/i18n/i18n';

import App from '@/app/App';
import { StoreProvider } from '@/app/providers/store';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { PageError } from '@/widgets/PageError';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <StoreProvider>
      <ErrorBoundary fallback={<PageError />}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </StrictMode>
);
