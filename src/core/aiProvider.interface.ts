export interface IAIProvider {
    name: string;
    paraphrase(text: string): Promise<string>;
}