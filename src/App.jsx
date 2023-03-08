import { useState } from 'react'
import { useEffect } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import react from 'react';
import Card from './Card';

function App() {

  // Create array of dictionaries for vocab list
  /*const vocab = [
  
    {
      index: 1,
      question: "Amusement park",
      answer: "Parque de diversiones"
    },
    {
      index: 2,
      question: "Bowling alley",
      answer: "Bolera"
    },
    {
      index: 3,
      question: "Camping area",
      answer: "Zona para acampar"
  },
    {
      index: 4,
      question: "Church",
      answer: "Iglesia"
  },
    {
      index: 5,
      question: "Library",
      answer: "Biblioteca"
  },
    {
      index: 6,
      question: "Clothing",
      answer: "Ropa"
  },
    {
      index: 7,
      question: "Dress",
      answer: "Vestido"
  },
    {
      index: 8,
      question: "Hoodie",
      answer: "Sudadera con capucha"
  },
    {
      index: 9,
      question: "Leggings",
      answer: "Mallas"
  },
    {
      index: 10,
      question: "Shoes",
      answer: "Zapatos"
    }

  ]; // end vocab array of dictionaries
 /* const KEY = 'vocabcards';
  function getFlashcards() {
    const cards = localStorage.getItem(KEY);
    return JSON.parse(cards) || vocab;
  }
  function outputCards () {
    const [vocabReturned] = useState(getFlashcards);
    useEffect(() => localStorage.setItem(KEY, JSON.stringify(vocabReturned)), [vocabReturned]);

    return [vocabReturned];
  }

  const allVocab = outputCards();
  //const totalCards = allVocab.length;
  const [currentIndex, setIndex] = useState(1);
  let getNextCard = () => {
    setIndex(currentIndex + 1);
  }; */
  return (
    <div className="App">
      <h2 className = "title"> Learn Spanish! </h2>
      <h4> No hablo Español? Start learning here! </h4>
      <h5> Number of Cards: 10 </h5>
      <div className='cards'>
        <Card question="Hello" answer="Hola"></Card>
      </div>
      <button className='next' type='next'>➜</button>
    </div>
  )
}

export default App
