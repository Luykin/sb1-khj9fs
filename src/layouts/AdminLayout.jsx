import React from 'react'
import { Layout, Menu } from 'antd'
import { Link, Outlet } from 'react-router-dom'

const { Header, Content } = Layout

const AdminLayout = () => {
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1"><Link to="/admin">活动审核</Link></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Outlet />
      </Content>
    </Layout>
  )
}

export default AdminLayout