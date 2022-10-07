import React from "react";

// <div className="anime">
//<img src="./photos/ron.png" alt="Computer Man" className="ron" ></img>
//</div>
function Quote({ quote }) {
  return (
    <div className="allQuote">
    <div className="mainChar">
     <img src="./photos/ron.png" alt="Computer Man" className="ron" ></img>
      </div>
      
<div className="quote">
<blockquote>{quote}</blockquote>

<div className="character" title="Ron Swanson">
  - Ron Swanson
</div>
</div>


     
    </div>
  );
}

export default Quote;
