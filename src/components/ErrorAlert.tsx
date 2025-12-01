import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

interface ErrorAlertProps {
    message: string;
}

export default function ErrorAlert({message}: ErrorAlertProps) {
    if (!message) return null;

    return (
        <Stack spacing={0} sx={{display: "flex", alignSelf: "start"}}>
            <Box sx={{px: 2, pt: 1, position: "absolute", bottom: "13px"}}>
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
        </Stack>
    );
}
