import { Typography, Stack } from "@mui/material";

export default function ParaphraserHeader() {
    return (
        <Stack spacing={2} alignItems="center">
            <Typography
                variant="h1"
                fontWeight={700}
                textAlign="center"
                color="black"
                component="h1"
                sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
            >
                AI Text Paraphraser by JustDone
            </Typography>

            <Typography
                variant="h2"
                fontWeight={400}
                textAlign="center"
                color="black"
                sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
            >
                Transform your writing from good to great with our Paraphraser tool.
            </Typography>
        </Stack>
    );
}
