
import React, { Component } from 'react';
class ShowItem extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="title">{this.props.title}</div>
                </div>
                <div className="clear"/>
            </div>

        );
    }
}


export default ShowItem;
