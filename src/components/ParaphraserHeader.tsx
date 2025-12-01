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
            >
                AI Text Paraphraser by JustDone
            </Typography>

            <Typography
                variant="h2"
                fontWeight={500}
                textAlign="center"
                color="black"
                sx={{ fontSize: "22px" }}
            >
                Transform your writing from good to great with our Paraphraser tool.
            </Typography>
        </Stack>
    );
}
