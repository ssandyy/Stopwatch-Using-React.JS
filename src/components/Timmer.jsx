import React, { useEffect, useState } from 'react';

const Timmer = () => {
    const [time, setTime] = useState(0);
    const[isRunning, setIsRunning] = useState(false);

useEffect(()=> {
    let timmer;
    if(isRunning){
        timmer = setInterval(()=> setTime(time => time+1),1000);
    }
    return () => clearInterval(timmer);
    }, [isRunning]);


const startWatch = () => setIsRunning(true);
const pauseWatch = () => setIsRunning(false);
const resetWatch = () => {
    setIsRunning(false);
    setTime(0);
}

const formatTime = (time) => {
    const hours = String(Math.floor(time / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

  
return (
    <>
    <div className="container">
      <div className="stopwatch">
        <h2>React Stopwatch Feb 2025</h2>
        <div className="display">{formatTime(time)}</div>
        <div className="controls">
            <button className='start-button' onClick={startWatch}>Start</button>
            <button className='pause-button' onClick={pauseWatch}>Pause</button>
            <button className='reset-button' onClick={resetWatch}>Reset</button>
            </div>
      </div>
    </div>
    </>
  )
}

export default Timmer;