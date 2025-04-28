// const OPENCAGE_API_KEY = "bb043035307f40c6914565ce777c5afc"; // Replace this

// export async function getCityFromCoords(lat, lng) {
//   const res = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${OPENCAGE_API_KEY}`);
//   const data = await res.json();
  
//   if (data.results.length === 0) {
//     throw new Error("No location found");
//   }

//   const components = data.results[0].components;
//   return components.city || components.town || components.village || components.state || "Unknown";
// }



// const OPENCAGE_API_KEY = "e27ab7077ffb45d79f7f6da22d6e2bbbc";

// export async function getCityFromName(cityName) {
//   try {
//     const res = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(cityName)}&key=${OPENCAGE_API_KEY}`);
//     const data = await res.json();

//     if (data.results.length === 0) {
//       throw new Error("No location found");
//     }

//     const components = data.results[0].components;
//     return components.city || components.town || components.village || components.state || "Unknown";
//   } catch (error) {
//     console.error("Error fetching city:", error);
//     throw error;
//   }
// }
