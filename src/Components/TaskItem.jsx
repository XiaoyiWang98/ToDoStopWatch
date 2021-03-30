import React from "react";
import "../styles/TaskItem.css"
import { useStopwatch } from 'react-timer-hook';
function TaskItem(props){

    const {
        seconds,
        minutes,
        hours,
        isRunning,
        start,
        pause,
    } = useStopwatch({ autoStart: false });

    function click(){
        if(isRunning === false){
            start();
        }else{
            pause();
        }
    }

    function formatTime(input){
        let value = input.toString();
        if(value.length < 2){
            value = '0' + value;
        }
        return value;
    }

    return(
        <div className="watch" onClick={click} style={isRunning?{backgroundColor: "#6ddccf"}:{backgroundColor:"#ffcb91"}}>
            <div className="textDisplay">
                {props.text}
            </div>
            <div className="timeDisplay">
                {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
            </div>
        </div>
    );

}

export default TaskItem;