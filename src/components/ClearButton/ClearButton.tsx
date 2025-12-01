"use client";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import {ClearButtonStyled} from "@/components/ClearButton/ClearButton.styles";

interface ClearButtonProps {
    disabled?: boolean;
    onClear: () => void;
}

export default function ClearButton({ disabled = false, onClear }: ClearButtonProps) {
    return (
        <ClearButtonStyled variant="contained" onClick={onClear} disabled={disabled}>
            <Stack direction="row" spacing={1} alignItems="center" aria-label="Clear input">
                <CloseIcon
                    sx={(theme) => ({
                        width: 24,
                        height: 24,
                        color: theme.palette.primary.main,
                    })}
                    aria-hidden="true"
                />
                <Typography
                    sx={(theme) => ({
                        fontFamily: "Inter, Helvetica, sans-serif",
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                        fontSize: "14px",
                        lineHeight: "20px",
                        letterSpacing: "0.1px",
                    })}
                >
                    Clear input
                </Typography>
            </Stack>
        </ClearButtonStyled>
    );
}
