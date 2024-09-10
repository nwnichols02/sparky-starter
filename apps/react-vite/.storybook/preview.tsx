import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../src/index.css';
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { getThemeByName } from "../src/constants/theme/theme"

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <Router>
      <Story />
    </Router>
  ),
  withThemeFromJSXProvider({
    themes: {
        ShadLight: getThemeByName('shadTheme', "light"),
        ShadDark: getThemeByName('shadTheme', "dark"),
        AppLight: getThemeByName('appTheme', 'light'),
        AppDark: getThemeByName('appTheme', 'dark'),
    },
    defaultTheme: 'ShadLight',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
}),
];
