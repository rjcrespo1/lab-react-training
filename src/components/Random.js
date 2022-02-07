import React from 'react';

const Random = (props) => {
    const randomNum = Math.floor(Math.random() * props.max + props.min);

    return (
        <div>
            <h4>Random value between {props.min} and {props.max} = {randomNum}</h4>
        </div>
    )
}

export default Random;