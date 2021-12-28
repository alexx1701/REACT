import React from 'react';
//import components
//import Tweet from './component/Tweet'
//import CreateTweet from './component/CreateTweet';
//import TweetList from './component/TweetList';

function App() {
  //here is the place to write normal JS
  const name = 'alex';
  const message = "i am a message"

  const sayHelloHandler = () => {
    console.log('Hello');
  }

  return (
    <div className="App">
      
      {/* <CreateTweet />
      <TweetList name={name} message={message}/>*/}
      <h1>Hello React</h1>
      <button onClick={sayHelloHandler}>Click</button>
    </div>
  );
}

export default App;
