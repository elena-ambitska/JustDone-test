import { IAIProvider } from "../aiProvider.interface";
import {GenerationConfig, GoogleGenAI} from "@google/genai";

const PARAPHRASER_GENERATION_CONFIG: GenerationConfig = {
    temperature: 0.3,
    topP: 0.9,
    topK: 40,
    maxOutputTokens: 2000,
    candidateCount: 1,
};

export class GeminiProvider implements IAIProvider {
    public readonly name = "Gemini";

    private genAI: GoogleGenAI;

    constructor(apiKey: string) {
        this.genAI = new GoogleGenAI({ apiKey });
    }

    async paraphrase(text: string): Promise<string> {
        try {
            const response = await this.genAI.models.generateContent({
                model: "gemini-2.5-flash",
                contents: [
                    {
                        role: "user",
                        parts: [
                            {
                                text:
                                    "You are an expert paraphrasing assistant. " +
                                    "Rewrite the following text to sound natural and human-like. " +
                                    "Return ONLY ONE paraphrased version without any options or explanation.\n\n" +
                                    `Paraphrase: ${text}`,
                            },
                        ],
                    },
                ],
                config: PARAPHRASER_GENERATION_CONFIG,
            });

            console.log(`[GeminiProvider] Response:`, response);
            return response.text ?? "";
        } catch (err) {
            console.error(`[GeminiProvider] Error:`, err);
            return "";
        }
    }
}
