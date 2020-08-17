import React from 'react';

import './App.css';
import Amplify from 'aws-amplify';
import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';
import SentimentAnalysis from './SentimentAnalysis.js';

// Syncing with the cloud
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);
Amplify.addPluggable(new AmazonAIPredictionsProvider());

function App() {
  return (
    <div className="App">
        <h1>Dashboard</h1>
        <SentimentAnalysis />
    </div>
  );
}

export default App;