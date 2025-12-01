import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { Typography } from "@mui/material";
import {OptionItem} from "@/components/styles";

export function SampleOption({ onClick }: { onClick: () => void }) {
    return (
        <OptionItem onClick={onClick} aria-label="Insert sample text">
            <DescriptionOutlinedIcon sx={{ fontSize: 20, color: "grey.600" }} aria-hidden="true"/>
            <Typography variant="body2" fontWeight={500} color="grey.600">
                Sample text
            </Typography>
        </OptionItem>
    );
}
