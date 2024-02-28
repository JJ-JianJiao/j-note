import {useState} from 'react';
import { FaStar } from "react-icons/fa";
import PropTypes from 'prop-types';
import "./Rating.css";

const MyStar = ({selected, onSelect = (f) =>f }) => {
    console.log('test');
    console.log('FaStar',FaStar);
    <FaStar className = "star" color = {selected? "#FFCB45":"#F2F2F2"} onClick = {onSelect}
    />
};

const Rating = ({number = 5}) =>{
    let [selected, setSelected] = useState(-1);
    return [...Array(number)].map((n,i)=>(
        <MyStar key={i} onSelect={()=> setSelected(i+1)} selected={i<selected} />
    ));
};

Rating.propTypes = {
    number: PropTypes.number,
}

export default Rating;
