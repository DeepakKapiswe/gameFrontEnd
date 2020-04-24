import React, { useState, useEffect} from 'react';
import GameWorld from '../GameWorld/GameWorld';
import LinearProgressBar from '../Progress/LinearProgressBar';


export default function DisplayGame(props) {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState(null);
  const url = props.url;
  const count = props.count;

  async function fetchData() {
    const res = await fetch(url);
    res
      .json()
      .then(res => setData(res))
      .catch(err => setErrors(err));
  }
  

  useEffect(() => {
    fetchData();
  },[count]);
  
  if (data !== null) {
    return <GameWorld rows={data.gdRows} /> ;
    }
  if (hasError) {
    return <h1>Oops!! Some Error Occured in DisplayGame Component</h1>
  }
  return <LinearProgressBar/> ;
};
