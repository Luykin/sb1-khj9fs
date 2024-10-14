import React, { useState, useCallback, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Card, Button, Upload, Form, Input, Typography, Spin, Tag } from 'antd'
import { UploadOutlined, ArrowLeftOutlined, LockOutlined } from '@ant-design/icons'
import { useRequest } from 'ahooks'
import activitiesData from '../../data/activities.json'
import imagesData from '../../data/images.json'

const { TextArea } = Input
const { Title, Paragraph } = Typography

const ActivityDetails = () => {
  const { id } = useParams()
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const [isRegistered, setIsRegistered] = useState(false)

  const { data: activity, loading } = useRequest(() => {
    const foundActivity = activitiesData.activities.find(act => act.id === parseInt(id))
    return Promise.resolve(foundActivity)
  }, { refreshDeps: [id] })

  const onFinish = useCallback((values) => {
    console.log('Received values of form: ', values)
    // 这里应该是提交打卡的逻辑
  }, [])

  const handleRegister = useCallback(() => {
    setIsRegistered(true)
  }, [])

  const cardActions = useMemo(() => [
    <Button type="primary" onClick={handleRegister}>报名参加</Button>
  ], [handleRegister])

  if (loading) {
    return <Spin size="large" />
  }

  if (!activity) {
    return <div>No activity found</div>
  }

  return (
    <div>
      <Button 
        icon={<ArrowLeftOutlined />} 
        onClick={() => navigate(-1)}
        className="back-button"
      >
        返回
      </Button>
      <Card
        cover={<img alt={activity.title} src={imagesData.activities[activity.id]} style={{ height: 300, objectFit: 'cover' }} />}
        actions={cardActions}
      >
        <Card.Meta
          title={
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>{activity.title}</span>
              <Tag color="blue">{activity.circle}</Tag>
            </div>
          }
          description={
            <>
              <Paragraph>{activity.description}</Paragraph>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Tag color="blue">已报名: {activity.participants}/{activity.maxParticipants}</Tag>
                <Tag color="green">活动时间: {activity.startTime} - {activity.endTime}</Tag>
                <Tag color="orange">报名截止: {activity.registrationDeadline}</Tag>
                <Tag color="purple">发起人: {activity.initiator}</Tag>
                <Tag color="cyan">发起时间: {activity.initiateTime}</Tag>
              </div>
            </>
          }
        />
      </Card>

      <div style={{ position: 'relative', marginTop: '24px', padding: '20px', backgroundColor: '#f0f2f5', borderRadius: '8px' }}>
        <Title level={3}>活动打卡</Title>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item name="checkInContent" label="打卡内容" rules={[{ required: true }]}>
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item name="checkInImage" label="上传图片">
            <Upload>
              <Button icon={<UploadOutlined />}>点击上传</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交打卡
            </Button>
          </Form.Item>
        </Form>
        {!isRegistered && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <LockOutlined style={{ fontSize: '24px', marginBottom: '8px', color: '#1890ff' }} />
            <Typography.Text style={{ fontSize: '14px', color: '#666' }}>请先报名参加活动</Typography.Text>
          </div>
        )}
      </div>
    </div>
  )
}

export default ActivityDetails