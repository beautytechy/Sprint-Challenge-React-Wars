import React from "react";
import styled from 'styled-components';
import App from "./App"

const PeopleCard = props => {
    console.log(props)

    return (
        <div key={props.index}>
<h1> Character Name: {props.name}</h1>

</div>
    )
}


export default PeopleCard