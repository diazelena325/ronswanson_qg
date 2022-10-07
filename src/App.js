import React, { useState, useEffect, useCallback } from "react";
import html2canvas from "html2canvas";
import Quote from "./components/Quote";

function App() {
  const [quote, setQuote] = useState("");

  const fetchQuote = useCallback(async () => {
    //const data = await fetch('https://animechan.vercel.app/api/random');
    //const json = await data.json();
    //setQuote(json);
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
      allowTaint: true
      
       
    }).then(function (canvas) {
      //let canvas1 = document.createElement('canvas');

      let a = document.createElement("a");
      a.download = "ronQuote.png";
      a.href = canvas.toDataURL("image/png");
      //a.href = canvas1.toDataURL("image/png");
      a.click();
      //window.open(canvas, "_blank");
      //document.body.appendChild(canvas);

      //var url = 'google.com';
      //var desc = 'Generate Ron Swanson quote';
      //var str = "http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(url) + "&media=" + fs + "&description=" + desc;

      //window.open(str, "_blank");

      //javascript:void((
      //function(){
      //var e=document.createElement('script');
      // e.setAttribute('type','text/javascript');
      // e.setAttribute('charset','UTF-8');
      //  e.setAttribute('src','http://assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);
      //  document.body.appendChild(e);
    });
  };

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  return (
    <div className="App">
      <div id="capture">
        <Quote quote={quote} />
        
<div className="buttonDiv">

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
