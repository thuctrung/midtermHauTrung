import getData from'./data';
import React, { Component } from 'react';
import ShowItem from './ShowItem';
class LeftContentBottom extends Component {
    render() {
        const pros=getData();
        return (
                    <div id = "fsfsf">
                        {
                            pros.map(product=><ShowItem title={product.title} />)}
                            <div style={{clear: 'both'}}/>
                    </div>
        );
    }
}


export default LeftContentBottom;
