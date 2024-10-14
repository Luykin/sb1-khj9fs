import React, { useState } from 'react'
import { Table, Button, Tag, Tabs, Modal, Typography, Space } from 'antd'
import { useRequest } from 'ahooks'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftOutlined, ExclamationCircleOutlined } from '@ant-design/icons'

const { confirm } = Modal
const { Title } = Typography

const AdminActivityList = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('pending')

  const { data: activities, loading, mutate } = useRequest(() => {
    // 这里应该是从API获取活动列表的逻辑
    return Promise.resolve([
      { id: 1, title: '徒步活动', status: 'pending', isHot: false, initiator: '张三', initiateTime: '2023-06-01 10:00', activityTime: '2023-06-15 09:00' },
      { id: 2, title: '读书会', status: 'approved', isHot: true, initiator: '李四', initiateTime: '2023-06-02 14:00', activityTime: '2023-06-20 19:00' },
      { id: 3, title: '编程马拉松', status: 'rejected', isHot: false, initiator: '王五', initiateTime: '2023-06-03 09:00', activityTime: '2023-06-25 08:00' },
    ])
  })

  const handleStatusChange = (id, newStatus) => {
    confirm({
      title: `确定要${newStatus === 'approved' ? '通过' : '拒绝'}这个活动吗？`,
      icon: <ExclamationCircleOutlined />,
      content: '此操作不可逆，请谨慎操作。',
      onOk() {
        mutate(activities.map(activity => 
          activity.id === id ? { ...activity, status: newStatus } : activity
        ))
      },
    });
  }

  const columns = [
    {
      title: '活动ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '活动标题',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => (
        <a onClick={() => navigate(`/activity/${record.id}`)}>{text}</a>
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        const color = status === 'approved' ? 'green' : status === 'rejected' ? 'red' : 'gold';
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
    {
      title: '发起人',
      dataIndex: 'initiator',
      key: 'initiator',
    },
    {
      title: '发起时间',
      dataIndex: 'initiateTime',
      key: 'initiateTime',
    },
    {
      title: '活动时间',
      dataIndex: 'activityTime',
      key: 'activityTime',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="small">
          {record.status === 'pending' && (
            <>
              <Button type="primary" size="small" onClick={() => handleStatusChange(record.id, 'approved')}>通过</Button>
              <Button danger size="small" onClick={() => handleStatusChange(record.id, 'rejected')}>拒绝</Button>
            </>
          )}
          {record.status === 'approved' && (
            <Button danger size="small" onClick={() => handleStatusChange(record.id, 'rejected')}>拒绝</Button>
          )}
          {record.status === 'rejected' && (
            <Button type="primary" size="small" onClick={() => handleStatusChange(record.id, 'approved')}>通过</Button>
          )}
        </Space>
      ),
    },
  ];

  const filteredActivities = activities?.filter(activity => activity.status === activeTab) || []

  return (
    <div className="admin-activity-list">
      <Button 
        icon={<ArrowLeftOutlined />} 
        onClick={() => navigate('/')}
        className="back-button"
      >
        返回首页
      </Button>
      <Title level={2}>活动审核</Title>
      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        items={[
          { key: 'pending', label: '待审核' },
          { key: 'approved', label: '已通过' },
          { key: 'rejected', label: '已拒绝' },
        ]}
      />
      <Table 
        columns={columns} 
        dataSource={filteredActivities} 
        loading={loading} 
        rowKey="id"
      />
    </div>
  )
}

export default AdminActivityList