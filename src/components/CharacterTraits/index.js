import React, { useState, useContext } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './style.css';

export default function CharacterTraits() {
    return(
        <Row className="vert-center">
            <Col>
                <Container>
                    <Row>
                        <h3>Character Traits</h3>
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
    )
}