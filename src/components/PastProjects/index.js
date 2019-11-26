import React, { useState, useContext} from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './style.css';


export default function PastProjects() {
    return(
        <Row className="vert-center">
            <Col sm={{ span: 3, offset: 1}}>
                <h3>Past Projects</h3>
            </Col>
        </Row>
    )
}