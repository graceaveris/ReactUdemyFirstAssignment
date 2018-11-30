import React from 'react';

const userInput = (props) => {
  
 return (

 	<input type="text" 
 	value={props.value}
 	onChange={props.changed}/>

 	);
};

export default userInput;