import React from 'react'
import './Dragabble.css';
function Dragabble({dropitem,handleDragStart,handleTouchStart,handleTouchMove,handleTouchEnd,dragTouch}) {
  return (
      <div className="app-1" >
          <h1>Draggables</h1>
          <ul className='app-1-items'>
              {dropitem.map(item => {
                  return (
                      <>
                          <li
                          onDragStart={(e)=>handleDragStart(e,item)}
                          onTouchStart={(e)=>handleTouchStart(e,item)}
                          onTouchMove={(e)=>handleTouchMove(e)}
                          onTouchEnd={(e)=>handleTouchEnd(e)}
                          draggable key={item} className='drop'>{item}</li>

                          <li 
                          className='drop' 
                          style={{display :`${dragTouch.display==false? "none" : "flex"}` ,position : "absolute",left:`${dragTouch.posX}px`,top : `${dragTouch.posY}px`,zIndex :100,opacity:0.5}}
                          >{dragTouch.val}</li>
                      </>
                  );
              })}
          </ul>
      </div>
  )
}

export default Dragabble