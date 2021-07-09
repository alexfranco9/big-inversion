import React, { useState } from 'react';

const buttonStyle = {
    backgroundColor: "#1a75ff",
    color: "white",
    padding: "10px",
    borderRadius: "10px"
}

const PersonCard = props => {

    const [age, setAge] = useState(props.age);
    const birthDay = () => setAge(age + 1)
    return(
        <div>
            <h1> { props.lastName }, { props.firstName } </h1>
            <p>Age: { age } </p>
            <p>Hair Color: { props.hairColor } </p>
            <button onClick={birthDay} style={buttonStyle} > Birthday Button for { props.firstName } </button>
        </div>
    )
}


export default PersonCard;