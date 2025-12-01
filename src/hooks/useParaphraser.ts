"use client";

import { useState, useCallback } from "react";
import {API_ROUTES} from "@/constants/apiRoutes";

export function useParaphraser() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState("");

    const paraphrase = useCallback(async (text: string) => {
        if (!text.trim() || loading) return;

        try {
            setLoading(true);
            setError(null);

            const response = await fetch(API_ROUTES.PARAPHRASE, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "AI request failed");
            }

            setResult(data.result || "");
        } catch (e) {
            setError("Failed to paraphrase text. Try again.");
        } finally {
            setLoading(false);
        }
    }, [loading]);

    const reset = useCallback(() => {
        setResult("");
        setError(null);
    }, []);

    return {
        paraphrase,
        loading,
        error,
        result,
        reset,
    };
}
