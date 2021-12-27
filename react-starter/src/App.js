import React from 'react';
//import components
//import Tweet from './component/Tweet'
import CreateTweet from './component/CreateTweet';
import TweetList from './component/TweetList';

function App() {
  //here is the place to write normal JS
  const name = 'alex';
  const message = "i am a message"
  return (
    <div className="App">
      <h1>Hello React</h1>
      <CreateTweet />
      <TweetList name={name} message={message}/>
      
    </div>
  );
}

export default App;
