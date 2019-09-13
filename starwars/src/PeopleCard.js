import React from "react";
import styled from 'styled-components';
import './App.css';

const WhiteH1 = styled.h1`
color: white;
font-size: 1.5 rem;
`;
const PeopleCard = props => {
    console.log(props)

    return (
        <div key={props.index}>
            <WhiteH1> Character Name: {props.name}</WhiteH1>
            <p> Height: {props.height}"</p>
        </div>
    )
}

export default PeopleCard