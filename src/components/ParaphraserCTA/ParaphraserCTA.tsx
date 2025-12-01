"use client";
import {CTAContainer} from "@/components/ParaphraserCTA/ParaphraserCTA.styles";
import ClearButton from "@/components/ClearButton/ClearButton";
import ParaphraseButton from "@/components/ParaphraseButton/ParaphraseButton";
import {ParaphraserState} from "@/types";

interface ParaphraserCTAProps {
    state: ParaphraserState;
    value: string;
    onParaphrase: () => void;
    onClear: () => void;
}

export default function ParaphraserCTA({
                                           state,
                                           value,
                                           onParaphrase,
                                           onClear,
                                       }: ParaphraserCTAProps) {
    if (state === "success") return null;

    return (
        <CTAContainer>
            {(state === "input" || state === "error") && <ClearButton onClear={onClear} />}
            <ParaphraseButton
                disabled={state === "initial" || !value.trim()}
                onClick={onParaphrase}
            />
        </CTAContainer>
    );
}
