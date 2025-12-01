import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";

export const CTAContainer = styled(Box)(({ theme }) => ({
    height: "66px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(1),
    gap: theme.spacing(1.5),
    backgroundColor: theme.palette.common.white,
}));

