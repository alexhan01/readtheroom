import React, { useState } from 'react';
import { Storage, Predictions } from 'aws-amplify';

// var BUCKET = 'slack-sentiment-analysis-messaging-data';

// const dotenv = require('dotenv');
// dotenv.config;

// SETTINGS
// var ACCESS_KEY = process.env.ACCESS_KEY;
// var SECRET_KEY = process.env.SECRET_KEY;

// var async = require('async');
// var fs = require('fs');
// var AWS = require('aws-sdk');

// var s3 = new AWS.S3();

// AWS.config.update(
//   {
//     accessKeyId: ACCESS_KEY,
//     secretAccessKey: SECRET_KEY,
//   }
// );

// var params = {
//   Bucket: BUCKET
// };

function SentimentAnalysis() {
    const [response, setResponse] = useState("Input some text and click enter to test");
    const [textToInterpret, setTextToInterpret] = useState("Write some text here");
    // const json = Storage.get('readtheroom/8b267f7e-b383-4a26-a529-720a77ca2ac7/386704655-2020-08-24T14:27:05');
    const json = Storage.get('s3://slackmessagesdata04500-dev/readtheroom/8b267f7e-b383-4a26-a529-720a77ca2ac7/386704655-2020-08-24T14:27:05');
    const obj = JSON.stringify(json, null, 2);

    function retrieveMessages() {
      //stub;
    }

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
  
    function loadData() {
      setResponse(obj);
    }

    function setText(event) {
      setTextToInterpret(event.target.value);
    }
    
    return (
      <div className="Text">
        <div>
          <h3>Sentiment Analysis</h3>
          {/* <input value={textToInterpret} onChange={setText}></input> */}
          {/* <button onClick={ interpretFromPredictions }>test</button> */}
          <button onClick={ loadData }>Load S3 Data</button>
          <p>{ response }</p>
        </div>
      </div>
    )
  }

  export default SentimentAnalysis;