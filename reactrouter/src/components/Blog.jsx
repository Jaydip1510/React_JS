import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import i1 from './image/3-nature-wallpaper-mountain.jpg';
import i2 from './image/connectwithnature.jpg';
import i3 from './image/wallpaper-nature-pictures.jpg';

function Blog() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6} md={4}>
           <img src={i1} style={{height:200,width:360}} />
          </Col>
          <Col xs={6} md={4}>
          <img src={i2} style={{height:200,width:360}} />
          </Col>
          <Col xs={6} md={4}>
          <img src={i3} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Blog
