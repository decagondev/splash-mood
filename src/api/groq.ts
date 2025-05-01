import Groq from 'groq-sdk';

const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser: true,
});

export const createCaptions = async (prompt: string) => {
    const systemPrompt = "You are a creative assistant who writes short image captions or vibes."
    const completion = await groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: systemPrompt
            },
            {
                role: "user",
                content: `Give 3 short moodboard-style captions similar to: "${prompt}".`
            }
        ],
        model: "llama-3.3-70b-versatile",
    })
    const content = completion.choices[0].message?.content || "";
    return content.split("\n").map(line => line.replace(/^[0-9]+\.\s*/, "").trim()).filter(Boolean);
}