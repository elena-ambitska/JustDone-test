import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";

export const ParaphraseButtonStyled = styled(Button)(({ theme }) => ({
    height: "48px",
    borderRadius: "31px",
    textTransform: "none",
    fontWeight: 600,
    padding: `${theme.spacing(1.25)} ${theme.spacing(4)}`,
    backgroundColor: theme.palette.grey[500],

    "&:hover": {
        backgroundColor: theme.palette.grey[600],
    },
}));