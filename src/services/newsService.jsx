const API_KEY = "31074731c8dd1bbdcb441c842e3be539";  // Replace this
const BASE_URL = "https://gnews.io/api/v4";

// export async function fetchNewsByLocation(city) {
//   const res = await fetch(
//     `${BASE_URL}/everything?q=${city}&apiKey=${API_KEY}`
//   );
//   const data = await res.json();
//   return data.articles;
// }


export async function fetchNewsByLocation(city,lang = 'en', country = 'in') {
    try {
      const res = await fetch(`${BASE_URL}/search?q=${city}&language=${lang}&country=${country}&apikey=${API_KEY}`);
      if (!res.ok) {
        throw new Error(`Error fetching news: ${res.statusText}`);
      }
      const data = await res.json();
      console.log("Fetched news data:", data); 
      return data.articles;
    } catch (error) {
      console.error("Failed to fetch news:", error);
      return []; // Return an empty array in case of an error
    }
  }

//GET https://gnews.io/api/v4/search?q=example&apikey=31074731c8dd1bbdcb441c842e3be539