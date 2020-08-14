import React, { useState } from 'react';
import './App.css';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

// Bot Setup
// const SlackBot = require('slackbots');
// const axios = require('axios');

// // Store botToken elsewhere
// const botToken = 
// const bot = new SlackBot( {
//   token: "xoxp-1304356200724-1298376052851-1304368205076-130d434d4e8b65918aa01dc4dd7efc17",
//   name: "SentiVenti",
// })

function App() {
  // Managing Form Data
  // const [formData, setFormData] = useState(initialFormState);

  // WMethod that takes the string input for url 
  // Note: need validation checking to see if it's a valid url
  // async function submitLink() {
  //   //stub;
  // }

  // // Method that fetches channels associated with the given Workspace
  // async function fetchChannels() {
  //   //stub;
  // }

  // Method
  viewChannelSelection = () => {
    this.setState( {

    })
  }

  return (
    <div className="App">
        <h1>Load Chennel Selection</h1>
        <button className="btn" onClick={viewChannelSelection}>View Channel Selection</button>
        <h1>Load Dashboard</h1>
        <button className="btn" onClick={viewDashboard}></button>
    {/* 
      <h1>Read the Room</h1>
      {/* Input 
      <input
      />
    */}
      {/* <a href="https://slack.com/oauth/v2/authorize?scope=incoming-webhook&client_id=1304356200724.1310798496561">
        <img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" />
      </a> */}
      {/* <button onClick={ submitLink }>Submit</button> */}
      {/* <AmplifySignOut /> */}
    </div>
  );
}

// export default withAuthenticator(App);
export default App;

/*
Design

Landing Page
Load ChannelSelection
Depending on ChannelSelection, load a ver. of Dashboard.
*/
