import React, { useState, useContext } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './style.css';

export default function AboutMe() {
    return(
        <>
            <Row className="vert-center">
                <Col>
                    <Container>
                        <Row>
                            <h3>About Me</h3>
                        </Row>
                        <hr />
                        <Row>
                            <div>
                            Full-Stack Web Developer with extensive background in end-user computer support. Recently certified in the MERN Stack from Georgia Institute of Technology, with tailored skills in JavaScript, CSS3, React.js, Express.js, and MySQL. An exceptional problem-solver with a passion for learning. My projects push simplistic UI while engaging the user with content. I am familiar with Agile development and pushed that style of team engagement while project lead of my five-person team. I am excited to continue learning new skills and technologies in my pursuit of the perfect website.
                            </div>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </>
    )
}