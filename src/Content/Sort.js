import React from 'react';

import { Menu, Dropdown, Icon, Button } from "antd";

let menu = (
    <Menu>
        <Menu.Item key="1">
            <Icon type="font-colors" />
            По алфавиту
        </Menu.Item>
        <Menu.Item key="2">
            <Icon type="check" />
            Дата выполнения
        </Menu.Item>
        <Menu.Item key="3">
            <Icon type="plus-circle" />
            Дата создания
        </Menu.Item>
    </Menu>
);

export default class Sort extends React.Component {

    render(){
        return(
            <Dropdown overlay={menu}>
                <Button type='link'>
                    <Icon type="sort-ascending" /> Сортировка <Icon type="down" />
                </Button>
            </Dropdown>
        )
    }
}