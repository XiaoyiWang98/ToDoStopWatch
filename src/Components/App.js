import Cookies from 'js-cookie';
import { useState } from 'react';
import '../styles/App.css';
import Item from './Item';
import './TaskItem'
function App(){

  // get cookie
  const cookie = Cookies.get();

  // operation for the title;
  let lastTitle = cookie["title"];

  if(lastTitle === undefined){
    lastTitle = "Todo StopWatch";
    Cookies.set("title", lastTitle);
  }

  const [title, setTitle] = useState(lastTitle);

  function changeTitle(){
    let name = prompt("Please enter the name of your list:");
    if(name != null && name !== ""){
      Cookies.set("title", name);
      setTitle(name);
    }
  }

  // operations for the tasks-list
  let lastTasks = cookie["tasks"];
  if(lastTasks === undefined){
    lastTasks = "[]";
  }

  let TasksObj = JSON.parse(lastTasks);

  const [tasks, setTasks] = useState(TasksObj);

  function add(){
    const taskName = prompt("Please enter the name of your task");
    if(taskName != null && taskName !== ""){

      const task = {"name": taskName, "offset": 0};
      setTasks(prevTasks=>{
        const list = [...prevTasks, task];
        Cookies.set("tasks", JSON.stringify(list));
        return list;
      });
    }
  }

  function timeUpdate(task, hours, minutes, seconds){
    setTasks(prevTasks => {
      prevTasks.forEach(element => {
        if(element === task){
          element["offset"] = 3600*hours+60*minutes+seconds;
        }
      }, prevTasks);
      Cookies.set("tasks", JSON.stringify(prevTasks));
      return prevTasks;
    })
  }

  function deleteItem(id){
    setTasks(prevTasks => { 
      const list = prevTasks.filter((tasks, index) => index !== id);
      Cookies.set("tasks", JSON.stringify(list));
      return list;
    });
  }

  return (
    <div className="App">
      <h1 onClick={changeTitle}>{title}</h1>
      {tasks.map((task, id) => <Item key = {id} timeUpdate={timeUpdate} deleteItem = {deleteItem} id={id} task={task}/>)}
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
