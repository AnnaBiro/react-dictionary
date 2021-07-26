import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function(definiton,index) {
        return (
          <div key={index}>
            <div className="definition">
              {definiton.definition}
             </div> 
            <div className="example">
              {definiton.example}
             </div> 
              <Synonyms synonyms={definiton.synonyms}/>
              
              
          
          
          </div>
        );
     
      })}
      
    </div>
    
  );
}