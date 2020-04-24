import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


import CellRow from '../CellRow/CellRow';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
    game: {
      background: '#aaaaaa',
      align:'center'
      },
}));


export default function GameWorld(props) {
    const styles = useStyles();
    const rows  = props.rows;
    return (
        <div className={styles.game}> 
            <Grid
                container
                alignItems="flex-start"
                direction="column"
            >
                {rows.map(row => (<CellRow cells={row} />) )}
            </Grid>
        </div>
        );
};

