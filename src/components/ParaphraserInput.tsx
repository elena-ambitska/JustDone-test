"use client";

import {InitialCard, InnerSection, StyledTextarea} from "@/components/styles";
import Stack from "@mui/material/Stack";
import {readClipboardText} from "@/utils/clipboard";
import {SAMPLE_TEXT} from "@/constants";
import ParaphraserCTA from "@/components/ParaphraserCTA/ParaphraserCTA";
import PasteOption from "@/components/PasteOption/PasteOption";
import {SampleOption} from "@/components/SampleOption/SampleOption";
import {ParaphraserState} from "@/types";

interface ParaphraserInputProps {
    value: string;
    onChange: (text: string) => void;
    state: ParaphraserState;
    onParaphrase: () => void;
    onClear: () => void;
}

export default function ParaphraserInput({
                                             value,
                                             onChange,
                                             state,
                                             onParaphrase,
                                             onClear
                                         }: ParaphraserInputProps) {

    const handlePasteClick = async () => {
        const pastedText = await readClipboardText();
        if (pastedText) {
            onChange(pastedText);
        }
    };

    const handleSampleText = () => {
        onChange(SAMPLE_TEXT);
    };

    return (
        <InitialCard elevation={0}>
            <InnerSection>

                {(state === "initial") && (
                    <Stack direction="row" spacing={2} sx={{ maxWidth: "400px", width: "100%", justifyContent: "center", gap: "8px", zIndex: 2, position: "absolute", top: "50%",  transform: "translateY(-50%)"}}>
                        <PasteOption onClick={handlePasteClick} />
                        <SampleOption onClick={handleSampleText} />
                    </Stack>
                )}

                <StyledTextarea
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    disabled={state === "loading"}
                    placeholder={state === "initial" ? "Enter text here or upload file to humanize it." : undefined}
                    hasText={Boolean(value.trim())}
                    aria-disabled={state === "loading"}
                    aria-busy={state === "loading"}
                    aria-label="Text input for paraphrasing"
                />
            </InnerSection>

            <ParaphraserCTA
                state={state}
                value={value}
                onParaphrase={onParaphrase}
                onClear={onClear}
            />
        </InitialCard>
    );
}
