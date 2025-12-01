import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

interface StyledTextareaProps {
    hasText: boolean;
}

export const InitialCard = styled(Paper)(({ theme }) => ({
    width: "100%",
    maxWidth: "1112px",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: "28px",
    overflow: "hidden",
    position: "relative",
}));

export const InnerSection = styled(Stack)(({ theme }) => ({
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(2),
    alignItems: "center",
    gap: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    flex: 1,
    position: "relative",
}));


export const StyledTextarea = styled("textarea", {
    shouldForwardProp: (prop) => prop !== "hasText", // не передавати в DOM
})<StyledTextareaProps>(({ theme, hasText }) => ({
    width: "100%",
    minHeight: "260px",
    border: "none",
    outline: "none",
    resize: "none",
    backgroundColor: hasText
        ? theme.palette.background.default
        : theme.palette.background.paper,
    fontSize: "1rem",
    lineHeight: "1",
    paddingTop: "12px",
    paddingBottom: "12px",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    fontFamily: "inherit",
    position: "absolute",
    bottom: 0,
    left: 0,
    top: 0,
    maxHeight: "400px",
    overflowY: "auto",
    overflowX: "hidden",
    boxSizing: "border-box",
    color: theme.palette.text.primary,
    borderRadius: "28px 28px 0 0",

    "&::placeholder": {
        fontSize: "1rem",
        fontFamily: "Inter",
        opacity: 1,
        color: theme.palette.text.secondary,
    },

    "&:disabled": {
        opacity: 0.6,
    },

    "&:active, &:focus": {
        border: `1px solid ${theme.palette.primary.main}`,
    },
}));

export const OptionItem = styled(Button)(({ theme }) => ({
    flex: 1,
    display: "flex",
    gap: theme.spacing(1),
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2, 1),
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "11px",
    cursor: "pointer",
    textTransform: "none",
    color: theme.palette.text.secondary,
    height: "fit-content",

    "&:last-child": {
        marginLeft: 0,
    },

    "&:hover": {
        border: `1px solid ${theme.palette.primary.main}`,
    },
}));