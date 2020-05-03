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
    const [value, setValue] = React.useState([props.range[0], props.range[1]]);
  
    const handleChange = (event, newValue) => {
        props.secret(newValue);
        setValue(newValue);
    };

    const lowerChange = (event) => {
        setValue([value[0]+props.steps, value[1]]);
    }

    const highChange = (event) => {
        setValue([value[0], value[1]-props.steps]);
    }
  
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
          min={props.range[0]}
          max={props.range[1]}
          step={props.range[0]}
        />
        <table>
            <td> <input value={value[0]} onChange={lowerChange} type="number" id="lowEnd" name="points" step="props.range[0]" style={{"width":"70px"}}/></td>
            <td style={{"margin-left": "100px"}}>  <input onChange={highChange} value={value[1]}  type="number" id="highEnd" name="points" step="props.range[0]" style={{"width":"70px"}}/></td>
        </table>
        <div>
            
            
        </div>
      </div>
    );
  }

