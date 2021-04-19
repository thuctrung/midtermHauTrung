import React, { Component } from 'react';
import CenterContent from './CenterContent/CenterContent';
// import LeftContent from './LeftContent/LeftContent';
import RightContent from './RightContent/RightContent';
import LeftContent from './LeftContent/LeftContent';
class Conten1 extends Component {
    render() {
        return (
            <div>
                <div className="col-sm-6">
                <LeftContent/>
                </div>
                <div className="col-sm-3">
                <CenterContent />
                </div>
                <div className="col-sm-3">
                <RightContent/>
                </div>   
            </div>
           
        );
    }
}

export default Conten1;
