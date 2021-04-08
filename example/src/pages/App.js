import React from 'react'
import { Switch, Route, useHistory, useLocation } from 'react-router-dom'
import { Layout, Menu, Typography } from 'antd'

import MarkdownPage from './MarkdownPage'
import Examples from './example'
import exampleList from './example/example-list'

const { Title } = Typography
const { Content, Sider } = Layout

export default function App() {
  const history = useHistory()
  let location = useLocation()
  console.log('location :>> ', location)

  return (
    <Layout style={{ height: '100%' }}>
      <Sider
        theme='light'
        width={300}
        style={{
          overflow: 'auto',
          height: '100%'
        }}
      >
        <Title level={3} style={{ textAlign: 'center' }}>
          react-instances
        </Title>
        <Menu
          theme='light'
          mode='inline'
          defaultSelectedKeys={location.pathname}
          onSelect={({ key }) => history.push(key)}
        >
          <Menu.Item key='/'>Home</Menu.Item>
          <Menu.Item key='/api'>API</Menu.Item>
          <Menu.ItemGroup key='examples' title='Examples'>
            {exampleList.map((e) => (
              <Menu.Item key={`${e.path}-example`}>{e.name}</Menu.Item>
            ))}
          </Menu.ItemGroup>
        </Menu>
      </Sider>
      <Layout className='site-layout' style={{ width: 'auto', height: '100%' }}>
        <Content style={{ overflow: 'initial', height: '100%' }}>
          <div className='site-layout-background' style={{ height: '100%' }}>
            <Switch>
              <Route path='/api'>
                <MarkdownPage path='https://raw.githubusercontent.com/unique01082/react-instances/master/example/src/pages/Api.md' />
              </Route>
              <Route path='/*-example'>
                <Examples />
              </Route>
              <Route path='/'>
                <MarkdownPage path='https://raw.githubusercontent.com/unique01082/react-instances/master/example/src/pages/Home.md' />
              </Route>
            </Switch>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
