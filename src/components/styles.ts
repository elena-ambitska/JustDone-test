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
    fontSize: "16px",
    lineHeight: "1.6",
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

    "&::placeholder": {
        color: theme.palette.grey[600],
        fontSize: "14px",
        fontFamily: "Inter",
        opacity: 1,
    },

    "&:disabled": {
        opacity: 0.6,
    },
}));

export const OptionItem = styled(Button)(({ theme }) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(1),
    padding: theme.spacing(2, 2, 4, 2),
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: "11px",
    cursor: "pointer",

    "&:hover": {
        backgroundColor: theme.palette.grey[50],
    },
}));