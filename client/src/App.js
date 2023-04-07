import axios from "axios";
import React from "react";

const baseURL = process.env.REACT_APP_METRICS_URL;

export default function App() {
  const [metrics, setMetrics] = React.useState(null);
  const [showMetrics, setShowMetrics] = React.useState(false);

  const showMetricsOnClick = async () => {
    // await axios.get(`${baseURL}/metrics`).then((response) => {
    //   setMetrics(response.data);
    // });
    await fetch(`${baseURL}/metrics`, { mode: "cors" }).then((res) => {
      setMetrics(res.data);
    });
    setShowMetrics(true);
  };

  const Performance = () => {
    return (
      <div>
        <h1>Performance</h1>
        <h2>Square : {metrics.square}</h2>
        <h2>Cube : {metrics.cube}</h2>
        <h2>Fibonacci : {metrics.fibonnaci}</h2>
      </div>
    );
  };

  return (
    <div>
      <button onClick={showMetricsOnClick}>Show metrics</button>
      {showMetrics && <Performance />}
    </div>
  );
}
