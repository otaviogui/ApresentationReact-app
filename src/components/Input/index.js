import React from 'react';
export default function Input(props){
    let input_style ={
        width: 100,
        height:20,
        backgroundColor:'red'
    }
    let input_search_style = {
        width:400,
        borderRadius:10
    }
    let search = props.search;
    return(
        <input style={search ===true
            ?
           input_search_style
           :
           input_style} 
           type={props.type} 
           id={props.id} 
           placeholder={props.placeholder} 
           search={props.search}/>
    );
}