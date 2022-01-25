import React from 'react'

/**
 * a-asset-item
 */
const AAssetItem = ({ children, ...props }: any): JSX.Element => {
  return React.createElement('a-asset-item', props, children)
}

export default AAssetItem
