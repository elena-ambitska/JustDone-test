import {IAIProvider} from "./aiProvider.interface";
import {AI_TIMEOUTS} from "@/constants";

const withTimeout = <T>(promise: Promise<T>, ms: number): Promise<T> =>
    Promise.race([
        promise,
        new Promise<T>((_, reject) =>
            setTimeout(() => reject(new Error("Timeout")), ms)
        ),
    ]);

export class AIService {
    constructor(private providers: IAIProvider[]) {
        if (!providers.length) {
            throw new Error("AIService needs at least one provider");
        }
    }

    async paraphrase(text: string): Promise<string> {
        if (!text.trim()) {
            throw new Error("Empty text");
        }

        const [primaryProvider, ...fallbackProviders] = this.providers;

        try {
            console.log(`[AIService] Trying primary: ${primaryProvider.name}`);
            const primaryResult = await withTimeout(
                primaryProvider.paraphrase(text),
                AI_TIMEOUTS.PRIMARY
            );

            if (primaryResult && primaryResult.trim().length > 0) {
                return primaryResult;
            }

            console.warn("[AIService] Primary returned empty");
        } catch (err) {
            console.warn("[AIService] Primary failed:", err);
        }

        if (!fallbackProviders.length) {
            throw new Error("Primary provider failed and no fallback providers");
        }

        console.log("[AIService] Trying fallback providers...");

        const fallbackTasks = fallbackProviders.map(async (provider) => {
            try {
                const result = await withTimeout(provider.paraphrase(text), AI_TIMEOUTS.FALLBACK);
                console.log(`[AIService] Fallback ${provider.name} raw response:`, result);

                if (result && result.trim().length > 0) {
                    console.log(`[AIService] Fallback provider ${provider.name} WIN`);
                    return result;
                }

                throw new Error("Empty response");
            } catch (err) {
                console.warn(`[AIService] Fallback provider ${provider.name} failed:`, err);
                return null;
            }
        });

        const fallbackResults = await Promise.allSettled(fallbackTasks);

        const successful = fallbackResults.find(
            (r) => r.status === "fulfilled" && r.value && r.value.trim().length > 0
        ) as PromiseFulfilledResult<string> | undefined;

        if (!successful) {
            throw new Error("All AI providers failed");
        }

        return successful.value;
    }
}
