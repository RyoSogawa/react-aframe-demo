import React from 'react'

/**
 * a-assets
 */
const AAssets = ({ children, ...props }: any): JSX.Element => {
  return React.createElement('a-assets', props, children)
}

export default AAssets
