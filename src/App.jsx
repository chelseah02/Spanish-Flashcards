import { useState } from 'react'
import { useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import react from 'react';
import Card from './components/Card';
import Input from './components/Input';

function App() {

  // Create array of dictionaries for vocab list
  const vocab = [
  
    {
      index: 0,
      question: "Amusement park",
      answer: "Parque de diversiones"
    },
    {
      index: 1,
      question: "Bowling alley",
      answer: "Bolera"
    },
    {
      index: 2,
      question: "Camping area",
      answer: "Zona para acampar"
  },
    {
      index: 3,
      question: "Church",
      answer: "Iglesia"
  },
    {
      index: 4,
      question: "Library",
      answer: "Biblioteca"
  },
    {
      index: 5,
      question: "Clothing",
      answer: "Ropa"
  },
    {
      index: 6,
      question: "Dress",
      answer: "Vestido"
  },
    {
      index: 7,
      question: "Hoodie",
      answer: "Sudadera con capucha"
  },
    {
      index: 8,
      question: "Leggings",
      answer: "Mallas"
  },
    {
      index: 9,
      question: "Shoes",
      answer: "Zapatos"
    }

  ]; // end vocab array of dictionaries

  /* All State variables */
  // State variables and methods for next and previous
  const [cardIndex, setIndex] = useState(0);
  const handleNext = () => {
      setIndex(cardIndex + 1);
  }
  const handlePrev = () => {
      setIndex(cardIndex - 1);
  }
  // State variables and methods for input field
  const [userInput, setUserInput] = useState('');
  const [isBackgroundGreen, setBackground] = useState(0);
  const handleChange = (props) => {
    setUserInput({userInput: props.value})
    console.log(userInput);
    if (userInput == props.correctAnswer) {
      setBackground(isBackgroundGreen + 1) // so background is green
    }
    else if (userInput == '') {
      setBackground(isBackgroundGreen)
    }
    else {
      setBackground(isBackgroundGreen - 1) // background is red
    }
  }

  return (
    <div className="App">
      <h2 className = "title"> Learn Spanish! </h2>
      <h4> No hablo Español? Start learning here! </h4>
      <h5> Number of Cards: 10 </h5>
      <div className='cards'>
        <Card question={vocab[cardIndex]["question"]} answer={vocab[cardIndex]["answer"]}></Card>
      </div>
      <div className='guess'>Guess: 
      <input className="input" type="text" 
        value={userInput} 
        placeholder="Enter your guess here"
        correctAnswer={vocab[cardIndex]["answer"]}
        onChange= {handleChange}
      />
      <button type='submit' className='submit-btn'>Submit</button>
    </div>
      <br></br>
      <button className='next' type='next' onClick={handlePrev}>🡨</button>
      <button className='next' type='next' onClick={handleNext}>🡪</button>
    </div>
  )
}

export default App
