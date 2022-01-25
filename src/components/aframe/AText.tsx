import React from 'react'

/**
 * a-text
 */
const AText = ({ children, ...props }: any): JSX.Element => {
  return React.createElement('a-text', props, children)
}

export default AText
