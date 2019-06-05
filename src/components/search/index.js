import React from "react";
import Input from "../Input";
import { MdSearch } from "react-icons/md";

class SearchCompany extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            search_company:''
        }
    }
    handlerInputChange = (e) => {
        let search_company = this.state.search_company;
        let id = e.target.id;
        let value = e.target.value;
        search_company = value;
        this.setState({
            search_company:search_company
        });


        console.log("Pesquisa indo pelo handler")
    }

    getCompany =(e)=>{
       
    }

    handleSubmit = (event) => {
        
        console.log("Form submetido.");
        
        event.preventDefault();
        let search_company = this.state.search_company;
        if(search_company.length >= 3){
            
        let words = JSON.parse(localStorage.getItem("companhias"))||[];

        console.log('retornou a pesquisa', words);
        }else{
            console.log("nao retornou a pesquisa")
        }
        
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Input id="search_company" placeholder="Pesquise pelo o nome " onChange={this.handlerInputChange} search={true}/>
                    <MdSearch />
                    <button>Pesquisar</button>
                </form>
            </div>
        );
    }
}
export default SearchCompany;