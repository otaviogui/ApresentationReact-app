import React from 'react';
export default function Input(props){
    return(
        <input 
           type={props.type} 
           id={props.id} 
           placeholder={props.placeholder} 
           search={props.search}
           onChange={props.onChange}/>
    );
}