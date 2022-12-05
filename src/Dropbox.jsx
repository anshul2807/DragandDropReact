import React from 'react'
import './Dropbox.css';
function Dropbox({count}) {
  return (
    <div className='dropbox'>
        <div className="dropbox-drop">
            {count}
        </div>
        <div className="dropbox-inner">
            DropBox
        </div>
    </div>
  )
}

export default Dropbox