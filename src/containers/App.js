import React,{Component} from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry';
import {setSearchfield,requestRobots} from '../action.js';
import { connect} from 'react-redux';

const mapStateToProps = state =>{
	return {
		searchfield:state.searchRobots.searchfield,
		robots:state.requestRobots.robots,
		isPending:state.requestRobots.isPending,
		error:state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) =>{

return {	onSearchChange: (event) => dispatch(setSearchfield (event.target.value)),
			onRequestRobots:()=> dispatch(requestRobots())
}}


class App extends Component{
	componentDidMount(){
		this.props.onRequestRobots();
	}

	render(){
		const {onSearchChange,searchfield,robots,isPending} = this.props;
		const filterRobots = robots.filter(robot =>{return robot.name.toLowerCase().includes(searchfield.toLowerCase());
			});

		if(isPending){
			return (<h1 className="tc">Loading Page</h1>);
		}else
		{	
			return (
				<div className="tc">
					<h1>Robots Friends</h1>
					<SearchBox searchChange ={onSearchChange}/>
					<Scroll>
					<ErrorBoundry>
					<CardList robots={filterRobots}/>
					</ErrorBoundry>	
					</Scroll>
				</div>
					);
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);