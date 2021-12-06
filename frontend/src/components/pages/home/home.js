import React from "react";
import {Carousel, Container} from "react-bootstrap";
import Productos from "../../productos/productos";
import ListarProductos from "../../productos/listarProductos";
import "./home.css";

export default class Home extends React.Component {
    render() {
        return (
            <div>
            <div>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src="assets\\1.jpg"
                        width="20%"
                        height="900"
                        alt="Firs slide" />
                    <Carousel.Caption>
                        <h2>Productos Naturales</h2>
                        <p>Conozca nuestros productos 100% naturales </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src="assets\\maiz.jpg" width="20%" height="900" alt="Second slide" />{" "}
                    <Carousel.Caption>
                        <h2>Del campo a la Web</h2>
                        <p>Conoce nuestros productos frescos </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src="assets\\cafe.jpg" width="20%" height="900" alt="Second slide" />{" "}
                    <Carousel.Caption>
                        <h2>Del campo a la mesa</h2>
                        <p>Del campo con amor </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            </div>
            
            <Container className='container'>
            <ListarProductos>


            </ListarProductos>

            </Container>

        </div>

   

        

             
        );

        
    }

}
    

