import React from 'react'
import DeleteSvg from '../DeleteSvg';
import './Dropstack.css';
function Dropstack({dropstack,handleStackDelete}) {
  return (
    <div className="app-3">
          <h1>Drop Stack</h1>
          <ul className='app-3-drop'>
             {dropstack.map(stack => {
                return (
                   <li  key={stack.id} className='stack'><span>{stack.name}</span> Dropped <DeleteSvg id={stack.id} handleStackDelete={handleStackDelete} /></li>
                );
             })}
          </ul>
    </div>
  )
}

export default Dropstack