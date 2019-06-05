import React from 'react';
import Label from '../Label';
import Input from '../Input';
import {Button} from 'reactstrap';
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
        console.log("Salvo o estado aqui")
    }

   
    handleSubmit = (event) => {
        
        console.log("Form submetido.");
        
        event.preventDefault();
            let companhia = this.state.company ;
            let address = this.state.address;
            let	storage	= window.localStorage;

            console.log(storage);

            let listaClientes = JSON.parse(localStorage.getItem('companhias')) || []; 
            
            listaClientes.push(companhia, address);
            
            
            storage.setItem("companhias", JSON.stringify(listaClientes));

            console.log("salvou no formulario submetido")
        
    }
    
    render(){
        return(
            <div >
                <form onSubmit={this.handleSubmit}>
                    <div class="">
                        <Label id="name" label="Nome da Companhia"/>
                        <Input id="name" type="text" placeholder="Digite o nome da companhia"  onChange={this.handlerInputChange}/>
                    </div>
                    <div class="">
                        <Label id="mainNumber" label="Telefone Principal"/>
                        <Input id="mainNumber" type="text" placeholder=" Digite o telefone principal"  onChange={this.handlerInputChange}/>
                    </div>
                    <div class="">
                        <Label id="whatsappNumber" label="Numero WhatsApp"/>
                        <Input id="whatsappNumber" type="text" placeholder=" Digite o WhatsApp da Empresa"  onChange={this.handlerInputChange}/>
                    </div>
                    <div class="">
                        <Label id="imageLogo" label="Insirá a logo da compania"/>
                        <Input id="imageLogo" type="file" placeholder="Logo da Companhia"  onChange={this.handlerInputChange}/>
                    </div>
                    <div class="">
                        <Label id="CEP" label="Endereço"/>
                    </div>
                    <div class="">
                        <Label id="CEP" label="CEP"/>
                        <Input id="CEP" type="text" placeholder="Digite o CEP da companhia"  onChange={this.handlerInputChange}/>
                    </div>
                    <div class="">
                        <Label id="state" label="Estado"/>
                        <Input id="state" type="text" placeholder="Digite o Estado da companhia"  onChange={this.handlerInputChange}/>
                    </div>
                    <div class="">
                        <Label id="city" label="Cidade"/>
                        <Input id="city" type="text" placeholder="Digite a cidade da companhia"  onChange={this.handlerInputChange}/>
                    </div>
                    <div class="">
                        <Label id="neighborhood" label="Bairro"/>
                        <Input id="neighborhood" type="text" placeholder="Digite o bairro da companhia"  onChange={this.handlerInputChange}/>
                    </div>
                    <div class="">
                        <Label id="number" label="Numero"/>
                        <Input id="number" type="text" placeholder="Digite o numero da companhia"  onChange={this.handlerInputChange}/>
                    </div>
                    <div class="">
                        <Label id="complement" label="Complemento"/>
                        <Input id="complement" type="text" placeholder="Digite o complemento da companhia"  onChange={this.handlerInputChange}/>
                    </div>
                    <div class="">
                        
                        <Button text="Cadastrar Companhia">Butoon </Button>
                    </div>
                </form>
            </div>
        );

    }
}
export default FormRegisterNewCompany;
