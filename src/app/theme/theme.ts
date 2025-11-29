import {createTheme} from "@mui/material";
import {palette} from "@/app/theme/palette";


export const theme = createTheme({
    palette,
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