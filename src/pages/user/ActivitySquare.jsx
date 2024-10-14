import React from 'react'
import { Card, List, Button, Typography, Tag, Tooltip } from 'antd'
import { useRequest } from 'ahooks'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { getActivities } from '../../mock/activities'
import { CalendarOutlined, TeamOutlined, ClockCircleOutlined } from '@ant-design/icons'
import ImageWithFallback from '../../components/ImageWithFallback'

const { Title, Paragraph } = Typography

console.log('ActivitySquare component is rendering');

const ActivitySquare = () => {
  const { data, loading } = useRequest(getActivities, {
    cacheKey: 'activityList',
    staleTime: 300000, // 5 minutes
  })

  console.log('ActivitySquare data:', data);

  const activities = data?.list || []
  const hotActivities = activities.slice(0, 3)

  const formatDateRange = (startTime, endTime) => {
    const start = new Date(startTime)
    const end = new Date(endTime)
    return `${start.getFullYear()}/${String(start.getMonth() + 1).padStart(2, '0')}/${String(start.getDate()).padStart(2, '0')}-${String(end.getMonth() + 1).padStart(2, '0')}/${String(end.getDate()).padStart(2, '0')}`
  }

  return (
    <div style={{ padding: '0 16px' }}>
      <div style={{ marginTop: '20px', position: 'relative', zIndex: 1 }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop={true}
          className="mySwiper"
          style={{ height: '40vw', maxHeight: '400px' }}
        >
          {hotActivities.map((activity) => (
            <SwiperSlide key={activity.id}>
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <ImageWithFallback 
                  src={activity.image} 
                  alt={activity.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  right: 0, 
                  padding: '16px', 
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)', 
                  color: 'white' 
                }}>
                  <Title level={4} style={{ color: 'white', margin: 0 }}>{activity.title}</Title>
                  <Paragraph style={{ color: 'white', margin: '8px 0 0', fontSize: '14px' }}>{activity.shortDescription}</Paragraph>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Title level={2} style={{ margin: '24px 0 16px' }}>活动广场</Title>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
        dataSource={activities}
        loading={loading}
        renderItem={item => (
          <List.Item>
            <Card
              hoverable
              cover={<ImageWithFallback alt={item.title} src={item.image} style={{ height: 180, objectFit: 'cover' }} />}
              actions={[
                <Link to={`/activity/${item.id}`}>
                  <Button type="primary" size="small">查看详情</Button>
                </Link>
              ]}
              className="activity-card"
              style={{ marginBottom: '16px' }}
            >
              <Card.Meta
                title={<span style={{ fontSize: '16px' }}>{item.title}</span>}
                description={
                  <div className="activity-info">
                    <Paragraph ellipsis={{ rows: 2 }} style={{ fontSize: '14px', marginBottom: '8px' }}>{item.shortDescription}</Paragraph>
                    <div className="activity-tags">
                      <Tooltip title={`已报名: ${item.participants}/${item.maxParticipants}`}>
                        <Tag icon={<TeamOutlined />} color="blue" style={{ marginBottom: '4px' }}>
                          {item.participants}/{item.maxParticipants}
                        </Tag>
                      </Tooltip>
                      <Tooltip title={`活动时间: ${formatDateRange(item.startTime, item.endTime)}`}>
                        <Tag icon={<CalendarOutlined />} color="green" style={{ marginBottom: '4px' }}>
                          {formatDateRange(item.startTime, item.endTime)}
                        </Tag>
                      </Tooltip>
                      <Tooltip title={`报名截止: ${new Date(item.registrationDeadline).toLocaleString()}`}>
                        <Tag icon={<ClockCircleOutlined />} color="orange" style={{ marginBottom: '4px' }}>
                          截止 {new Date(item.registrationDeadline).toLocaleDateString()}
                        </Tag>
                      </Tooltip>
                    </div>
                  </div>
                }
              />
            </Card>
          </List.Item>
        )}
      />
    </div>
  )
}

export default ActivitySquare