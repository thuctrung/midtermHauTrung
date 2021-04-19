import getData from'./data';
import React, { Component } from 'react';
import ShowItem from './ShowItem';
class Content2 extends Component {
    render() {
        const pros=getData();
        return (
            <div>
                <div id="right-content">
                   
                    <div id = "product">
                        {
                            pros.map(product=><ShowItem image={product.image} content1={product.content1} content2={product.content2} content3={product.content3}/>)}
                            <div style={{clear: 'both'}}/>
                    </div>
                    <div style={{clear:'both'}}/>
                </div>
                <div style={{clear:'both'}}/>
            </div>
        );
    }
}

export default Content2;
