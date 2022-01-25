import React from 'react'

/**
 * a-scene
 */
const AScene = ({ children, ...props }: any): JSX.Element => {
  return React.createElement('a-scene', props, children)
}

export default AScene
