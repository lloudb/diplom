import React from 'react';
import { Divider, Input, Menu } from "antd";

const { SubMenu } = Menu;
const { Search } = Input;

export default class MenuComponent extends React.Component {

    handleTitleClick = e => {
        if (e === 'today') {
            this.setState({
                title: 'Сегодня',
                content: 'today'
            })
        } else if (e === 'tomorrow'){
            this.setState({
                title: 'Завтра',
                content: 'tomorrow'
            })
        } else if (e === 'week'){
            this.setState({
                title: 'Неделя',
                content: 'week'
            })
        } else if (e === 'month'){
            this.setState({
                title: 'Месяц',
                content: 'month'
            })
        }
    };
    
    render(){
        return(
            <div>
                <Search
                    style={{ margin: 10, marginTop: 30, width: 170}}
                />
                <Menu
                    mode="vertical"
                    height='100%'
                >

                    <SubMenu title='Все задачи' />

                    <Menu.Item>
                        <Divider />
                    </Menu.Item>

                    <SubMenu title='Сегодня' onTitleClick = {() => this.handleTitleClick('today')}/>

                    <SubMenu title='Завтра' onTitleClick = {() => this.handleTitleClick('tomorrow')}/>

                    <SubMenu title='Неделя' onTitleClick = {() => this.handleTitleClick('week')}/>

                    <SubMenu title='Месяц' onTitleClick = {() => this.handleTitleClick('month')}/>

                </Menu>
            </div>
        )
    }
}