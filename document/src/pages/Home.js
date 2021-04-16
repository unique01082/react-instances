import React from 'react'
import { Timeline } from 'antd'
import moment from 'moment'
import {
  BranchesOutlined,
  SettingOutlined,
  MonitorOutlined,
  StarOutlined
} from '@ant-design/icons'

const milestones = [
  {
    color: 'blue',
    date: moment('20210402'),
    content: ['Initialize package'],
    icon: BranchesOutlined
  },
  {
    color: 'blue',
    date: moment('20210419'),
    content: ['Alpha test'],
    icon: SettingOutlined
  },
  {
    color: 'blue',
    date: moment('20210503'),
    content: ['Beta test'],
    icon: MonitorOutlined
  },
  {
    color: 'green',
    date: moment('20210517'),
    content: ['Release first stable version'],
    icon: StarOutlined
  }
]

const Home = () => {
  return (
    <>
      <Timeline mode='left' pending='Think about the future...'>
        {milestones.map(({ date, content, icon: Icon, ...rest }) => (
          <Timeline.Item
            dot={Icon ? <Icon style={{ fontSize: '16px' }} /> : undefined}
            label={date.format('MMMM D, YYYY')}
            {...rest}
          >
            {content}
          </Timeline.Item>
        ))}
      </Timeline>
    </>
  )
}

export default Home
