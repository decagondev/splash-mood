import { useState } from "react";
import { fetchImageFromUnsplash } from "./api/unsplash";
import { createCaptions } from "./api/groq";
import { ImageDisplay } from "./components/ImageDisplay";

export function App() {
  const [suggestedCaptions, setSuggestedCaptions] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [prompt, setPrompt] = useState<string>("");

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setSuggestedCaptions([]);
    const url = await fetchImageFromUnsplash(prompt);
    setImageUrl(url);
    const captions = await createCaptions(prompt);
    setSuggestedCaptions(captions);
    setLoading(false);

  }
  

  return (
    <>
        
      <div className="min-height-screen bg-surface text-foreground flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-4">Moodboard AI</h1>
        <div className="flex gap-2 w-full max-w-md">
          <input
            type="text"
            value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your vibe..."
          className="flex-grow p-3 ounded-lg border border-muted bg-amber-100 shadow-sm"
        />
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="px-4 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 disabled:opacity-50 transition"
        >
          {loading ? "Generating..." : "Generate Image"}
        </button>
        </div>
        {imageUrl && ( <ImageDisplay imageUrl={imageUrl} />)}
      {suggestedCaptions.length > 0 && (
        <div className="mt-8 text-center max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-amber-800">Suggested Vibes</h2>
          <ul className="list-none flex gap-2">
            {suggestedCaptions.map((caption, index) => (
              <li
                key={index}
                className="flex-1 p-2 bg-amber-50 rounded-lg shadow-sm border border-amber-200 hover:bg-amber-100 transition duration-200"
              >
                {caption}
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </>
  )
}
