import React, { Component } from 'react';
class ShowItem extends Component {
    render() {
        return (
            <div className="product">
                <div className="p-img">
                    <img src={this.props.image} with={200} height={200}/>
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