import { useState } from 'react';
import '../styles/App.css';
import Item from './Item';
import './TaskItem'
function App(){

  const [tasks, setTasks] = useState([]);

  function deleteItem(id){
    setTasks(prevTasks => prevTasks.filter((tasks, index) => index !== id));
  }

  function add(){
    let task = prompt("Please enter the name of your task");

    if(task != null && task !== ""){
      setTasks(prevTasks=>[...prevTasks, task]);
    }
  }

  return (
    <div className="App">
      <h1 contentEditable="true">ToDo StopWatch</h1>
      {tasks.map((task, id) => <Item deleteItem = {deleteItem} id={id} text={task}/>)}
      <img
        className="add"
        onClick={add}
        src={process.env.PUBLIC_URL+'/add.svg'} 
        alt="Delete"
      />
    </div>
  );
}

export default App;
