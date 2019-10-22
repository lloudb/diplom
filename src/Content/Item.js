import React from 'react';
import {Checkbox, List, Typography} from "antd";

export default class Item extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            color: 'transparent'
        }
    }

    handleHover = e => {
        this.setState({
            color: '#e2e9f3'
        })
    };

    handleDown = e => {
        this.setState({
            color: '#f0f2f5'
        })
    }

    render(){
        return(
            <List.Item
                onMouseOver={this.handleHover}
                onMouseLeave={this.handleDown}
                style={{
                    backgroundColor: this.state.color,
                    cursor: 'pointer',
                    paddingLeft: 10
                }}
            >
                <Checkbox />
                <Typography.Text style={{marginLeft: 10}}>{this.props.item}</Typography.Text>
            </List.Item>
        )
    }
}