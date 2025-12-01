export async function readClipboardText(): Promise<string | null> {
    if (!navigator?.clipboard) {
        console.warn("Clipboard API is not available");
        return null;
    }

    try {
        const text = await navigator.clipboard.readText();
        return text || null;
    } catch (error) {
        console.error("Failed to read clipboard:", error);
        return null;
    }
}