import React, {useState} from 'react';

//import components
//import Tweet from './component/Tweet'
import CreateTweet from './component/CreateTweet';
import TweetList from './component/TweetList';

function App() {
  //here is the place to write normal JS
  const [name, setName] = useState('alex');
  const message = 'hi'
  const sayHelloHandler = () => {
    setName('not alex')
    //setName is a state function that changes the variable name
  }

  return (
    <div className="App">
      
      <CreateTweet />
      <TweetList name={name} message={message}/>
      
    </div>
  );
}

export default App;
