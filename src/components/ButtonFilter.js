import React from 'react';
import ButtonImg from './ButtonImg';
export default class ButtonFilter extends React.Component {
    state = {
        selectedName: null,
    }
    componentDidMount(){
        this.setState({selectedName: null})
    }

    resetState(){
        this.setState({selectedName: null});
    }

    setSelected = (childName) =>{
        this.setState({selectedName: childName})
        
    }

    render(){
           
        const cool = {"marginLeft":"10px"};
        const nice = {"width":`${this.props.width}px`, "height": `${this.props.height}px`,"text-align": "center"};
        const selected = {"backgroundColor":"#e6f2ff", "width":`${this.props.width}px`, "height": `${this.props.height}px`, "text-align": "center"};
        var result = [];
        return(
            <> 
                <div style={cool}>
                    <label>{this.props.title}</label>
                    <table border ="1" cellSpacing="0" >
                        <tbody>
                                {this.props.rows.map((row, _) => {
                                    var holder = [];
                                    for(let name in row){
                                        if(this.state.selectedName == name){
                                            holder.push(<td style={selected}> <ButtonImg imageComponent={row[name]} name={name} setSelected={this.setSelected}/> </td> )
                                        }else{
                                            holder.push(<td style={nice}> <ButtonImg imageComponent={row[name]} name={name} setSelected={this.setSelected}/> </td> )
                                        }
                                        
                                    }
                                    result.push(<tr> {holder}</tr>)
                                })
                                }
                                {result}
                            
                        </tbody>
                    </table>
                </div>
            </>
        )
    }

}


/*

                <table>
                    <tbody>
                        {this.props.rows.forEach(row => {
                            row.forEach(element => {
                                return <ButtonImg imageComponent={require(element.path)}/>
                            })
                        })}
                    </tbody>
                </table>

*/