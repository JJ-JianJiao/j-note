import React, { useState, useTransition } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StartRating from "./StartRating";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StartRating maxRating={5} />
    <StartRating maxRating={5} messages={ ["Terrible", "Bad", "Okay", "Good", "Amazing"]} defaultRating={2}/>
    <StartRating maxRating={4} messages={ ["Bad", "Okay", "Good", "Amazing"]} size={24} color="red"  defaultRating={3}/>
    <Test /> */}
  </React.StrictMode>
);

function Test(){
  const [ratingMovie,setRatingMovie] = useState(0);
  return <div>
    <StartRating maxRating={15} color="blue" onSetRating={setRatingMovie}/>
    <p>This movie was rated {ratingMovie} stars</p>
  </div>
}