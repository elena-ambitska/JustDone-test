import { ReactNode } from "react";
import {Container, Stack} from "@mui/material";

interface ParaphraserLayoutProps {
    children: ReactNode;
}

export default function HumanizerLanding({ children }: ParaphraserLayoutProps) {
    return (
        <Container sx={{paddingTop: "16px", position: "relative"}}>
            <Stack spacing={5} alignItems="center">
                {children}
            </Stack>
        </Container>
    );
}