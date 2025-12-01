import { createProviders } from "./aiProviderFactory";
import { AIService } from "./aiService";

let aiService: AIService | null = null;

export function getAIService(): AIService {
    if (!aiService) {
        aiService = new AIService(createProviders());
    }
    return aiService;
}
