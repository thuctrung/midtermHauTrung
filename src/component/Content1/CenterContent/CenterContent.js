import getData from'./data';
import React, { Component } from 'react';
import ShowItem from './ShowItem';
class CenterContent extends Component {
    render() {
        const products=getData();
        return (
            <div className="col-sm-3">
                <div id="center-content">
                    <div id = "products">
                        {
                            products.map(product=><ShowItem image={product.image} title={product.title}/>)}
                            <div style={{clear: 'both'}}/>
                    </div>
                    <div style={{clear:'both'}}/>
                </div>
                <div style={{clear:'both'}}/>
            </div>
        );
    }
}

export default CenterContent;