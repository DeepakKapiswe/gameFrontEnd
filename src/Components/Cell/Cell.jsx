import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import blank from './assets/blank.png';

import robo from './assets/robo.png';
import roboL from './assets/roboL.png';
import roboD from './assets/roboD.png';
import roboDL from './assets/roboDL.png';
import roboR from './assets/roboR.png';
import roboRL from './assets/roboRL.png';
import roboRD from './assets/roboRD.png';
import roboRDL from './assets/roboRDL.png';
import roboU from './assets/roboU.png';
import roboUL from './assets/roboUL.png';
import roboUD from './assets/roboUD.png';
import roboUDL from './assets/roboUDL.png';
import roboUR from './assets/roboUR.png';
import roboURL from './assets/roboURL.png';
import roboURD from './assets/roboURD.png';
import roboURDL from './assets/roboURDL.png';

import vis from './assets/vis.png';
import visL from './assets/visL.png';
import visD from './assets/visD.png';
import visDL from './assets/visDL.png';
import visR from './assets/visR.png';
import visRL from './assets/visRL.png';
import visRD from './assets/visRD.png';
import visRDL from './assets/visRDL.png';
import visU from './assets/visU.png';
import visUL from './assets/visUL.png';
import visUD from './assets/visUD.png';
import visUDL from './assets/visUDL.png';
import visUR from './assets/visUR.png';
import visURL from './assets/visURL.png';
import visURD from './assets/visURD.png';
import visURDL from './assets/visURDL.png';

import obs from './assets/obs.png';




const useStyles = makeStyles(({ breakpoints, spacing }) => ({
    cell: {
        width: 50,
        height: 50,
        background: '#abcdfe',
    },
}));


export default function Cell(props) {
    const cD = props.cellDetails
    const styles = useStyles();
    return (
        <div className={styles.cell}>
            {getCellImg(cD.cellCode)}
        </div>
    );
};


function getCellImg(cellCode) {
    var cellCodeToImg = {
        'Blank': <img src={blank} alt="blank" />
      , 'Robo': <img src={robo} alt='robo' />
      , 'RoboL': <img src={roboL} alt='roboL' />
      , 'RoboD': <img src={roboD} alt='roboD' />
      , 'RoboDL': <img src={roboDL} alt='roboDL' />
      , 'RoboR': <img src={roboR} alt='roboR' />
      , 'RoboRL': <img src={roboRL} alt='roboRL' />
      , 'RoboRD': <img src={roboRD} alt='roboRD' />
      , 'RoboRDL': <img src={roboRDL} alt='roboRDL' />
      , 'RoboU': <img src={roboU} alt='roboU' />
      , 'RoboUL': <img src={roboUL} alt='roboUL' />
      , 'RoboUD': <img src={roboUD} alt='roboUD' />
      , 'RoboUDL': <img src={roboUDL} alt='roboUDL' />
      , 'RoboUR': <img src={roboUR} alt='roboUR' />
      , 'RoboURL': <img src={roboURL} alt='roboURL' />
      , 'RoboURD': <img src={roboURD} alt='roboURD' />
      , 'RoboURDL': <img src={roboURDL} alt='roboURDL' />
      , 'Vis': <img src={vis} alt='vis' />
      , 'VisL': <img src={visL} alt='visL' />
      , 'VisD': <img src={visD} alt='visD' />
      , 'VisDL': <img src={visDL} alt='visDL' />
      , 'VisR': <img src={visR} alt='visR' />
      , 'VisRL': <img src={visRL} alt='visRL' />
      , 'VisRD': <img src={visRD} alt='visRD' />
      , 'VisRDL': <img src={visRDL} alt='visRDL' />
      , 'VisU': <img src={visU} alt='visU' />
      , 'VisUL': <img src={visUL} alt='visUL' />
      , 'VisUD': <img src={visUD} alt='visUD' />
      , 'VisUDL': <img src={visUDL} alt='visUDL' />
      , 'VisUR': <img src={visUR} alt='visUR' />
      , 'VisURL': <img src={visURL} alt='visURL' />
      , 'VisURD': <img src={visURD} alt='visURD' />
      , 'VisURDL': <img src={visURDL} alt='visURDL' />
      , 'Obs' : <img src={obs} alt='obs' /> 
    };
    return (cellCodeToImg[cellCode] || cellCodeToImg['blank']) ;
}



 
                // {(cD.isBlank !== null) && <img src={blank} alt="blank" />}
                // {(cD.isRobo !== null) && <img src={robo} alt='robo' />}
                // {(cD.isRoboL !== null) && <img src={roboL} alt='roboL' />}
                // {(cD.isRoboD !== null) && <img src={roboD} alt='roboD' />}
                // {(cD.isRoboDL !== null) && <img src={roboDL} alt='roboDL' />}
                // {(cD.isRoboR !== null) && <img src={roboR} alt='roboR' />}
                // {(cD.isRoboRL !== null) && <img src={roboRL} alt='roboRL' />}
                // {(cD.isRoboRD !== null) && <img src={roboRD} alt='roboRD' />}
                // {(cD.isRoboRDL !== null) && <img src={roboRDL} alt='roboRDL' />}
                // {(cD.isRoboU !== null) && <img src={roboU} alt='roboU' />}
                // {(cD.isRoboUL !== null) && <img src={roboUL} alt='roboUL' />}
                // {(cD.isRoboUD !== null) && <img src={roboUD} alt='roboUD' />}
                // {(cD.isRoboUDL !== null) && <img src={roboUDL} alt='roboUDL' />}
                // {(cD.isRoboUR !== null) && <img src={roboUR} alt='roboUR' />}
                // {(cD.isRoboURL !== null) && <img src={roboURL} alt='roboURL' />}
                // {(cD.isRoboURD !== null) && <img src={roboURD} alt='roboURD' />}
                // {(cD.isRoboURDL !== null) && <img src={roboURDL} alt='roboURDL' />}
                // {(cD.isVis !== null) 	  && <img src={vis} 	alt='vis' />}
                // {(cD.isVisL !== null) 	  && <img src={visL} 	alt='visL' />}
                // {(cD.isVisD !== null) 	  && <img src={visD} 	alt='visD' />}
                // {(cD.isVisDL !== null)   && <img src={visDL}   alt='visDL' />}
                // {(cD.isVisR !== null) 	  && <img src={visR} 	alt='visR' />}
                // {(cD.isVisRL !== null)   && <img src={visRL} 	alt='visRL' />}
                // {(cD.isVisRD !== null)   && <img src={visRD} 	alt='visRD' />}
                // {(cD.isVisRDL !== null)  && <img src={visRDL} 	alt='visRDL' />}
                // {(cD.isVisU !== null) 	  && <img src={visU} 	alt='visU' />}
                // {(cD.isVisUL !== null)   && <img src={visUL} 	alt='visUL' />}
                // {(cD.isVisUD !== null)   && <img src={visUD} 	alt='visUD' />}
                // {(cD.isVisUDL !== null)  && <img src={visUDL} 	alt='visUDL' />}
                // {(cD.isVisUR !== null)   && <img src={visUR} 	alt='visUR' />}
                // {(cD.isVisURL !== null)  && <img src={visURL} 	alt='visURL' />}
                // {(cD.isVisURD !== null)  && <img src={visURD} 	alt='visURD' />}
                // {(cD.isVisURDL !== null) && <img src={visURDL} alt='visURDL' />}
                // <img src ={vis} 	alt='vis' /> 