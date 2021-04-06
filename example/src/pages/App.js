import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { Layout, Menu, Typography } from 'antd'

import Api from './Api'
import Home from './Home'
import Examples from './example'
import exampleList from './example/example-list'

const { Title } = Typography
const { Content, Sider } = Layout

export default function App() {
  const history = useHistory()

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
          onSelect={({ key }) => history.push(key)}
        >
          <Menu.Item key='/'>Home</Menu.Item>
          <Menu.Item key='/api'>API</Menu.Item>
          <Menu.SubMenu key='examples' title='Examples'>
            {exampleList.map((e) => (
              <Menu.Item key={`/example${e.path}`}>{e.name}</Menu.Item>
            ))}
          </Menu.SubMenu>
        </Menu>
      </Sider>
      <Layout className='site-layout' style={{ width: 'auto', height: '100%' }}>
        <Content style={{ overflow: 'initial', height: '100%' }}>
          <div
            className='site-layout-background'
            style={{ textAlign: 'center', height: '100%' }}
          >
            <Switch>
              <Route path='/api'>
                <Api />
              </Route>
              <Route path='/example'>
                <Examples />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
