import React from 'react';

export default function Label(props){
    return(
        <label for={props.id}>{props.label}</label>
    );
}