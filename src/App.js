import React, { useState, useEffect, useCallback } from "react";
import html2canvas from "html2canvas";
import Quote from "./components/Quote";

function App() {
  const [quote, setQuote] = useState("");

  const fetchQuote = useCallback(async () => {
   
    const data = await fetch(
      "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
    ).then((response) => response.json());

    setQuote(data[0]);
  }, []);

  const generate = async () => {
    fetchQuote();
  };

  const capture = () => {
    html2canvas(document.body, {
      allowTaint: true,
      scrollX: 0,
    scrollY: -window.scrollY,
    windowWidth: document.documentElement.offsetWidth,
    windowHeight: document.documentElement.offsetHeight,
    backgroundColor: null
    }).then(function (canvas) {
      //let canvas1 = document.createElement('canvas');

      let a = document.createElement("a");
      a.download = "ronQuote.png";
      a.href = canvas.toDataURL("image/png");
    
      a.click();
     
    });
  };

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  return (
    <div className="App">
      <div id="capture">
        <Quote quote={quote} />
        
<div data-html2canvas-ignore className="buttonDiv">

  <button data-html2canvas-ignore onClick={generate}>
        Generate New Quote
      </button>
      <button data-html2canvas-ignore onClick={capture}>
        Save Quote
      </button>
</div>
</div>
      
    </div>
  );
}

export default App;
