import React, { useState,useEffect} from "react";
import CountdownTimer from "../components/CountdownTimer/CountdownTimer";
import 'bootstrap/dist/css/bootstrap.css';
import {FaYoutube,FaFacebook,FaLinkedinIn,FaInstagram,FaTwitter } from "react-icons/fa";


function Home() {
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();

    let interval;

    const startTimer = () =>{
        const countDownDate = new Date("July 15,2022").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor(
                (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
            const minutes = Math.floor(
                (distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor( (distance %( 60 * 1000)) / 1000);

            if(distance < 0){
                // stop timer
                clearInterval(interval.current);
            }else{
                // Update the timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        });
    };

    useEffect( () => {
       startTimer(); 
    });

    const divBody = {
        textAlign: 'center',
        color:"#fff"
    }
    const myH1 ={
        textAlign: 'center',
        marginTop:'5em',
    }


    return (
        <div style={divBody} class="p-sm-3">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
                <h1 style={myH1}  >SOMETHING AWESOME IS <br/>COMING SOON</h1>
                <p className="para">your all-in-one affiliate marketing tracking software <span>track</span>, <span>automate</span> and <br/>
                    <span>optimize</span> your campaigns.
                </p>
                <div className="countDownTimer p-sm-2">
                    <CountdownTimer
                         countdownTimeStampMs={367643673600000}
                      />
                    
                </div>

            <div class="box">
                <form class="form-inline">
                    <div class="form-group">
                        <label class="sr-only" for="exampleInputEmail3">First Name.</label>
                        <input type="text" className="form-control inputOffset" placeholder="First Name." />
                    </div>
                    <div class="form-group">
                        <label class="sr-only" for="exampleInputPassword3">Last Name</label>
                        <input type="text" className="form-control inputOffset" placeholder="Last Name." />
                    </div>
                </form>
                <div class="form-control">
                    <input type="text" class="input" placeholder="Enter your email adress..." />
                    <button class="btn btnSub">JOIN OUR WAITING LIST</button>
                </div>
            </div>
            <div className="icons">
                <div className="icon1"><FaYoutube  /> </div>
                <div className="icon1"><FaFacebook /> </div>
                <div className="icon1"><FaLinkedinIn /> </div>
                <div className="icon1"><FaInstagram /> </div>
                <div className="icon1"><FaTwitter /> </div>
            </div>

            <div className="condit">
                <div>
                    <p>
                        Terms of services
                    </p>
                </div>
                <div>
                    <p>
                        Privacy policy
                    </p>
                </div>
            </div>

            <div className="condit">
                <div>
                    <p>
                        Copyright 2021 @ Peddle Technologies. All Rights Reserved
                    </p>
                </div>
                
            </div>
            
            <div className="elipse">
            </div>
           
    </div>
        
    );
}

export default Home;