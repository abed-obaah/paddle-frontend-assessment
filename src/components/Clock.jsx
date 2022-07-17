// import React, {Fragment} from 'react';

import React, {useState,useEffect} from 'react';
import {getRemainingTimeUntilMsTimestamp} from './CountdownTimer/Utils/CountdownTimerUtils';
import 'bootstrap/dist/css/bootstrap.css';

const defaultRemainingTime ={
    seconds:'00',
    minutes:'00',
    hours:'00',
    days:'00'
}

const  Clock = ({countdownTimeStampMs}) =>{
   const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
   useEffect(() => {
   const intervalId =  setInterval(() => {
            updateRemainingTime(countdownTimeStampMs);
    }, 1000);
    return() => clearInterval(intervalId)
   },[countdownTimeStampMs]);
   function updateRemainingTime(Countdown){
    setRemainingTime(getRemainingTimeUntilMsTimestamp(Countdown));
   }
    return(
        <React.Fragment>
        
        <section className="timer-container p-sm-2">
           <section className="timer">
               <div className="clock">
                   <section class='time '>
                       <p class="p-sm-5">{remainingTime.days}</p>
                       <small>Days</small>
                   </section>
                   {/* <span>:</span> */}
                   <section className='time'>
                       <p>{remainingTime.hours}</p>
                       <small>Hours</small>
                   </section>{""}
                   {/* <span>:</span> */}
                   <section className='time'>
                       <p>{remainingTime.minutes}</p>
                       <small>Minutes</small>
                   </section>{""}
                   {/* <span>:</span> */}
                   <section className='time'>
                       <p>{remainingTime.seconds}</p>
                       <small>Seconds</small>
                   </section>
               </div>
           </section>
       </section>
        </React.Fragment>
      
    );
}
export default Clock;