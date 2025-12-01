import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";


interface StyledButtonProps {
    loading?: boolean;
}

export const ParaphraseButtonStyled = styled(Button, {
    shouldForwardProp: (prop) => prop !== "loading",
})(({ theme, loading }) => ({
    height: "48px",
    borderRadius: "31px",
    textTransform: "none",
    fontWeight: 600,
    padding: `${theme.spacing(1.25)} ${theme.spacing(4)}`,
    backgroundColor: theme.palette.primary.main,

    ...(loading && {
        backgroundColor: theme.palette.secondary.dark,
        cursor: "not-allowed",
    }),

    "&:hover": {
        backgroundColor: theme.palette.primary.dark,
    },
}));