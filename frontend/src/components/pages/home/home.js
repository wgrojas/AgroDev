import React from "react";
import {Carousel, Card, Button, Container, Row} from "react-bootstrap";
import "./home.css";

export default class Home extends React.Component {
    render() {
        return (<>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src="assets\\1.jpg"
                        width="20%"
                        height="900"
                        alt="Firs slide"/>
                    <Carousel.Caption>
                        <h2>Productos Naturales</h2>
                        <p>Conozca nuestros productos </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src="assets\\maiz.jpg" width="20%" height="900" alt="Second slide"/>{" "}
                    <Carousel.Caption>
                        <h2>Del campo a la web</h2>
                        <p>Campo con todo el amor</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src="assets\\cafe.jpg" width="20%" height="900" alt="Second slide"/>{" "}
                    <Carousel.Caption>
                        <h2>Del campo a la web</h2>
                        <p>Campo con todo el amor</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container>
                <Row>
                    <h2>Productos Destacados</h2>
                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src="https://okdiario.com/img/2019/07/17/los-curiosos-beneficios-y-propiedades-de-las-hojas-de-platano-655x368.jpg" />
                        <Card.Body>
                            <Card.Title>Plátano</Card.Title>
                            
                            <Button variant="primary">Ver más...</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src="https://dam.cocinafacil.com.mx/wp-content/uploads/2020/07/yuca.jpg" />
                        <Card.Body>
                            <Card.Title>Yuca</Card.Title>
                            
                            <Button variant="primary">Ver más...</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src="https://www.rionegro.com.ar/wp-content/uploads/2021/06/leche.jpg" />
                        <Card.Body>
                            <Card.Title>Leche</Card.Title>
                            
                            <Button variant="primary">Ver más...</Button>
                        </Card.Body>
                    </Card>
                </Row>
            </Container></>
        );
    }
}
