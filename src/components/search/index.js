import React from "react";
import Input from "../Input";
import { MdSearch } from "react-icons/md";

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
                <Input id="search" placeholder="Pesquise pelo o nome " search={true}/>
                <MdSearch />
            </div>
        );
    }
}
export default SearcCompany;