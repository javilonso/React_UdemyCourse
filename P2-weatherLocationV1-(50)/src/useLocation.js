import { useState, useEffect } from "react";

export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => setLat(position.coords.latitude), //success calback
      (err) => setErrorMessage(err.message) //fail calback
    );
  }, []);

  return [lat, errorMessage];
};
