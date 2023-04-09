import React from 'react'

const Part = ({item,path,zindex}) => {
  return (
    <img src={`./character/${path}/${item}.png`} className={`img_avatar ${zindex}`} alt='body'/>
  )
}

export default Part
