import OpenAI from "openai";
import { IAIProvider } from "../aiProvider.interface";

export class OpenAIProvider implements IAIProvider {
    public readonly name = "OpenAI";
    private openai: OpenAI;
    private model: string = "gpt-4o";

    constructor(apiKey: string) {
        this.openai = new OpenAI({
            apiKey
        });
    }

    async paraphrase(text: string): Promise<string> {
        try {
            const response = await this.openai.chat.completions.create({
                model: this.model,
                messages: [
                    {
                        role: "system",
                        content:
                            "You are an expert paraphrasing assistant. Rephrase the user's input so it sounds natural, fluent, and human-like.",
                    },
                    { role: "user", content: `Paraphrase: ${text}` },
                ],
                temperature: 0.3,
                max_tokens: 800,
            });

            return (response.choices[0]?.message?.content ?? "").trim();
        } catch (err: any) {
            if (err.status === 429 || err.code === "insufficient_quota") {
                console.warn("[OpenAIProvider] Quota exceeded, switching to fallback");
                return "";
            }
            console.error("[OpenAIProvider] Error:", err);
            return "";
        }
    }
}
