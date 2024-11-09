import React, { useEffect, useState } from "react";

const SerpAPITest = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://serpapi.com/search.json?engine=google&q=Coffee&api_key=8f0f7e61794200e4c5eda13abda9e8144ddfd7f655dad5ca45177feff6b0e1a3"
      );
      const data = await response.json();
      setResults(data.organic_results || []);
      console.log(data.organic_results);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Search Results for "Coffee"</h1>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SerpAPITest;
