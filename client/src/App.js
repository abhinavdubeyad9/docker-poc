import axios from "axios";
import React from "react";

const baseURL = process.env.REACT_APP_METRICS_URL;

export default function App() {
  const [metrics, setMetrics] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/metrics`).then((response) => {
      setMetrics(response.data);
    });
  }, []);

  if (!metrics) return null;

  return (
    <div>
      <h1>Performance</h1>
      <h2>Square : {metrics.square}</h2>
      <h2>Cube : {metrics.cube}</h2>
      <h2>Fibonacci : {metrics.fibonnaci}</h2>
    </div>
  );
}
