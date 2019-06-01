import React from "react";
import Input from "../Input";

class SearcCompany extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            search:""
        }
    }


    render(){
        return(
            <div>
                <Input id="search" placeholder="Pesquise pelo o nome "/><i class="">ICONE</i>
            </div>
        );
    }
}