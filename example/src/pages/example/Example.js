import React from 'react'

const Example = ({ example }) => {
  return (
    <iframe
      src={`https://codesandbox.io/embed/react-instances-example-${example.codeSandboxId}?autoresize=1&fontsize=14&hidenavigation=1&theme=light`}
      style={{
        width: '100%',
        height: '100%',
        border: 0,
        borderRadius: 4,
        overflow: 'hidden'
      }}
      title='react-instances-example'
      allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
      sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
    />
  )
}

export default Example
