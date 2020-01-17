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
                        <ul>
                            <li>
                                Detailed oriented
                            </li>
                            <li>
                                Quick learner
                            </li>
                            <li>
                                Advid learner
                            </li>
                            <li>
                                Hard worker
                            </li>
                            <li>
                                Team player
                            </li>
                            <li>
                                Fun loving
                            </li>
                        </ul>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}