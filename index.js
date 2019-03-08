import React from 'react';
import ReactDOM from "react-dom";
import Button from "./button.js";
import "./index.css";

class Board extends React.Component{
	
	state = {
		Number : "",
		Result : "",
		num1 : "",
		num2 : "",
		todo : "",
		calculated : false

	};

	
	render() {
		if(this.state.todo === ""){
			return(
			<div className="board">	
				<div className="DA">{this.state.num1}</div>
				<Button HC={this.numberclick} FC={this.fclick} E={this.equate} R={this.reset}></Button>
			</div>
		);
		}else if(this.state.num2 === ""){
			return(
			<div className="board">	
				<div className="DA">{this.state.todo}</div>
				<Button HC={this.numberclick} FC={this.fclick} E={this.equate} R={this.reset}></Button>
			</div>
			);
		} else if(!this.state.calculated) {
			return(
			<div className="board">	
				<div className="DA">{this.state.num2}</div>
				<Button HC={this.numberclick} FC={this.fclick} E={this.equate} R={this.reset}></Button>
			</div>
		);
		}else{
			return(
			<div className="board">	
				<div className="DA">{this.state.Result}</div>
				<Button HC={this.numberclick} FC={this.fclick} E={this.equate} R={this.reset}></Button>
			</div>
			);
		};
	}

	numberclick =(num)=>{
		var x = "";
		
		if(this.state.todo === ""){
			x = this.state.num1;
			x +=num;
			console.log(x);
			console.log(this.state.todo);

			this.setState({
				num1 : x
			}); 
		} 
		else{
			x = this.state.num2;
			x +=num;
			console.log(x);
			console.log(this.state.todo);

			this.setState({
				num2 : x
			}); 
		}
	}

	fclick = (input) =>{
		this.setState({
			todo : input
		});
	}

	equate = () =>{
		if(this.state.todo === "+"){
			this.setState({
				calculated : true,
				Result : this.state.num1 + this.state.num2 
			});
		}
		else if(this.state.todo === "-"){
			this.setState({
				calculated : true,
				Result : this.state.num1 - this.state.num2 
			});
		}
		else if(this.state.todo === "*"){
			this.setState({
				calculated : true,
				Result : this.state.num1 * this.state.num2 
			});
		}
		else if(this.state.todo === "/"){
			this.setState({
				calculated : true,
				Result : this.state.num1 / this.state.num2 
			});
		}
	}

	reset = () =>{
		this.setState({
			Number : "",
			Result : "",
			num1 : "",
			num2 : "",
			todo : "",
			calculated : false
		});
	}


}




ReactDOM.render(<Board/>,document.querySelector("#root"));