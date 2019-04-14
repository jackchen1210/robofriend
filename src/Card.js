import React from 'react';

const Card = ({id,name,user})=>{
	return (
	<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">	
		<img alt="robots" src= {`https://robohash.org/${name}?set=set5&size=100x100`} />
		<div>	
			<h2>{id}</h2>
			<p>{name}</p>
		</div>
	</div>
	);   
}

export default Card;