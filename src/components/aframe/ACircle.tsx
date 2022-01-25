import React from 'react'

/**
 * a-circle
 */
const ACircle = ({ children, ...props }: any): JSX.Element => {
  return React.createElement('a-circle', props, children)
}

export default ACircle
