import React from "react";
import { MdSearch } from "react-icons/md";
import {Container, Row, Col, FormGroup, Input, Button, Alert} from 'reactstrap';

class SearchCompany extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            search_company:'', 
            validation:{
                search:true,
                errorMenssages:[]
            }
        }
    }

    validateSearch(){
        let search = this.state.search_company;
        if(search.length>=3){
            return true;
        }else{
            return false;
        }
    }
    validate(){
        let validation = this.state.validation;
        validation.search_company = this.validateSearch();
        validation.errorMenssages = [];

        if(!validation.search_company){
            validation.errorMenssages.push("Para realizar a pesquisa deve conter 3 caracteres ou mais");
        }
        this.setState({
            validation: validation
        })
        return validation.errorMenssages.length === 0;
    }
    handlerInputChange = (e) => {
        let search_company = this.state.search_company;
        let value = e.target.value;
        search_company = value;
        this.setState({
            search_company:search_company
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(this.validate()){
            let words = JSON.parse(localStorage.getItem("companhias"))||[];
        }
    }

    render(){
        const validation = this.state.validation;
        return(
            <Container>
                <Row>
                    
                   
                        {validation.errorMenssages.map((error,index)=>(<p key={index}>{error}</p>))}
                   
                
                    <Col sm={{size:8, offset:2}}>
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Input id="search_company" placeholder="Pesquise pelo o nome " onChange={this.handlerInputChange} search={true}/>
                                <MdSearch />
                            </FormGroup>
                            <Button>Pesquisar</Button>
                        </form>
                    </Col>
                
                </Row>
            </Container>
        );
    }
}
export default SearchCompany;