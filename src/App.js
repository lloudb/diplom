import React from 'react';
import Today from "./Content/Today";
import MenuComponent from './Menu/Menu';

import { Layout, Typography } from 'antd';

const { Sider, Content } = Layout;
const { Title } = Typography;

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Сегодня',
            content: 'today'
        }
    }

    drawContent = () => {
        if (this.state.content === 'today'){
            return <div><Today /></div>
        }
    }

    render(){
        return (
            <Layout>
                <Sider style={{ minHeight: '100vh', background: '#fff' }}>
                    <MenuComponent />
                </Sider>
                <Content>

                    <Title level={2} style={{paddingLeft: 10, marginTop: 30}}>{this.state.title}</Title>
                    { this.drawContent() }

                </Content>
            </Layout>
        );
    }
}

export default App;
