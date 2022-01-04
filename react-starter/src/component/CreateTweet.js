import React, {useState} from 'react';

const CreateTweet = () => {
    //state 
    const [textInput, setTextInput] = useState("");
    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    };
return(
    <form>
    <textarea onChange={userInputHandler}name="" id="" cols="50" rows="5"></textarea>
    <button>Submit</button>
    <h1>{textInput}</h1>
    </form>
    
);

};


export default CreateTweet;