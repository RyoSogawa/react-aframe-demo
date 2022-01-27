import React from 'react'

/**
 * a-plane
 */
const APlane = ({ children, ...props }: any): JSX.Element => {
  return React.createElement('a-plane', props, children)
}

export default APlane
