import React from 'react'

const Partlist = ({path,total,set,selected}) => {
  let parts=[];
  
  for(let i = 0;i < total; i++){
    parts.push(
      <div key={`${path + i}`} className={selected === (i+1) ? "square selected": "square"} onClick={()=>{set(i+1)}}> 
        <img src={`character/${path}/${i+1}.png`} alt="img" height={60} className="img–center"/>
      </div>
    )
  }
  return <div className="list">{parts}</div>
}

export default Partlist