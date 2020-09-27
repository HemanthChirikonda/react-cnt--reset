import React from 'react';


class Buttonapp extends React.Component {
    state={cnt:0,
    width:0};
    clickhandler1=()=>{
      
       let flag=this.state.cnt;
       flag++;
       this.setState({cnt:flag});
    }
    clickhandler2=()=>{
      
      let flag=this.state.cnt;
      flag--;
      this.setState({cnt:flag});
   }
   clickhandler3=()=>{
      
    this.setState({cnt:0});
 }
 
  render() {
    const style = {
      color: 'red',
      fontSize: 200,
      "textAlign":"center"
    };
    const buttonstyle ={
      color: 'red',
      "margin-left":"585px",
      "width":"35px"
    }
    return (
      
        <div>   
       <div style={style}>{this.state.cnt}</div>
            <button style={buttonstyle} onClick={this.clickhandler1}>
              +
            </button>
            <button style={
              {"margin-left":"35px"}} onClick={this.clickhandler3}> Reset</button>
            <button  style={
              {"margin-left":"55px", "width":"35px"}} onClick={this.clickhandler2}>
              -
            </button>
            
        </div>
    )
  }
}
export default Buttonapp; 
