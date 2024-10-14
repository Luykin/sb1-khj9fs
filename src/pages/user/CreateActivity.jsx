import React from 'react'
import { Form, Input, InputNumber, Select, Button, DatePicker, Typography } from 'antd'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons'

const { Option } = Select
const { Title } = Typography

const CreateActivity = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    // 这里应该是提交活动的逻辑
  }

  return (
    <div className="create-activity-form">
      <Button 
        icon={<ArrowLeftOutlined />} 
        onClick={() => navigate(-1)}
        className="back-button"
      >
        返回
      </Button>
      <Title level={2}>发布活动</Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item name="title" label="活动标题" rules={[{ required: true, message: '请输入活动标题' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="description" label="活动描述" rules={[{ required: true, message: '请输入活动描述' }]}>
          <ReactQuill 
            theme="snow" 
            style={{ height: '300px', marginBottom: '50px' }}
            placeholder="请输入内容（最多3000字）"
          />
        </Form.Item>
        <Form.Item name="circle" label="活动圈子" rules={[{ required: true, message: '请选择活动圈子' }]}>
          <Select placeholder="请选择活动圈子">
            <Option value="sport">运动圈</Option>
            <Option value="culture">文化圈</Option>
            <Option value="tech">技术圈</Option>
          </Select>
        </Form.Item>
        <Form.Item name="maxParticipants" label="可参与人数" rules={[{ required: true, message: '请输入可参与人数' }]}>
          <InputNumber min={1} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name="activityTime" label="活动时间" rules={[{ required: true, message: '请选择活动时间' }]}>
          <DatePicker showTime style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            发布活动
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default CreateActivity