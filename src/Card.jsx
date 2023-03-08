import './App.css';
import {useState} from 'react';
import React from 'react';
import * as ReactDOM from 'react-dom';
import {render} from 'react-dom';

const Card = (props) => {
        return (
            <div className="card-holder">
                 <div className="flashcard">
                     <div className="frontSide">
                         <p>{props.question}</p>
                     </div>

                 </div>
            </div>
         )
}
export default Card;