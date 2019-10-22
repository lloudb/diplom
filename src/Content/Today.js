import React from 'react';
import { List } from "antd";
import Item from "./Item";
import Sort from './Sort';

const data = [
    'Task #1',
    'Task #2',
    'Task #3'
]

export default class Today extends React.Component {

    render(){
        return(
            <div>
                <Sort/>
                <List
                    size = "large"
                    split={true}
                    dataSource={data}
                    renderItem={item => (
                        <Item item={item}/>
                    )}
                />
            </div>
        );
    }
}