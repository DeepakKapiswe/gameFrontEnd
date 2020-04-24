import React, { Suspense, useState, useEffect} from 'react';
import './App.css';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DisplayGame from './Components/DisplayGame/DisplayGame';
import LinearProgress from './Components/Progress/LinearProgressBar';

const getGameUrl = 'http://192.168.43.28:7000/getGame';
const moveReqUrl = 'http://192.168.43.28:7000/moveReq';
const turnUpUrl  = 'http://192.168.43.28:7000/turnUp';
const turnRightUrl = 'http://192.168.43.28:7000/turnRight';
const turnDownUrl  = 'http://192.168.43.28:7000/turnDown';
const turnLeftUrl  = 'http://192.168.43.28:7000/turnLeft';
const resetGameUrl     = 'http://192.168.43.28:7000/resetGame';



function App() {
  const [url, setUrl] = useState(getGameUrl);
  const [count, setCount] = useState(0);
  const [roboDir, setRoboDir] = useState("UP")
  
  const move      = () => { setUrl(moveReqUrl);   setCount(count + 1); }
  const turnUp    = () => { setUrl(turnUpUrl);    setRoboDir("UP"); setCount(count + 1); }
  const turnRight = () => { setUrl(turnRightUrl); setRoboDir("RIGHT"); setCount(count + 1); }
  const turnDown  = () => { setUrl(turnDownUrl);  setRoboDir("DOWN"); setCount(count + 1); }
  const turnLeft  = () => { setUrl(turnLeftUrl);  setRoboDir("LEFT"); setCount(count + 1); }
  const resetGame = () => { setUrl(resetGameUrl); setCount(count + 1); }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount(count => count + 1);
  //     setUrl(moveReqUrl);
  //   }, 600);
  //   return () => clearInterval(interval);
  // }, []);

  function RoboDir() {


  if (roboDir === "UP") {return <h2>UP</h2>; }
  if (roboDir === "RIGHT") {return <h2>RIGHT</h2>; }
  if (roboDir === "DOWN") {return <h2>DOWN</h2>; }
  if (roboDir === "LEFT") {return <h2>LEFT</h2>; }
  
  }
  


  return (
    <Suspense
    fallback={<LinearProgress />}>
      <KeyboardEventHandler
         handleKeys={['w','up']}
         onKeyEvent={(key, e) => turnUp() } />
      <KeyboardEventHandler
         handleKeys={['d', 'right']}
         onKeyEvent={(key, e) => turnRight() } />
      <KeyboardEventHandler
         handleKeys={['s','down',]}
         onKeyEvent={(key, e) => turnDown() } />
      <KeyboardEventHandler
         handleKeys={['a','left']}
         onKeyEvent={(key, e) => turnLeft() } />
      <KeyboardEventHandler
         handleKeys={['space', 'enter']}
         onKeyEvent={(key, e) => move() } />
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <h1>Robo World</h1>
      <DisplayGame url={url} count={count} />
      
      <Grid container justify="center">
        <Grid item >
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick = {turnUp}
          >
            Turn Up
            </Button>
        </Grid>
        <Grid item >
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick = {turnRight}
          >
            Turn Right
            </Button>
        </Grid>
        <Grid item >
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick = {turnDown}
          >
            Turn Down
            </Button>
        </Grid>
        <Grid item >
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick = {turnLeft}
          >
            Turn Left
            </Button>
        </Grid>
        <Grid item >
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick = {move}
          >
            Move Robo
            </Button>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item >
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick = {resetGame}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
      <>
      <RoboDir/>  
      </>
    </Grid>
    </Suspense>
  );
}

export default App;
