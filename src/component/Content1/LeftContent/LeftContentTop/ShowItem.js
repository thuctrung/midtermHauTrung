import getData from'./data';
import React, { Component } from 'react';
import ShowLeftContent from './LeftContentTop';
class ShowItem extends Component {
    render() {
        return (
            <div className="product">
                <div className="p-img">
                    <img src={this.props.img} with={500} height={200}/>
                </div>
                <div className="text">
                    <div className="title">{this.props.title}</div>
                </div>
                <div className="clear"/>
            </div>

        );
    }
}


export default ShowItem;
