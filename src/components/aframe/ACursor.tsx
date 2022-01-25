import React from 'react'

/**
 * a-cursor
 */
const ACursor = ({ children, ...props }: any): JSX.Element => {
  return React.createElement('a-cursor', props, children)
}

export default ACursor
