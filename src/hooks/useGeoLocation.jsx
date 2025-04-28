import { useState, useEffect } from "react";

export default function useGeoLocation() {
  const [location, setLocation] = useState({ loaded: false, coordinates: { lat: "", lng: "" } });
  const [error, setError] = useState(null);

  const onSuccess = (position) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setLocation({ loaded: true, coordinates: { lat: "", lng: "" } });
    setError(error.message);
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({ message: "Geolocation not supported" });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return { location, error };
}
