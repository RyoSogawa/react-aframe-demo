import React from 'react'

/**
 * a-camera
 */
const ACamera = ({ children, ...props }: any): JSX.Element => {
  return React.createElement('a-camera', props, children)
}

export default ACamera
