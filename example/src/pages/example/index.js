import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Example from './Example'

import exampleList from './example-list'

const Examples = () => (
  <Switch>
    {exampleList.map((e) => (
      <Route path={`${process.env.PUBLIC_URL}/example${e.path}`} key={e.path}>
        <Example example={e} />
      </Route>
    ))}
  </Switch>
)

export default Examples
