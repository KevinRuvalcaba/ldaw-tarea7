
import React from 'react';
export default class ButtonImg extends React.Component {

    
    gotClicked = event => {
        this.props.setSelected(this.props.name);
    }

    render(){


        const centered = {
            "display": "block",
            "margin-left": "auto",
            "margin-right": "auto",
            "width": "50%",
            "height": "36px",
            "width": "36px"
          }

        return(
            <>
            <img style={centered} src={this.props.imageComponent} onClick={this.gotClicked} />
            <label>{this.props.name}</label>
            </>
        )
    }

}




/*

            <div style={Container}>
                <img src={this.props.imageComponent} alt=''/>
                <br/>
                <div style={centered}>{this.props.name}</div>
            </div>
            
*/