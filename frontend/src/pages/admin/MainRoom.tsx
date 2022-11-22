import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import Room from './Room';

const { Header, Content, Footer } = Layout;

const MainRoom: React.FC = () => (
  <Layout>
    <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(3).fill(null).map((_, index) => ({
          key: String(index + 1),
          label: `nav ${index + 1}`,
        }))}
      />
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      {/* <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
      <div className="site-layout-background" style={{ padding: 16, minHeight: 380 }}>
        <Room></Room>
      </div>
    </Content>
  </Layout>
);

export default MainRoom;