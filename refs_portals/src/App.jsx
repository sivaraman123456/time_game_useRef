

import './App.css'
import Player from './component/Player'
import TimerChallenge from './component/TimerChallenge'

function App() {

  return (
    <>
    
   <Player/>
   <div className="time-change">
    <TimerChallenge title="start time" timeSecond={1} />
    <TimerChallenge title="end time" timeSecond={3} />
    <TimerChallenge title="end time" timeSecond={3} />
    <TimerChallenge title="start time" timeSecond={1} />
    <TimerChallenge title="start time" timeSecond={1} />
    <TimerChallenge title="start time" timeSecond={1} />
</div>
    </>
  )
}

export default App
