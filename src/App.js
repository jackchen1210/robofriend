import React,{Component} from 'react';
import CardList from './CardList';
//import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll.js';

class App extends Component{

	constructor(){

		super();
		this.state = {
			robots : [],
			searchfield : ""
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
  		.then(response => response.json())
  		.then(user =>this.setState({robots:user}));
	}

onSearchChange = (event) => {this.setState({searchfield: event.target.value});
}

	render(){
		const {robots,searchfield} = this.state;
		const filterRobots = robots.filter(robot =>{return robot.name.toLowerCase().includes(searchfield.toLowerCase());
			});

		if(!robots.length){
			return (<h1 className="tc">Loading Page</h1>);
		}else
		{	
			return (
				<div className="tc">
					<h1>Robots Friends</h1>
					<SearchBox searchChange ={this.onSearchChange}/>
					<Scroll>
					<CardList robots={filterRobots}/>	
					</Scroll>
				</div>
					);
		}
	}
}

export default App;