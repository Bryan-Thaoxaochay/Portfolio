import React from 'react';
import { Col, Row, Container } from '../components/Grid';

function Contact() {
    return (
        <Container fluid>
            <Row>
                <Col size='md-12'>
                    <h1>Contact Me</h1>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col size='md-6'>
                    <strong>EMAIL</strong> <p>bthaoxaochay@gmail.com</p>
                    <strong>PHONE</strong> <p>(763) 228-7187</p>
                </Col>
            </Row>
        </Container>
    )
};

export default Contact;