import React from 'react'

/**
 *
 */
const Box = ({ children, ...props }: any): JSX.Element => {
  return React.createElement('a-box', props, children)
}

export default Box
