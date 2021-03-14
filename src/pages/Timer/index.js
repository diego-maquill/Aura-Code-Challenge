// Globals
import "./styles.scss";
import React, { useState } from "react";

// Components
import { Button } from "components/Button";

// Sub-component
function Expired() {
  return (
    <div className="aura-expired">
      <div className="aura-expired-emoji">⚠️</div>
      <div className="aura-expired-text">Timer expired!</div>
    </div>
  );
}

// Component
//fuction Timer(){
function Timer(time) {
  // Hooks - state
  //const [counter, setCounter] = useState(0);
  const [timeLeft, setTimeLeft] = useState(time);
  const [countDownShow, setcountDownShow] = useState(false);

  // TODO: implement counter...
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(value => value - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  const outputTimeStamp = timeValue => {
    let minutes = timeValue >= 60 ? Math.floor(timeValue / 60) : 0;
    let seconds = timeValue % 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return timeValue > 0 ? `Time left - ${minutes}:${seconds}` : (<div>
      <p>Click Reset above to stop the alarm</p>
      <span>{outputTimeStamp(timeLeft)}</span>
      {/*     <audio src="./alarm.mp3" autoPlay loop></audio> */}
    </div>);
  }



  // Render
  return (
    <div className="aura-page aura-timer">
      <h1>Timer</h1>

      <div className="aura-page-content">
        <div className="aura-timer-clock">0:00</div>
        {counter <= 0 ? <Expired /> : null}

        <div className="aura-timer-buttons">
          <Button>Start</Button>
          <Button type="submit">Reset</Button>
        </div>
      </div>
    </div>
  );
}

export { Timer };
