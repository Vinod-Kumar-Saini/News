// import { useEffect, useState } from "react";
// import { fetchNewsByLocation } from "../services/newsService"; // Keep this import
// import React from "react";

// function Home() {
//   const [city, setCity] = useState("");
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Fetch news whenever the city changes
//   useEffect(() => {
//     if (city) {
//       fetchNews(city);
//     }
//   }, [city]);

//   // Fetch news based on city name
//   const fetchNews = async (cityName) => {
//     setLoading(true);
//     try {
//       const articles = await fetchNewsByLocation(cityName);
//       setNews(articles);
//     } catch (error) {
//       console.error("Failed to fetch news", error);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="p-8">
//       <h1 className="text-4xl font-bold mb-6">Search News by City 📰</h1>

//       {/* City search input */}
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="Enter city name"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           className="p-2 border rounded w-full"
//         />
//       </div>

//       {/* Show loading state */}
//       {loading ? (
//         <p>Loading news...</p>
//       ) : (
//         <>
//           {city && !news.length && !loading && <p>No news available for {city}.</p>}

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {news.map((article, idx) => (
//               <div key={idx} className="border rounded p-4 shadow">
//                 {article.urlToImage && (
//                   <img src={article.urlToImage} alt="" className="w-full h-40 object-cover mb-4" />
//                 )}
//                 <h2 className="text-xl font-semibold">{article.title}</h2>
                

//                 <p className="text-gray-600 mt-2">{article.description}</p>
//                 <a
//                   href={article.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 mt-4 inline-block"
//                 >
//                   Read More →
//                 </a>
//               </div>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Home;





import { useEffect, useState } from "react";
import { fetchNewsByLocation } from "../services/newsService"; // Keep this import
import React from "react";

function Home() {
  const [city, setCity] = useState("");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch news whenever the city changes
  useEffect(() => {
    if (city) {
      fetchNews(city);
    }
  }, [city]);

  // Fetch news based on city name
  const fetchNews = async (cityName) => {
    setLoading(true);
    try {
      const articles = await fetchNewsByLocation(cityName);
      setNews(articles);
    } catch (error) {
      console.error("Failed to fetch news", error);
    }
    setLoading(false);
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Search News by City 📰</h1>

      {/* City search input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>

      {/* Show loading state */}
      {loading ? (
        <p>Loading news...</p>
      ) : (
        <>
          {city && !news.length && !loading && <p>No news available for {city}.</p>}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article, idx) => (
              <div key={idx} className="border rounded p-4 shadow">
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                
                {article.image && (
                  <img
                    src={article.image}
                    alt="News"
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                )}

                <p className="text-gray-600 mt-2">{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mt-4 inline-block"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;

