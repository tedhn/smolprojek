import React from 'react';

import "./index.css";


class Button extends React.Component{
	render(){
		return(
			<div>
				<div classame='BR'>
				<button id="7" onClick={this.evennum7} value="7">7</button>
				<button id="8" onClick={this.eventnum8} value="8">8</button>
				<button id="9" onClick={this.eventnum9} value="9">9</button>
				<button onClick={this.eventdiv}>/</button></div>
				<div className="BR">	
				<button id="4" onClick={this.eventnum4} value="4">4</button>
				<button id="5" onClick={this.eventnum5} value="5">5</button>
				<button id="6" onClick={this.eventnum6} value="6">6</button>
				<button onClick={this.eventdiv}>*</button></div>
				<div className="BR">	
				<button id="1" onClick={this.eventnum1} value="1">1</button>
				<button id="2" onClick={this.eventnum2} value="2">2</button>
				<button id="3" onClick={this.eventnum3} value="3">3</button>
				<button onClick={this.eventdiv}>-</button></div>
				<div className="BR">
				<button id="0" onClick={this.eventnum0} value="0">0</button>
				<button onClick={this.eventclear}>C</button>
				<button onClick={this.eventcalculate}>=</button>
				<button onClick={this.eventadd}>+</button>
				</div>
			</div>
		);
	}

	eventnum0=()=>{
		var num = 0;
		this.props.HC(num);
	}

	eventnum1=()=>{
		var num = 1;
		this.props.HC(num);
	}

	eventnum2=()=>{
		var num = 2;	
		this.props.HC(num);
	}

	eventnum3=()=>{
		var num = 3;
		
		this.props.HC(num);
	}	
	
	eventnum4=()=>{
		var num = 4;
		this.props.HC(num);
	}

	eventnum5=()=>{
		var num = 5;
		this.props.HC(num);
	}	
	eventnum6=()=>{
		var num = 6;
		this.props.HC(num);
	}

	eventnum7=()=>{
		var num = 7;
		this.props.HC(num);
	}	
	eventnum8=()=>{
		var num = 8;
		this.props.HC(num);
	}

	eventnum9=()=>{
		var num = 9;
		this.props.HC(num);
	}

	eventdiv=()=>{
		var func = "/";
		this.props.FC(func);
	}
	eventadd=()=>{
		var func = "+";
		this.props.FC(func);
	}
	eventmulti=()=>{
		var func = "*";
		this.props.FC(func);
	}
	eventsub=()=>{
		var func = "-";
		this.props.FC(func);
	}
	eventclear=()=>{
		this.props.R();
	}

	eventcalculate = () =>{
		this.props.E();
	}
}

export default Button;