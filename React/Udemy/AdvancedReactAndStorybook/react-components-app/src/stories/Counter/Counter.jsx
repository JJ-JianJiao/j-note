import {useState} from 'react';
import PropTypes from 'prop-types';
import { Button } from "../Button";
import classNames from "classnames";

export default function Counter({color}){
    let [count,setCount] = useState(0);
    const handleOnClick = (e) =>{
        if(e==='ADD'){
            setCount(count+1);
            return;
        }
        setCount(count-1)
    }
    return(
        <>
            <span style={{color}}>Counter: {count}</span>
            <br/>
            <Button label='+' onClick={()=>handleOnClick('ADD')} backgroundColor={color}/>
            <Button label='-' onClick={()=>handleOnClick('SUB')} backgroundColor={color}/>
        </>
    );
}

Counter.propTypes = {
    color: PropTypes.string,
}
