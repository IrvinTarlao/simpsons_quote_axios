import React from 'react';

function DisplaySimpsonsQuote({ simpsons }) {

    let style = {
        height: "400px",
        // maxWidth: "200px"
    }

  return (
    <div className="DisplayQuote">
      <img
        src={simpsons.image}
        alt={simpsons.character}
        style={style}
      />
      <div>{simpsons.character}</div>
      <div>{simpsons.quote}</div>
    </div>
  );
};

export default DisplaySimpsonsQuote;