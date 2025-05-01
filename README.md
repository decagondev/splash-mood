# Moodboard AI

A dynamic moodboard generator that creates visual inspiration based on your mood descriptions. This application uses AI to generate images and captions that match your desired vibe.

## Features

- **Mood-based Image Generation**: Enter a mood or vibe description to generate relevant images
- **AI-Powered Captions**: Get creative captions that match your mood
- **Dynamic Background**: The background color and animation adapts to the mood of your input
- **Responsive Design**: Works seamlessly across different screen sizes

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Groq API (for AI caption generation)
- Unsplash API (for image generation)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with your API keys:
   ```
   VITE_GROQ_API_KEY=your_groq_api_key
   VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Enter a mood or vibe description in the input field (e.g., "peaceful sunset", "energetic city life")
2. Click "Generate Image" to create your moodboard
3. View the generated image and suggested captions
4. The background will automatically adapt to match the mood

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## License

MIT License - See LICENSE file for details
