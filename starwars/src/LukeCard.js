import React from "react";
import styled from 'styled-components';
import App from "./App"

const LukeCard = props => {
    console.log(props)

    return (
        <div key={props[0]}>
<h1> Character Name: {props.name}</h1>

</div>
    )
}


export default LukeCard