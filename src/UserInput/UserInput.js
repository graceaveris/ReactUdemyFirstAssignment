import React from 'react';

const userInput = (props) => {

	const style = {
   	border: '4px solid blue',
   	backgroundColor: 'yellow',
   	fontSize: '40px',
   	textAlign: 'center',
   	margin: '15px',
   	width: '250px'
   };

  
 return (

 	<input type="text" 
 	style={style}
 	value={props.value}
 	onChange={props.changed}/>

 	);
};

export default userInput;