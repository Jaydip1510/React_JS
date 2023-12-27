import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Blog() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6} md={4}>
           <img src="./public/3-nature-wallpaper.mountain.jpg" />
          </Col>
          <Col xs={6} md={4}>
          <img src="./public/3-nature-wallpaper.mountain.jpg" />
          </Col>
          <Col xs={6} md={4}>
          <img src="./public/3-nature-wallpaper.mountain.jpg" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Blog
