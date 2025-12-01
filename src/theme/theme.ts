import {createTheme} from "@mui/material";
import {colors} from "@/theme/colors";


export const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary[40],
            dark: colors.primary[60],
        },
        error: {
            main: colors.red,
        },
        secondary: {
            main: colors.neutral[60],
            dark: colors.neutral[40],
        },
        background: {
            default: colors.white,
            paper: colors.neutral[80],
        },
        text: {
            primary: colors.black,
            secondary: colors.neutral[30],
        },
    },
    typography: {
        fontFamily: "Inter",
        h1: {
            fontSize: "44px",
            lineHeight: "60px",
            fontWeight: 700,
            letterSpacing: "-0.25px",
            textAlign: "center",
            fontFamily: "Inter",
        },
    },

})