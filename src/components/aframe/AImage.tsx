import React from 'react'

/**
 * a-image
 */
const AImage = ({ children, ...props }: any): JSX.Element => {
  return React.createElement('a-image', props, children)
}

export default AImage
