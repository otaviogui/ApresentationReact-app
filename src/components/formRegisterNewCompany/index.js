import React from 'react';
import {Button, Container, Row, Col , Input, FormGroup, Label} from 'reactstrap';

class FormRegisterNewCompany extends React.Component{
    constructor(props){
        super(props);
            this.state ={
                company:{
                    name:"",
                    mainNumber:"",
                    whatsappNumber:"",
                    imageLogo:"",
                }
                , address:{
                    CEP:"",
                    state:"",
                    city:"",
                    neighborhood:"",
                    number:"",
                    complement:""
                },
                validation:{
                    name:true,
                    mainNumber:true,
                    errorMenssages:[]
                }
                
            }
    }

    handlerInputChange = (e) => {
        let company = this.state.company;
        let address = this.state.address;
        let id = e.target.id;
        let value = e.target.value;
        company[id] = value;
        address[id] = value;
        this.setState({
            company: company,
            address:address
        });
    }
    validateNome(){
        let nome = this.state.company.name;
        if(typeof nome ==="string" && nome.length !==0 && nome.length<=255){
            return true;
        }
        return false;
    }
    validateTelefone(){
        let telefone = this.state.company.mainNumber;
        let regExpress = /^[0-9]/gi;
        return regExpress.test(telefone);
    }
    validate(){
        let validation = this.state.validation;
        validation.name = this.validateNome();
        validation.mainNumber = this.validateTelefone();
        validation.errorMenssages = [];

        if(!validation.name){
            validation.errorMenssages.push("Nome Invalido");
        }
        if(!validation.mainNumber){
            validation.errorMenssages.push("Telefone Invalido! O campo só aceita numero");
        }
        this.setState({
            validation: validation
        })
        return validation.errorMenssages.length === 0;
    }
    resetState(){
        let company ={
            name:"",
            mainNumber:"",
            whatsappNumber:"",
            imageLogo:"",
        }
        let address ={
            CEP:"",
            state:"",
            city:"",
            neighborhood:"",
            number:"",
            complement:""
        }
        let validation ={
            name:true,
            mainNumber:true,
            errorMenssages:[]
        }
        this.setState({
            company:company,
            address:address,
            validation:validation
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(this.validate()){
            let companhia = this.state.company ;
            let	storage	= window.localStorage;
            let listaCompanhias = JSON.parse(localStorage.getItem('companhias')) || []; 
            listaCompanhias.push(companhia);
            storage.setItem("companhias", JSON.stringify(listaCompanhias));
            this.resetState();
        }
    }
    
    render(){
        const validation = this.state.validation;
        return(
            <Container >
                <Row>
                    <Col>
                        {validation.errorMenssages.map((error,index)=>(
                            <p key={index}>{error}</p>
                        ))}
                    </Col>
                </Row>
                <Row>
                    <Col sm={{size:8, offset:2}}>
                        
                        <form onSubmit={this.handleSubmit}>
                            <legend>Cadastro de Nova Empresa</legend>
                            <FormGroup>
                                <Label id="name" >Nome da Companhia</Label>
                                <Input id="name" type="text" placeholder="Digite o nome da companhia"  onChange={this.handlerInputChange} value={this.state.company.name}/>
                            </FormGroup>
                            <FormGroup>
                                <Label id="mainNumber" >Telefone Principal</Label>
                                <Input id="mainNumber" type="text" placeholder=" Digite o telefone principal"  onChange={this.handlerInputChange} value={this.state.company.mainNumber}/>
                            </FormGroup>
                            <FormGroup>
                                <Label id="whatsappNumber" >Numero WhatsApp</Label>
                               <Input id="whatsappNumber" type="text" placeholder=" Digite o WhatsApp da Empresa"  onChange={this.handlerInputChange}  value={this.state.company.whatsappNumber}/>
                            </FormGroup>
                            <FormGroup>
                                <Label id="imageLogo" >Insirá a logo da compania</Label>
                                <Input id="imageLogo" type="file" placeholder="Logo da Companhia"  onChange={this.handlerInputChange} value={this.state.company.imageLogo}/>
                            </FormGroup>
                            <FormGroup>
                                <Label id="CEP" >Endereço</Label>
                            </FormGroup>
                            <FormGroup>
                                <Label id="CEP" >CEP</Label>
                                <Input id="CEP" type="text" placeholder="Digite o CEP da companhia"  onChange={this.handlerInputChange} value={this.state.address.CEP}/>
                            </FormGroup>
                            <FormGroup>
                                <Label id="state" >Estado</Label>
                                <Input id="state" type="text" placeholder="Digite o Estado da companhia"  onChange={this.handlerInputChange} value={this.state.address.state}/>
                            </FormGroup>
                            <FormGroup>
                                <Label id="city" >Cidade</Label>
                                <Input id="city" type="text" placeholder="Digite a cidade da companhia"  onChange={this.handlerInputChange} value={this.state.address.city}/>
                            </FormGroup>
                            <FormGroup>
                                <Label id="neighborhood" >Bairro</Label>
                                <Input id="neighborhood" type="text" placeholder="Digite o bairro da companhia"  onChange={this.handlerInputChange} value={this.state.address.neighborhood}/>
                            </FormGroup>
                            <FormGroup>
                                <Label id="number" >Numero</Label>
                                <Input id="number" type="text" placeholder="Digite o numero da companhia"  onChange={this.handlerInputChange} value={this.state.address.number}/>
                            </FormGroup>
                            <FormGroup>
                                <Label id="complement" >Complemento</Label>
                                <Input id="complement" type="text" placeholder="Digite o complemento da companhia"  onChange={this.handlerInputChange} value={this.state.address.complement}/>
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary">Cadastrar Companhia </Button>
                            </FormGroup>
                        </form>
                    </Col>
                </Row>
            </Container>
        );

    }
}
export default FormRegisterNewCompany;