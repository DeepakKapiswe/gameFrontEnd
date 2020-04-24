import React, { Suspense, useState, useEffect} from 'react';
import './App.css';

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

function App() {
  const [url, setUrl] = useState(getGameUrl);
  const [count, setCount] = useState(0);
  
  const move      = () => { setUrl(moveReqUrl);  setCount(count + 1); }
  const turnUp    = () => { setUrl(turnUpUrl);   setCount(count + 1); }
  const turnRight = () => { setUrl(turnRightUrl);setCount(count + 1); }
  const turnDown  = () => { setUrl(turnDownUrl); setCount(count + 1); }
  const turnLeft  = () => { setUrl(turnLeftUrl); setCount(count + 1); }

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1);
      setUrl(moveReqUrl);
    }, 600);
    return () => clearInterval(interval);
  }, []);


  return (
    <Suspense
    fallback={<LinearProgress />}>

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
    </Grid>
    </Suspense>
  );
}

export default App;
