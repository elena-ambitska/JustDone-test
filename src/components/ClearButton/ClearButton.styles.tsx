import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";

export const ClearButtonStyled = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.grey[200],
    borderRadius: "51px",
    height: "48px",
    textTransform: "none",
    boxShadow: "none",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),

    "&:hover": {
        backgroundColor: theme.palette.grey[300],
        boxShadow: "none",
    },
}));