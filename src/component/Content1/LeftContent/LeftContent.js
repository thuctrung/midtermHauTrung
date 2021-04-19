import React, { Component } from 'react';
import LeftContentTop from './LeftContentTop/LeftContentTop';
import LeftContentBottom from './LeftContentBottom/LeftContentBottom';
class LeftContent extends Component {
    render() {
        return (
            <div>
               <LeftContentTop />
               <LeftContentBottom /> 
            </div>
        );
    }
}



export default LeftContent;
