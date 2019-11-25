// Create single jumbotron with elements that can be used per section. Style per section will be dictated by classname.

import React, { useState, useContext} from 'react';
import { Jumbotron } from 'react-bootstrap';
import './style.css'
// import possible dispatchers/contexts

export default function Section(props) {
    return(
        <Jumbotron fluid {...props}></Jumbotron>
    )
}