import React, { useState, useContext} from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './style.css';


export default function ReactSkills() {
    return(
        <Row className="vert-center">
            <Col sm={{ span: 3, offset: 1}}>
                <h3>React Skills</h3>
            </Col>
        </Row>
    )
}