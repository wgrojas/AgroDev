import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import "./home.css";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="assets\\1.jpg"
              width="20%"
              height="900"
              alt="Firs slide"
            />
            <Carousel.Caption>
              <h2>Productos Naturales</h2>
              <p>Conozca nuestros productos </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="assets\\maiz.jpg"
              width="20%"
              height="900"
              alt="Second slide"
            />{" "}
            <Carousel.Caption>
              <h2>Del campo a la mesa</h2>
              <p>Campo con todo el amor</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="assets\\cafe.jpg"
              width="20%"
              height="900"
              alt="Second slide"
            />{" "}
            <Carousel.Caption>
              <h2>Del campo a la mesa</h2>
              <p>Campo con todo el amor</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Carousel>
            <Carousel.Item>

            </Carousel.Item>
        </Carousel>


        
      </>
    );
  }
}
