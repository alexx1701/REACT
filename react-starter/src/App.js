import React, {useState, useEffect } from 'react';

//import components
//import Tweet from './component/Tweet'
import CreateTweet from './component/CreateTweet';
import TweetList from './component/TweetList';

function App() {

  
  //here is the place to write normal JS
  const [name, setName] = useState('alex');
  const [tweets, setTweets] = useState([]);
  const [textInput, setTextInput] = useState("");
  
  useEffect(() => {
    console.log('yay');
  }, [textInput]);

  //const sayHelloHandler = () => {
   // setName('not alex')
    //setName is a state function that changes the variable name
  //}

  return (
    <div className="App">
      
      <CreateTweet 
      textInput={textInput} 
      setTextInput={setTextInput}
      tweets = {tweets}
      setTweets={setTweets}
      />
      <TweetList 
      name={name} 
      tweets={tweets}
      setTweets={setTweets}/>
      
    </div>
  );
}

export default App;
