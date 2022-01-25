import React from 'react'

/**
 * a-cone
 */
const ACone = ({ children, ...props }: any): JSX.Element => {
  return React.createElement('a-cone', props, children)
}

export default ACone
