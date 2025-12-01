"use client";
import {ParaphraseButtonStyled} from "@/components/ParaphraseButton/ParaphraseButton.styles";

interface ParaphraseButtonProps {
    disabled?: boolean;
    loading?: boolean;
    onClick: () => void;
}

export default function ParaphraseButton({
                                             disabled = false,
                                             loading = false,
                                             onClick,
                                         }: ParaphraseButtonProps) {
    return (
        <ParaphraseButtonStyled
            variant="contained"
            color="primary"
            disabled={disabled || loading}
            onClick={onClick}
            aria-label={loading ? "Processing paraphrase" : "Paraphrase text"}
            aria-busy={loading}
        >
            Paraphrase
        </ParaphraseButtonStyled>
    );
}
