// import src from '*.avif';
import getData from'./data';
import React, { Component } from 'react';
import ShowCard from './ShowCard';

class RightContent extends Component {
    render() {
        const products=getData();
        return (
            <div>
                <div id="right-content">
                    <h2>Product: </h2>
                    <div id = "products">
                        {
                            products.map(product=><ShowCard loai={product.loai} name={product.name} image={product.image}/>)}
                            <div style={{clear: 'both'}}/>
                    </div>
                    <div style={{clear:'both'}}/>
                </div>
                <div style={{clear:'both'}}/>
            </div>
        );
    }
}
export default RightContent;
