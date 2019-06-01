import React from 'react';
import Label from '../Label';
import Input from '../Input';
import Button from '../Buttons/saveForm';

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
        company[e.target.id] = e.target.value;
        let address = this.state.address;
        address[e.target.id] = e.target.value;
        this.setState({
            company: company,
            address:address
        });
    }

    resetState() {
        let company={
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
        this.setState({
          company: company,
          address:address
        });
      }

    handleSubmit = (event) => {
        
        console.log("Form submetido.");
        
        event.preventDefault();

        if (this.validate()) {
            let cliente = this.state.cliente;
            
            let	storage	= window.localStorage;

            let listaClientes = JSON.parse(localStorage.getItem('clientes')) || []; 
            
            listaClientes.push(cliente);
            
            storage.setItem("clientes", JSON.stringify(listaClientes));

            this.resetState();
        }
    }
    
    render(){
        return(
            <div>
                <div class="">
                    <Label id="nameCompany" label="Nome da Companhia"/>
                    <Input id="nameCompany" type="text" placeholder="Digite o nome da companhia" />
                </div>
                <div class="">
                    <Label id="mainNumber" label="Telefone Principal"/>
                    <Input id="mainNumber" type="text" placeholder=" Digite o telefone principal" />
                </div>
                <div class="">
                    <Label id="whatsappNumber" label="Numero WhatsApp"/>
                    <Input id="whatsappNumber" type="text" placeholder=" Digite o WhatsApp da Empresa" />
                </div>
                <div class="">
                    <Label id="logo" label="Insirá a logo da compania"/>
                    <Input id="logo" type="file" placeholder="Logo da Companhia" />
                </div>
                <div class="">
                    <Label id="CEP" label="Endereço"/>
                </div>
                <div class="">
                    <Label id="CEP" label="CEP"/>
                    <Input id="CEP" type="text" placeholder="Digite o CEP da companhia" />
                </div>
                <div class="">
                    <Label id="state" label="Estado"/>
                    <Input id="state" type="text" placeholder="Digite o Estado da companhia" />
                </div>
                <div class="">
                    <Label id="city" label="Cidade"/>
                    <Input id="city" type="text" placeholder="Digite a cidade da companhia" />
                </div>
                <div class="">
                    <Label id="neighborhood" label="Bairro"/>
                    <Input id="neighborhood" type="text" placeholder="Digite o bairro da companhia" />
                </div>
                <div class="">
                    <Label id="number" label="Numero"/>
                    <Input id="number" type="text" placeholder="Digite o numero da companhia" />
                </div>
                <div class="">
                    <Label id="complement" label="Complemento"/>
                    <Input id="complement" type="text" placeholder="Digite o complemento da companhia" />
                </div>
                <div class="">
                    <Button text="Cadastrar Companhia"/>
                </div>
            </div>
        );

    }
}
export default FormRegisterNewCompany;
