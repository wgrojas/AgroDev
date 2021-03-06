import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Row } from "react-bootstrap";
// import {listaProductos} from "./listaProductos.json";
import Productos from "../productos/productos"



export default class ListarProductos extends Component {
    constructor(){
      super()
      this.state={
        titulo:"",
        imagen:"",
        descripcion:"",
        precio:"",
        stock:"",
        categoria:"",
        listaProductos:[]
      };
  
    }
    componentDidMount(){
        this.fetchProductos();
    }

    fetchProductos(){
        fetch('https://back-agrodev.herokuapp.com/productos')
        .then(res => res.json())
        .then(data => {
            this.setState({listaProductos:data})
            console.log(this.state.listaProductos)

        })
        

    }
    render(){
       
      var arrayComponente= this.state.listaProductos.map(
        (listaProductos,i) =>{
          return(
           
  
            <Productos
             
            Key={i}
            titulo={listaProductos.titulo}
            imagen={listaProductos.imagen}
            descripcion={listaProductos.descripcion}
            precio={listaProductos.precio}
            stock={listaProductos.stock}
            categoria={listaProductos.categoria}
            />
          )
        }
      )

      return (
        

    
       <Container>
         
         <h2 style={{ marginTop: 120, fontSize:50 }}><b>Nuestros Productos</b></h2>
         
           <Row>
         
               {arrayComponente}
               
           </Row>
    
        </Container>
    
      
      );

      }
    }
    
    
   
    