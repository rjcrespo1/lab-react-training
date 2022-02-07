import React from 'react';
import visaCard from '../assets/images/visa.png';
import masterCard from '../assets/images/master-card.svg'

const CreditCard = (props) => {
    let cardType;
    if(props.type === 'Visa') cardType = visaCard;
    if(props.type === 'Master Card') cardType = masterCard;

    const cardStyle = {
        backgroundColor: props.bgColor,
        cardColor: props.color
    };

    const lastFour = props.number.slice(-4); 

    return (
        <div className='cards' style={cardStyle}>
            <img id='cardLogo' src={cardType} alt='card type' width={40}></img>
            <p>●●●● ●●●● ●●●● {lastFour}</p>
        </div>
    )
}

export default CreditCard;