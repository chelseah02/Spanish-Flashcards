import '../App.css';
import {Component, useState} from 'react';
import React from 'react';

const Input = () => {
    // State variables and methods for input field
    const [userInput, setUserInput] = useState('');
    <div className='guess'>Guess: 
        <input type="text" value={userInput} 
          onChange= {
            (e) => setUserInput(e.target.value)
          }
        />
        <button type='submit' className='submit-btn'>Submit</button>
    </div>

}
export default Input;