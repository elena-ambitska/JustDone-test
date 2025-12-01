import { getAIService } from "@/core/aiServiceInstance";

export async function POST(req: Request) {
    try {
        const { text } = await req.json();

        if (!text || typeof text !== "string") {
            return Response.json({ error: "Invalid input" }, {
                status: 400,
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "max-age=0, must-revalidate",
                },});
        }

        const result = await getAIService().paraphrase(text);

        if (!result) {
            return Response.json({ error: "AI response is empty" }, {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "max-age=0, must-revalidate",
                },});
        }

        return Response.json({ result }, {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "max-age=0, must-revalidate",
            },
        });
    } catch (error) {
        console.error("[API /paraphrase] Unexpected error:", error);
        return Response.json({ error: "Server error" }, { status: 500 });
    }
}
