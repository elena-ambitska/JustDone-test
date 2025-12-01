import { getAIService } from "@/core/aiServiceInstance";

export async function POST(req: Request) {
    try {
        const { text } = await req.json();

        if (!text || typeof text !== "string") {
            return Response.json({ error: "Invalid input" }, { status: 400 });
        }

        const result = await getAIService().paraphrase(text);

        if (!result) {
            return Response.json({ error: "AI response is empty" }, { status: 500 });
        }

        return Response.json({ result }, { status: 200 });
    } catch (error) {
        console.error("[API /paraphrase] Unexpected error:", error);
        return Response.json({ error: "Server error" }, { status: 500 });
    }
}
