import './App.css';
import {useState,useRef} from 'react';
import Dropbox from './Dropbox';
import DeleteSvg from './DeleteSvg';

function App() {
   const [dropitem,setDropItem]=useState(["A","B","C"])
   const [dropstack,setDropStack]=useState([
      {id:1,name : "A"},
      {id:2,name : "B"},
      {id:3,name : "C"},
      {id:4,name : "B"},
      {id:5,name : "A"},
      {id:6,name : "A"},
   ])

 

   const dragItemVar = useRef();
   const drager = useRef();
  
   const handleStackDelete = (e) =>{
      const stack_id = e.target.id
      // console.log(stack_id);
      let newDropStack=dropstack.filter(stack => stack.id != stack_id);
      setDropStack(newDropStack);
   }
   const handleDragItem = (e) => {
      dragItemVar.current=e.target.textContent;
   }
   const handleDragEnter = (e) => {
      drager.current.classList.add("app-2-hover");
   }

   const handleDragEnd = (e)=>{
         setDropStack([...dropstack,{
            id : new Date().getTime(),
            name : dragItemVar.current
         }])

         dragItemVar.current=null;
   }

   const handleDragExit = (e) => {
      drager.current.classList.remove("app-2-hover");
      
   }
   
  return (
    <div className="app" ref={drager}>
       <div className="app-1" >
          <h1>Draggables</h1>
          <ul className='app-1-items'>
            {dropitem.map(item =>{
               return (
                  <li 
                  draggable
                  onDragStart={handleDragItem}
                  onDragEnd={handleDragEnd}
                  key={item} className='drop'>{item}</li>
               );
            })}
          </ul>
       </div>
       <div className="app-2"  >
          <div className="app-2-inner" 
          
          onDragEnter={handleDragEnter}
          onDragExit={handleDragExit}
          
          >
            <Dropbox count={dropstack.length}/>
          </div>
       </div>
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
       
    </div>
  );
}

export default App;
