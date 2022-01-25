import React from 'react'

const Scene = ({ children, ...props }: any): JSX.Element => {
  return React.createElement('a-scene', props, children)
}

export default Scene
