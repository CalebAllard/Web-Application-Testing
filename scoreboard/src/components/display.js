import React from 'react';

const Display = props => {



    return (
        <> 
            <div>
                <p>{`Strikes: ${props.data.strikes}`}</p>
                <p>{`Balls: ${props.data.balls}`}</p>
                
                <p>{`Hits: ${props.data.hits}`}</p>

            </div>
        </>

    );
}

export default Display;