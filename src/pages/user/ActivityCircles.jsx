import React from 'react'
import { Card, List } from 'antd'
import { useRequest } from 'ahooks'

const ActivityCircles = () => {
  const { data: circles, loading } = useRequest(() => {
    // 这里应该是从API获取圈子列表的逻辑
    return Promise.resolve([
      { id: 1, name: '运动', description: '各种运动活动' },
      { id: 2, name: '文化', description: '读书、音乐、艺术等文化活动' },
    ])
  })

  return (
    <div>
      <h1>活动圈子</h1>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={circles}
        loading={loading}
        renderItem={item => (
          <List.Item>
            <Card title={item.name}>
              <p>{item.description}</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  )
}

export default ActivityCircles