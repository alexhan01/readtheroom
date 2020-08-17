import React, { useState } from 'react';
import { Predictions } from 'aws-amplify';

// import downloadFilesFromS3 from './GetData.js';

var BUCKET = "slack-sentiment-analysis-messaging-data";

// const dotenv = require('dotenv');
// dotenv.config;

// SETTINGS
var ACCESS_KEY = process.env.ACCESS_KEY;
var SECRET_KEY = process.env.SECRET_KEY;

var async = require('async');
var fs = require('fs');
var AWS = require('aws-sdk');

AWS.config.update(
  {
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY,
  }
);

function downloadFilesFromS3() {
  var s3 = new AWS.S3();
  var params = {
    Bucket: BUCKET,
  };
  var target="./data/test.txt"

  s3.listObjectsV2(params, function(err, data) {
    if (err) console.log(err, err.stack); // Check error 
    else fs.writeFile(target,data) //write to text file
  });
}

function SentimentAnalysis() {
    const [response, setResponse] = useState("Input some text and click enter to test");
    const [textToInterpret, setTextToInterpret] = useState("Write some text here");
  
    // Function that takes in all the texts in the S3 Object on a daily basis
    downloadFilesFromS3();

    // Function that runs interpretFromPredictions through all objects in the S3

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

  export default SentimentAnalysis;