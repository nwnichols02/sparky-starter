import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';

import { MainErrorFallback } from '@/components/errors/main';
import { Notifications } from '@/components/ui/notifications';
import { Spinner } from '@/components/ui/spinner';
import { AuthLoader } from '@/lib/auth';
import { queryConfig } from '@/lib/react-query';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { createContext, Suspense, useMemo, useState } from 'react';
import { getThemeByName } from '@/constants/theme/theme';
import { ThemeConfigurator } from '@/components/Organisms/ThemeConfigurator/ThemeConfigurator.component';


type AppProviderProps = {
  children: React.ReactNode;
};
export const ColorModeContext = createContext({ toggleColorMode: () => { } });

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = useState(() =>
    new QueryClient({
      defaultOptions: queryConfig,
    }),
  );

  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [themeName, setThemeName] = useState<'appTheme' | 'shadTheme'>('shadTheme');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = getThemeByName(themeName, mode);


  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <Spinner size="xl" />
        </div>
      }
    >
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <ErrorBoundary FallbackComponent={MainErrorFallback}>
            <HelmetProvider>
              <QueryClientProvider client={queryClient}>
                {import.meta.env.DEV && <ReactQueryDevtools buttonPosition={'bottom-left'} initialIsOpen={false} />}
                <Notifications />
                <AuthLoader
                  renderLoading={() => (
                    <div className="flex h-screen w-screen items-center justify-center">
                      <Spinner size="xl" />
                    </div>
                  )}
                >
                  {children}
                  <ThemeConfigurator setThemeName={setThemeName} themeName={themeName} />
                </AuthLoader>
              </QueryClientProvider>
            </HelmetProvider>
          </ErrorBoundary>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Suspense>
  );
};
