"use client";

import {useState, useEffect, useMemo} from "react";
import { useParaphraser } from "@/hooks/useParaphraser";
import ParaphraserInput from "@/components/ParaphraserInput";
import ErrorAlert from "@/components/ErrorAlert";
import {ParaphraserState} from "@/types";

export default function ParaphraserBody() {
    const [text, setText] = useState("");
    const { paraphrase, reset, loading, error, result } = useParaphraser();

    const state = useMemo<ParaphraserState>(() => {
        if (loading) return "loading";
        if (error) return "error";
        if (result) return "success";
        if (text.trim()) return "input";
        return "initial";
    }, [text, loading, error, result]);

    useEffect(() => {
        if (result) {
            setText(result);
        }
    }, [result]);

    const handleParaphrase = () => paraphrase(text);
    const handleClear = () => {
        reset();
        setText("");
    };

    return (
        <>
            <ParaphraserInput
                value={text}
                onChange={setText}
                state={state}
                onParaphrase={handleParaphrase}
                onClear={handleClear}
            />

            {state === "error" && <ErrorAlert message={error ?? "Error"} />}
        </>
    );
}
