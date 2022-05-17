import React from 'react';

const AvatarList = (props) => {
	return ( <div className="avatarStyle ma3 bg-light-blue dib pa4">  
	    <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"/>	          
	    <h1>{props.name}</h1>
	    <p>{props.work}</p>
	</div>
	)
}

export default AvatarList;