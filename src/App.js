import React, { useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonFilter from './components/ButtonFilter';
import RangeSlider from './components/mySlider';
import {formaData, corteData, colorData, claridadData} from './constants/filterData';
function App() {
    var formaRef = React.createRef();
    var corteRef = React.createRef();
    var colorRef = React.createRef();
    var claridadRef = React.createRef();
    var test = React.createRef();
    var karrot = null;
    var cost = null;



    var loadReferences = () => {
      console.log(formaRef)
      
      const request = {
        shape: formaRef.current.state.selectedName,
        cut: corteRef.current.state.selectedName,
        color: colorRef.current.state.selectedName,
        clarity: claridadRef.current.state.selectedName,
        priceRange: cost,
        karrotRage: karrot
      }
      for(let key in request){
        if(!request[key]){
          alert('compa te hace falta selecionar algo !');
          return;
        }
      }

      console.log(request);
    }
    
    const resetVals = () => {
      formaRef.current.resetState();
      corteRef.current.resetState();
      colorRef.current.resetState();
      claridadRef.current.resetState();
      console.log(test);
    }

    const cheeto = (KarrotValue) => {
      karrot = KarrotValue;
    }
    const bandito = (CostValue) => {
      cost = CostValue;
    }

    const btnS = {
      "background-color":"#1724ab", 
      "color":"white",
      "height":"35px",
      "width":"150px",
      "margin-left": "35%"
    };
    const btnC = {
      "border-color":"#1724ab", 
      "color":"#1724ab",
      "height":"35px",
      "width":"150px",
      "margin-left": "20px"
    };

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td><ButtonFilter ref={formaRef} title={"FORMA"} rows={formaData} height={85} width={85}/> </td>
            <td> <ButtonFilter ref={corteRef} title={"CORTE"} rows={corteData} height={30} width={150}/> </td>
          </tr>
          <tr>
            <td><ButtonFilter ref={colorRef} title={"COLOR"} rows={colorData} height={30} width={150}/> </td>
            <td>  <RangeSlider title={"Quilataje"} show={true} range={[0.5, 30.0]} steps={0.5} secret={cheeto} /></td>
          </tr>
          <tr>
            <td> <ButtonFilter ref={claridadRef} title={"CLARIDAD"} rows={claridadData} height={30} width={150}/></td>
            <td>  <RangeSlider ref={test}  title={"Precio"} show={false} range={[200, 5000000]} steps={200} secret={bandito} /> </td>
          </tr>
        </tbody>
      </table>

        <br></br>
        
       
        <button style={btnS}  onClick={loadReferences}>BUSCAR</button>
        <button style={btnC} onClick={resetVals}>LIMPIAR FILTROS</button>
    </>
  );
}

export default App;
