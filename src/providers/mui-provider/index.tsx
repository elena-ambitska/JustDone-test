"use client";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { ReactNode } from "react";
import {ThemeProvider} from "@mui/material";
import {theme} from "@/theme/theme";

export default function MuiThemeProvider({ children }: { children: ReactNode }) {
    return (
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}
