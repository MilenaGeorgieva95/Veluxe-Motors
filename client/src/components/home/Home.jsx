import { useState } from "react";
import LogoBar from "../Deals/LogoBar";
import TopDealsBar from "../Deals/TopDealsBar";
import FeaturedCars from "./featured-cars/FeaturedCars";
import Header from "./home-header/Header";
import SearchResults from "./search-results/SearchResults";

export default function Home() {
  const [results, setResults] = useState([]);
  const showSearchResults = (resultsData) => {
    setResults(resultsData);
  };
  return (
    <>
      <Header showSearchResults={showSearchResults} />
      {results.length>0&&<SearchResults results={results} />}
      <FeaturedCars />
      <LogoBar />
      <TopDealsBar />
    </>
  );
}
