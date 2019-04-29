import {CHANGE_SEARCH_FIELD,
		REQUIRE_ROBOTS_PENDING,
		REQUIRE_ROBOTS_SUCCESS,
		REQUIRE_ROBOTS_FAILED

} from "./constants.js"

export const setSearchfield = (text) => 
{console.log(text);
 return {
	type: CHANGE_SEARCH_FIELD ,
	payload: text
}}

//HIGHER ORDER FUNCTION: a function returns function
export const requestRobots = ()=>(dispatch) =>
{
	dispatch({type: REQUIRE_ROBOTS_PENDING});
	//GET API
	fetch('https://jsonplaceholder.typicode.com/users')
  	.then(response => response.json())
  	.then(data => dispatch({type: REQUIRE_ROBOTS_SUCCESS,payload:data}))
  	.catch(error => dispatch({type: REQUIRE_ROBOTS_FAILED,payload: error}))
}