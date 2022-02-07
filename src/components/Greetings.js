import React from 'react';

const Greetings = (props) => {
    let greet;
    if(props.lang === 'de') {
        greet = 'Hallo'
    }
    if(props.lang === 'fr') {
        greet = 'Bonjour'
    }
    if(props.lang === 'es') {
        greet = 'Hola'
    } else {
        greet = 'Hello'
    }
    return (
        <h2>{greet} {props.children}</h2>
    )
}

export default Greetings;