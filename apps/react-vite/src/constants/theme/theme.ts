import { Theme } from '@mui/material';
import { appTheme } from '@/constants/theme/app-theme/appTheme';
import { shadTheme } from '@/constants/theme/shad-theme/shadTheme';

const themeMap: { [key: string]: (mode: 'light' | 'dark') => Theme } = {
  appTheme,
  shadTheme,
};

export const getThemeByName = (theme: string, mode: 'light' | 'dark') => {
  return themeMap[theme](mode);
};