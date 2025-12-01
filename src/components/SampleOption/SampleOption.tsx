import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { Typography } from "@mui/material";
import {OptionItem} from "@/components/styles";

export function SampleOption({ onClick }: { onClick: () => void }) {
    return (
        <OptionItem onClick={onClick} aria-label="Insert sample text">
            <DescriptionOutlinedIcon sx={{ fontSize: 20, color: "#76777A" }} aria-hidden="true"/>
            <Typography variant="body2" fontWeight={500} color="#76777A">
                Sample text
            </Typography>
        </OptionItem>
    );
}
