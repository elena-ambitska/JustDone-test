import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import Typography from "@mui/material/Typography";
import {OptionItem} from "@/components/styles";

export default function PasteOption({ onClick }: { onClick: () => void }) {
    return (
        <OptionItem onClick={onClick} aria-label="Paste text from clipboard" role="button">
            <ContentPasteIcon sx={{ fontSize: 20, fill: "#76777A" }} aria-hidden="true" />
            <Typography variant="body2" fontWeight={500} color="#76777A">
                Paste text
            </Typography>
        </OptionItem>
    );
}
