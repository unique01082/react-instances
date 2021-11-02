import React from 'react'
import { INSTANCES, OBSERVERS } from './hocs/symbols'

export interface ManageableInstance extends React.Component {
  [INSTANCES]: Map<any, React.ReactNode>
  getInstances: () => Map<any, React.ReactNode>
  getInstance: (key: any) => React.ReactNode
  hasInstance: (key: any) => boolean
  addInstance: (
    key: any,
    instance: React.ReactNode
  ) => Map<any, React.ReactNode>
  removeInstance: (key: any) => boolean
}

export interface ManageableFcInstance extends ManageableInstance {
  (props: object): React.ReactNode
}

export type Watcher = (diff: any, values: any) => void

export interface ObservableInstance extends React.Component {
  [OBSERVERS]: Map<any, Map<any, Watcher>>
  getObservers: () => Map<any, Map<any, Watcher>>
  getObserver: (key: any) => Map<any, Watcher>
  hasObserver: (key: any) => boolean
  addObserver: (key: any, watcher: Watcher) => string
  notifyObservers: (name: any, diff: object, ...data: any[]) => void
  removeObserver: (key: any, id: any) => boolean
}

export interface ObservableFcInstance extends ObservableInstance {
  (props: object): React.ReactNode
}
