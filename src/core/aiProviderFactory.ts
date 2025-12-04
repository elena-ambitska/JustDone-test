import { IAIProvider } from "./aiProvider.interface";
import {OpenAIProvider} from "@/core/providers/openaiProvider";
import {GeminiProvider} from "@/core/providers/geminiProvider";


export function createProviders(): IAIProvider[] {
    const providers: IAIProvider[] = [];

    if (process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
        providers.push(new OpenAIProvider(process.env.NEXT_PUBLIC_OPENAI_API_KEY));
    } else {
        console.warn("[AIProviderFactory] Missing OpenAI API key");
    }

    if (process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
        providers.push(new GeminiProvider(process.env.NEXT_PUBLIC_GEMINI_API_KEY));
    } else {
        console.warn("[AIProviderFactory] Missing Gemini API key");
    }

    if (providers.length === 0) {
        throw new Error("No valid AI providers configured");
    }

    return providers;
}
