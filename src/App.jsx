import React from 'react';
import { Layout, Typography, Avatar, Button } from 'antd';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import ActivitySquare from './pages/user/ActivitySquare';
import CreateActivity from './pages/user/CreateActivity';
import ActivityDetails from './pages/user/ActivityDetails';
import AdminActivityList from './pages/admin/AdminActivityList';
import imagesData from './data/images.json';

const { Header, Content } = Layout;
const { Title } = Typography;

console.log('App component is rendering');

function App() {
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header 
        style={{ 
          position: 'fixed', 
          top: 0, 
          zIndex: 1000, 
          width: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          padding: '0 50px', 
          background: 'rgba(24, 144, 255, 0.8)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Title level={3} style={{ margin: 0, color: '#fff' }}>数字马力</Title>
        </Link>
        <Avatar style={{ backgroundColor: '#fff', verticalAlign: 'middle' }} size="large">
          <img src={imagesData.avatar} alt="User Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Avatar>
      </Header>
      <Content style={{ padding: '24px 50px', marginTop: '64px' }}>
        <Routes>
          <Route path="/" element={<ActivitySquare />} />
          <Route path="/create" element={<CreateActivity />} />
          <Route path="/activity/:id" element={<ActivityDetails />} />
          <Route path="/admin" element={<AdminActivityList />} />
        </Routes>
      </Content>
      <div className="floating-buttons">
        <Button type="primary" onClick={() => navigate('/create')}>发布活动</Button>
        <Button onClick={() => navigate('/admin')}>审核活动</Button>
      </div>
    </Layout>
  );
}

export default App;