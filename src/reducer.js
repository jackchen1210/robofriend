import {CHANGE_SEARCH_FIELD,
		REQUIRE_ROBOTS_PENDING,
		REQUIRE_ROBOTS_SUCCESS,
		REQUIRE_ROBOTS_FAILED

} from "./constants.js"

const initialStateSearch = {
	searchfield : ""
}

export const searchRobots = (state = initialStateSearch,action = {}) => {
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
			return Object.assign({},state,{searchfield : action.payload});
		default :
			return state;	
	}
}

const initialStateRobots = {
	isPending : false,
	robots : [],
	error : ""
}

export const requestRobots = (state = initialStateRobots,action ={}) =>{
	switch(action.type){
		case REQUIRE_ROBOTS_PENDING:
			return Object.assign({},state,{isPending:true});
		case REQUIRE_ROBOTS_SUCCESS:
			return Object.assign({},state,{robots:action.payload,isPending:false});
		case REQUIRE_ROBOTS_FAILED:
			return Object.assign({},state,{error:action.payload,isPending:false});
		default:
			return state;
	}
}
