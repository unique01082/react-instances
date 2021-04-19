import React from 'react'
import { Switch, Route, useHistory, useLocation } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import Home from './Home'
import MarkdownPage from './MarkdownPage'
import Examples from './example'
import exampleList from './example/example-list'

const { Content, Sider } = Layout

export default function App() {
  const history = useHistory()
  let location = useLocation()

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
        <img src='logo/logo_wide_300.png' alt='logo' />
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
                <MarkdownPage path='https://raw.githubusercontent.com/unique01082/react-instances/master/document/src/pages/Document.md' />
              </Route>
              <Route path='/*-example'>
                <Examples />
              </Route>
              <Route path='/'>
                <MarkdownPage path='https://raw.githubusercontent.com/unique01082/react-instances/master/document/src/pages/Home.md' />
                <Home />
              </Route>
            </Switch>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
