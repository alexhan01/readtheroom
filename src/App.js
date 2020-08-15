import React, { useState } from 'react';

import './App.css';
import Amplify, { Storage, Predictions } from 'aws-amplify';
import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';

// Syncing with the cloud
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);
Amplify.addPluggable(new AmazonAIPredictionsProvider());

function SentimentAnalysis() {
  const [response, setResponse] = useState("Input some text and click enter to test");
  const [textToInterpret, setTextToInterpret] = useState("Write some text here");

  function interpretFromPredictions() {
    Predictions.interpret({
      text: {
        source: {
          text: textToInterpret,
        },
        type: "ALL"
      }
    }).then(result => setResponse(JSON.stringify(result, null, 2)))
      .catch(err => setResponse(JSON.stringify(err, null, 2)))
  }

  function setText(event) {
    setTextToInterpret(event.target.value);
  }
  
  return (
    <div className="Text">
      <div>
        <h3>Sentiment Analysis</h3>
        <input value={textToInterpret} onChange={setText}></input>
        <button onClick={interpretFromPredictions}>test</button>
        <p>{ response }</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
        Text Interpretation
        <SentimentAnalysis />
    </div>
  );
}

export default App;