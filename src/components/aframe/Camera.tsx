import React from 'react'

/**
 *
 */
const Camera = ({ children, ...props }: any): JSX.Element => {
  return React.createElement('a-camera', props, children)
}

export default Camera
