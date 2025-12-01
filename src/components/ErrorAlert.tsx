import Typography  from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface ErrorAlertProps {
    message: string;
}

export default function ErrorAlert({ message }: ErrorAlertProps) {
    if (!message) return null;

    return (
        <Box sx={{ px: 2, pt: 1, marginTop: 0 }}>
            <Typography
                variant="caption"
                sx={{
                    color: 'error.main',
                    fontSize: '12px',
                    lineHeight: '16px',
                    fontFamily: 'Inter, Helvetica, sans-serif',
                }}
            >
                {message}
            </Typography>
        </Box>
    );
}
