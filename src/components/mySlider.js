import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
      width: 300,
    },
  });
function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState([0.5, 30.0]);
  
    const handleChange = (event, newValue) => {
        props.secret(newValue);
        setValue(newValue);
    };
  
    return (
      <div className={classes.root} style={{"margin-left": "20px"}}>
        <Typography id="range-slider" gutterBottom>
          {props.title}
        </Typography>
        {props.show && (
            <div>
            <img src={require('../assets/Quilataje/pequeno.png')}/>
            <img  style={{"margin-left": "80%"}}  src={require('../assets/Quilataje/grande.png')}/>
            </div>
        )
        
        }
        
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
          min={0.50}
          max={30.00}
          step={0.5}
        />
        <table>
            <td> <input type="number" id="lowEnd" name="points" step="0.5" style={{"width":"50px"}}/></td>
            <td style={{"margin-left": "100px"}}>  <input type="number" id="highEnd" name="points" step="0.5" style={{"width":"50px"}}/></td>
        </table>
        <div>
            
            
        </div>
      </div>
    );
  }

