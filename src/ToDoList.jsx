import React, { useState }  from 'react'

function ToDoList(){
    const[tasks,setTasks] = useState(["walk the dog","make a fight","over throw goverment"]);
    const[newTask,setNewTask] = useState("");

    function handleInputChange(event){
       setNewTask(event.target.value);
    }

    function addTask(){
      if(newTask.trim() !== "")
      {
      setTasks(t => [...t,newTask]);
      setNewTask("");             
      }
    }

    function deleteTask(index){
       const updateTasks = tasks.filter((_,i) => i !== index);
       setTasks(updateTasks);
    }

    function moveTaskUp(index){
         if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
         }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
         }
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
                           <button className="move-button" onClick={() => moveTaskUp(index)}>UP</button>
                           <button className="move-button" onClick={() => moveTaskDown(index)}>DOWN</button>
                       </li>
                      )}
                  </ol>
            </div>
        </div>
    </>
  );
}

export default ToDoList