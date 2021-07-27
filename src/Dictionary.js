import React, { useState }from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("baby");
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
   
    
    setResults(response.data[0]);

  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);

  }
  function search() {
    
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =  "563492ad6f91700001000001b0d66265b89e41ca83fd2e1e7d4a4fac";
    let pexelsApiUrl =  `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios.get(pexelsApiUrl, {headers: {"Authorization" : `Bearer ${pexelsApiKey}`}}).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    
  }

  

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
      return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type your word here..." onChange={handleKeywordChange} />
      </form>
      </section>
      <Results results={results}/>
      <Photos photos={photos}/>
    </div>
  );
  } else {
    load();
    return "Loading";
  }


  
}