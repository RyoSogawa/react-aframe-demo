import React from 'react'

/**
 * a-box
 */
const ABox = ({ children, ...props }: any): JSX.Element => {
  return React.createElement('a-box', props, children)
}

export default ABox
