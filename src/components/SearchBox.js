import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div className="pa2">
		<input className="b--green pa3 ba grow bg-light-blue" 
			   type="search" 
		   	   placeholder="search robot friend"
		   	   onChange={searchChange}/>
		
		</div>
		);
};

export default SearchBox;