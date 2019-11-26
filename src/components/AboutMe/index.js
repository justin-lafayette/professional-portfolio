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
                                Body Content
                            </div>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </>
    )
}