import React from 'react';
import { Col, Row, Container } from '../components/Grid';
import profilePic from '../images/profile-pic.jpg';

function AboutMe() {
    return (
        <Container fluid>
            <Row>
                <Col size='md-12'>
                    <h1>Bryan Thaoxaochay</h1>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col size='md-3'>
                    <img src={profilePic} className="img-thumbnail" alt="profile pic" />
                </Col>
                <Col size='md-3'>
                    <p>
                    Hello! I am Bryan. Welcome to my portfolio. I am currently two months in a 6-month program on full stack development from the University of Minnesota - Twin Cities. I recently graduated college in 2020 with a degree in Kinesiology. I majored in Kinesiology because I am a huge fan of sports and athletics. I stay up to date with the English Premier League, NBA, and the NFL. Other than that, I also enjoy playing a lot of sports.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col size='md-6'>
                    <p>
                    I enjoy most things that are active, but I really enjoy playing soccer, basketball, or simply running. Besides sports, I am usually spending time with my friends, spending too much time on YouTube, or playing video games.
                    </p>
                </Col>
            </Row>
        </Container>
    )
};

export default AboutMe;