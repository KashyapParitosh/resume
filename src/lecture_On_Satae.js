import React, { Component } from "react";

// Class based
class App1 extends Component {
	state = {
		name: "Paritosh",
		balance: 0,
		cust : "Please set the coustomer type",
		transaction : [
			{ id: 1, desc:"paid for Hotstar", amount:500, type:"debit" },
			{ id: 2, desc:"credit amount from rahul", amount:1500, type:"credit" }
		]
	};

	updateBalance = (amount) => {
		this.setState({ balance : amount })
		// this.setState({ balance: amount }, ()=>{
			// if(this.state.balance >= 100000){
			// 	this.setState({cust:"Premium"})
			// } else {
			// 	this.setState({cust:"Regular"})
			// }
			// we can do the task by this way also but in this its rendering two times, one for this.setState for balance, and another for setState of cust which is ethically right so we can do this task by another way also, memtion below 
		// });
	};

	render() {
		return (
			<div>
				<h1>Hello {this.state.name}!</h1>
				<h4>Balance {this.state.balance}</h4>
				<button onClick={() => this.updateBalance(1000000000)}>
					Update Amount
				</button> 
				{this.state.balance >= 100000 ? <p>You are a Premium customer</p> : <p>You are a Regular customer</p>}
			</div>
		);
	}
}

// Default export - only one a file
export default App1;
