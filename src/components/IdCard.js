import React from 'react';
import profile from '../assets/images/maxence-glasses.png'

const IdCard = (props) => {
    return (
        <div>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Birth date: {props.birth.toISOString()}</p>
            <img src={profile} alt='profile pic'></img>
        </div>
    )
}

export default IdCard;