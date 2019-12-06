import React, {useState} from 'react';
import Display from './display';


const DashBoard = props => {
    const [values, setValues] = useState({
        hits: 0,
        balls: 0,
        strikes: 0,
        foul: 0
    });
        
    const handleClick = (e) => {
        let temp = 0;
        
        switch(e.target.innerText){
            case 'strike':
                temp = values.strikes + 1;
                if(temp >= 3){
                    setValues({...values, balls: 0, strikes: 0})
                    break;
                }
                setValues({...values, strikes: temp});
                break;
            case 'ball':
                temp = values.balls + 1;
                if(temp >= 4){
                    setValues({...values, balls: 0, strikes: 0})
                    break;
                }
                setValues({...values, balls: temp});
                break;
            case 'foul':
                    if (values.strikes <= 1) {
                        temp = values.strikes + 1
                    setValues({...values, strikes: temp });
                    break;
                    }
                    break;
            case 'hit':
                    temp = values.hits + 1;
                setValues({...values, hits: temp, balls: 0, strikes: 0});
                break;
            default:
                break;
        }
    }

    return(
        <>
        <div className="dashbord-wraper">
            <button onClick={handleClick}>strike</button>
            <button onClick={handleClick}>ball</button>
            <button onClick={handleClick}>foul</button>
            <button onClick={handleClick}>hit</button>
        </div>
        <Display data={values} />
        </>
    );

}

export default DashBoard