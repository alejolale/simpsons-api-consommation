// src/components/DisplayEmployee.js
import React from 'react';
import './Quote.css'

function Quote({ character }) {
  return (
    <figure key={character.character} className="QuoteCard">
    
      <img
        src={character.image}
        alt={character.character}
      />
      <figcaption>
                <blockquote>
                    {character.quote}
                </blockquote>
        <p>
            <cite>{character.character}</cite>
        </p>
        </figcaption>
      
    </figure>
  );
};

export default Quote;