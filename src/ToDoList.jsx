import React, { useState }  from 'react'

function ToDoList(){
    const[tasks,setTasks] = useState(["walk the dog","make a fight","over throw goverment"]);
    const[newTask,setNewTask] = useState("");

    function handleInputChange(event){
       setNewTask(event.target.value);
    }

    function addTask(){

    }

    function deleteTask(index){

    }

    function moveTaskUp(index){

    }

    function moveTaskDown(index){

    }
  return(
    <>
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input type="text"
                       placeholder="Enter task..."
                       value={newTask}
                       onChange={handleInputChange} />
                 <button 
                     className="add-button"
                     onClick={addTask}>
                      Add 
                     </button>
                  <ol>
                      {tasks.map((element,index) => 
                       <li key={index}>
                           <span className="text">{element}</span>
                           <button className='delete-button' onClick={() => deleteTask(index)}>delete</button>
                           <button className="up-button" onClick={() => moveTaskUp(index)}>UP</button>
                           <button className="down-button" onClick={() => moveTaskDown(index)}>DOWN</button>
                       </li>
                      )}
                  </ol>
            </div>
        </div>
    </>
  );
}

export default ToDoList