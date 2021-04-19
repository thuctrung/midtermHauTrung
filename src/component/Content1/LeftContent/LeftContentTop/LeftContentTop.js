import getData from'./data';
import React, { Component } from 'react';
import ShowItem from './ShowItem';
class LeftContentTop extends Component {
    render() {
        const pros=getData();
        return (
            <div>
                <div id="right-content">
                    <h2>Product: </h2>
                    <div id = "product">
                        {
                            pros.map(product=><ShowItem img={product.img} title={product.title} />)}
                            <div style={{clear: 'both'}}/>
                    </div>
                    <div style={{clear:'both'}}/>
                </div>
                <div style={{clear:'both'}}/>
            </div>
        );
    }
}


export default LeftContentTop;
