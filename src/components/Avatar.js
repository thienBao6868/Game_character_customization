import React from 'react'
import Part from './Part'
const Avatar = ({body,hair,pathHair,pathBody,eyes,pathEyes,mouths,pathMouths,eyebrows,pathEyebrows,glasses,pathGlasses,clothing1,pathClothing1,clothing2,pathClothing2,clothing3,pathClothing3,zindex1,zindex2,zindex3,zindex4}) => {
  return (
    <div className="avatar">
     <Part path={pathHair} item={hair} zindex={zindex4}/>
     <Part path={pathBody} item={body} zindex={zindex1}/>
     <Part path={pathEyes} item={eyes} zindex={zindex2}/>
     <Part path={pathMouths} item={mouths}zindex={zindex2}/>
     <Part path={pathEyebrows} item={eyebrows}zindex={zindex2}/>
     <Part path={pathGlasses} item={glasses} zindex={zindex3}/>
     <Part path={pathClothing1} item={clothing1} zindex={zindex2}/>
     <Part path={pathClothing2} item={clothing2} zindex={zindex3}/>
     <Part path={pathClothing3} item={clothing3} zindex={zindex4}/>
    </div>
  )
}

export default Avatar

