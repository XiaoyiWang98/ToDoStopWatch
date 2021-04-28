import React from "react";
import "../styles/TaskItem.css"
import { useStopwatch } from 'react-timer-hook';
function TaskItem(props){

    const stopwatchOffset = new Date(); 
    stopwatchOffset.setSeconds(stopwatchOffset.getSeconds() + props.task["offset"]);

    const {
        seconds,
        minutes,
        hours,
        isRunning,
        start,
        pause,
    } = useStopwatch({ autoStart: false, offsetTimestamp: stopwatchOffset});

    function click(){
        if(isRunning === false){
            start();
        }else{
            props.timeUpdate(props.task, hours, minutes, seconds);
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
                {props.task["name"]}
            </div>
            <div className="timeDisplay">
                {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
            </div>
        </div>
    );

}

export default TaskItem;