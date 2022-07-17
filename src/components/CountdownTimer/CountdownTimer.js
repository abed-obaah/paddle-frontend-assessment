import React, {useState,useEffect} from 'react';
import {getRemainingTimeUntilMsTimestamp} from './Utils/CountdownTimerUtils';

const defaultRemainingTime ={
    seconds:'00',
    minutes:'00',
    hours:'00',
    days:'00'
}

const CountdownTimer = ({countdownTimeStampMs}) =>{
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
                  {/* <div>
            <span>{remainingTime.days}</span>
            <span>days</span>
            <span>{remainingTime.hours}</span>
            <span>hours</span>
            <span>{remainingTime.minutes}</span>
            <span>minutes</span>
            <span>{remainingTime.seconds}</span>
            <span>seconds</span>
        </div>  */}
        
        <section className="timer-container">
           <section className="timer">
               <div className="clock">
                   <section className='time'>
                       <p>{remainingTime.days}</p>
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

export default CountdownTimer;