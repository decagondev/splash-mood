export const fetchImageFromUnsplash = async (query: string) => {
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`);
        const data = await response.json();
        console.log(data);
        return data.results[Math.floor(Math.random() * data.results.length)].urls?.regular || null;
    } catch (error) {
        console.error('Error fetching image:', error);
        return null;
    }
}
