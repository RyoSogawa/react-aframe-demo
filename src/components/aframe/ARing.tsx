import React from 'react'

/**
 * a-ring
 */
const ARing = ({ children, ...props }: any): JSX.Element => {
  return React.createElement('a-ring', props, children)
}

export default ARing
