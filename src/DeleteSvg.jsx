import React from 'react'

function DeleteSvg({handleStackDelete,id}) {
  return (

      <svg id={id} onClick={handleStackDelete} style={{fill : '#D8D9D8',cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" height="48" width="48">< path id={id} onClick={handleStackDelete} d="M15.2 40.2q-1.35 0-2.35-1t-1-2.35v-25.4H10.4q-.35 0-.6-.275t-.25-.625q0-.35.25-.6t.6-.25h7.35q0-.65.5-1.05t1.15-.4h9.25q.65 0 1.15.4.5.4.5 1.05h7.35q.35 0 .625.25t.275.65q0 .35-.275.6t-.625.25H36.2v25.4q0 1.35-.975 2.35t-2.375 1Zm-1.6-28.75v25.4q0 .7.475 1.15.475.45 1.125.45h17.65q.65 0 1.125-.45t.475-1.15v-25.4Zm6.1 22q0 .35.25.6t.6.25q.35 0 .625-.25t.275-.6V16.4q0-.3-.275-.6t-.625-.3q-.35 0-.6.3t-.25.6Zm6.95 0q0 .35.25.6t.6.25q.35 0 .625-.25t.275-.6V16.4q0-.3-.275-.6t-.625-.3q-.35 0-.6.3t-.25.6Zm-13.05-22v25.4q0 .7.475 1.15.475.45 1.125.45h-1.6v-27Z"/></svg>

    )
}

export default DeleteSvg