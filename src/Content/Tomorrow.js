import React from 'react';
import Sort from "./Sort";
import { List, Typography } from "antd";
import Item from "./Item";

let { Title } = Typography;

const data = [
    'Task #1',
    'Task #2',
    'Task #3'
]

export default class Tomorrow extends React.Component {
    render(){
        return(
            <div>

                <Sort/>
                <List
                    size = "large"
                    split = { true }
                    dataSource = { data }
                    renderItem = {item => (
                        <Item item={item}/>
                    )}
                />
            </div>
        );
    }
}