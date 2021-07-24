import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function(definiton,index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong>{definiton.definition}
              <br />
              <strong>Example:</strong>
              <em>{definiton.example}</em>
              
              <Synonyms synonyms={definiton.synonyms}/>
              
              
            </p>
          
          </div>
        );
     
      })}
      
    </div>
    
  );
}