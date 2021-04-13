import manageInstances from './manageInstances'

export default function withInstanceManage(Component, keyAttribute = 'name') {
  class WrappedComponent extends Component {
    constructor(props) {
      super(props)
      WrappedComponent.addInstance(this.props[keyAttribute], this)
    }

    componentWillUnmount() {
      WrappedComponent.removeInstance(this.props[keyAttribute])
    }
  }

  return manageInstances(WrappedComponent)
}
