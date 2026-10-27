import {useState}  from 'react'
import styles from'./task.module.css'

function Task(){
  
   const [tasks ,setTasks]=useState([
    "go to home","go to jym"
   ])
   const[inputValue,setinputValue]=useState("");
   const addTask=()=>{
        
           setTasks([...tasks,inputValue])
           setinputValue("")
    
   }
   function removeTask(index){
      setTasks(tasks.filter((e,i)=>i !==index))
   }
    return( 
        < div className={styles.container}>
        <h1>To Do List</h1>
        <input type="text" onChange={(e)=>{setinputValue(e.target.value)}} value={inputValue} placeholder="What Will You Do ?"    />
        <button type="submit" onClick={addTask}>Add Task</button>
        <ul  className={styles.uls}>
             {tasks.map((task,index)=>{
            return( 
           <>
                <li  style={{listStyle:"none"}} key={index}> <h3>{task}</h3> 
                  
                    <button onClick={()=>removeTask(index)}>X</button>

                </li>
                    
             </>
            )
            console.log(task)
           })}
        </ul>
           
        
        </div>

    )
}

export default Task