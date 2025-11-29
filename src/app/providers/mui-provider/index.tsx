"use client";

import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { ReactNode } from "react";
import {theme} from "@/app/theme/theme";

export default function MuiThemeProvider({ children }: { children: ReactNode }) {
    return (
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
    );
}
