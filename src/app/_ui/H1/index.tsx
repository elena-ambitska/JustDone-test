import {ReactNode} from "react";
import Typography from "@mui/material/Typography";

export default function H1({ children, classModifier }: { children: ReactNode, classModifier?: string }) {
    return (
        <Typography component="h1" variant="h1" className={classModifier} >
            {children}
        </Typography>
    )
}