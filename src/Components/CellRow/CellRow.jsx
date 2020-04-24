import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import Cell from '../Cell/Cell';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({

    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        background: '#221E30',
    },
}));

export default function CellRow(props) {
    const styles = useStyles();
    const rowCells = props.cells;
    return (
        <GridList className={styles.gridList} cols={0} cellHeight="auto">
            {rowCells.map(cell => (
                <GridListTile >
                    <Cell cellDetails={cell} />
                </GridListTile>
            ))}
        </GridList>
    );
};

