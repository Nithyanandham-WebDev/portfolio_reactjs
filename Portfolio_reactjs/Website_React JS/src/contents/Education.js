import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="BE Computer science" where="RMK engineering college" from="July 2018" to="Present"/>
            <Widecard title="SSLC" where="St.marys matric hr sec school" from="2011" to="2018"/>
            </div>
            )
        }
    }
    
export default Education
    