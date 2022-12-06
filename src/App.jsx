
import './App.css';
import { useState,useRef } from 'react';
import Dropbox from './Dropbox';
import Dragabble from './components/Dragabble';
import Dropstack from './components/Dropstack';
function MiddleDropBox({ dropstack ,handleDragOver,handleDrop,dragZone,handleDragEnter,handleDragExit}) {
   return (
      <div className="app-2" 
      >
         <div className="app-2-inner"
            droppable
            onDragOver={(e)=>handleDragOver(e)} 
            onDrop={(e) => handleDrop(e)}
            ref={dragZone}
            onDragEnter={handleDragEnter}
            onDragExit={handleDragExit}
            
         >
            <Dropbox count={dropstack.length} />
         </div>
      </div>
   );
}

function App() {
   const [dropitem, setDropItem] = useState(["A", "B", "C"])
   const [dropstack, setDropStack] = useState([
      { id: 1, name: "A" },
      { id: 2, name: "B" },
      { id: 3, name: "C" },
      { id: 4, name: "B" }
   ])
   const [dragTouch,setDragTouch]=useState({
      display : false,
      posX:0,
      posY:0,
      val :'X'
   });
   const [finalLoaction,setFinalLocation]=useState({
      x:0,
      y:0,
      val : 'X'
   });

   const dragZone = useRef();

   const handleStackDelete = (e) =>{
      const stack_id = e.target.id
      // console.log(stack_id);
      let newDropStack=dropstack.filter(stack => stack.id != stack_id);
      setDropStack(newDropStack);
   }

   const handleDragStart = (e,item)=>{
      e.dataTransfer.setData("stackitem",item);
      // console.log("Drag starts");
   }
   const handleDragOver = (e) => {
      e.preventDefault();
      // console.log("Dragging over");
   }
   const handleDrop = (e) => {
      let curr_item = e.dataTransfer.getData("stackitem");
      setDropStack([...dropstack,{
         id : new Date().getTime(),
         name : curr_item
      }]);
      dragZone.current.classList.remove("app-2-hover");
      // console.log("Dropped");
   }
   const handleDragEnter = (e) => {
      dragZone.current.classList.add("app-2-hover");
   }
   const handleDragExit =  (e) => {
      dragZone.current.classList.remove("app-2-hover");
   }

   const handleTouchStart = (e,item) => {
      
      // console.log("Touch start");
   }
   const handleTouchMove = (e) => {
      
      
      let x=e.touches["0"].clientX;
      let y=e.touches["0"].clientY;
      setFinalLocation({
         x : x,
         y : y,
         val : e.target.textContent
      });
      setDragTouch({
         display : true,
         posX : x-50,
         posY : y-50,
         val : e.target.textContent
      });
   }
   const handleTouchEnd = (e) => {
      e.preventDefault();
      
      setDragTouch({
         display : false,
         posX : 0,
         posY : 0,
         val : ''
      });
      if(finalLoaction.x >= 150 && finalLoaction.x <= 150+300 && finalLoaction.y >= 300 && finalLoaction.y <= 300+170+50){
         setDropStack([...dropstack,{
            id : new Date().getTime(),
            name : finalLoaction.val
         }]);
      }
      
   }
   return (
      <div className="app">
         <Dragabble
            dropitem={dropitem}
            handleDragStart={handleDragStart}
            handleTouchStart={handleTouchStart}
            handleTouchMove={handleTouchMove}
            handleTouchEnd={handleTouchEnd}
            dragTouch={dragTouch}
         />

         <MiddleDropBox
            dropstack={dropstack}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
            dragZone={dragZone}
            handleDragEnter={handleDragEnter}
            handleDragExit={handleDragExit}
            
         />

         <Dropstack
            dropstack={dropstack}
            handleStackDelete={handleStackDelete}
         />

      </div>
   );
}

export default App;
