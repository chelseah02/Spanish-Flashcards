import '../App.css';
import {useState} from 'react';
import React from 'react';
import * as ReactDOM from 'react-dom';
import {render} from 'react-dom';

const Card = (props) => {
    const [front, showFront] = useState(1);
    const handleClick = () => {
        {front ? showFront(front - 1) : showFront(front + 1)};
    }
    return (
        <div className="flashcard" onClick={handleClick}>
            <div>{front ? <p> {props.question} </p> : <p>{props.answer}</p>}</div>
        </div>
    );
}
export default Card;