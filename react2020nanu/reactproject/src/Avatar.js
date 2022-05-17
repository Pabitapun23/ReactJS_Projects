import React from 'react';
import './Avatar.css';
import AvatarList from './AvatarList';
import 'tachyons';


const Avatar = (props) => {

	const AvatarListArray = [
	    {
	    	id: 1,
	    	name: 'nanu',
	    	work: 'web developer'
	    },
	    {
	    	id: 2,
	    	name: 'pabita',
	    	work: 'software developer'
	    },
	    {
	    	id: 3,
	    	name: 'pabi',
	    	work: 'designer'
	    },
        {
	    	id: 4,
	    	name: 'sanu',
	    	work: 'programmer'
	    }
	]

	const ArrayAvatarCard = AvatarListArray.map((AvatarCard,i) => {
		return <AvatarList id={AvatarListArray[i].name}
                       name={AvatarListArray[i].name}
                       work={AvatarListArray[i].work}/>
	})
	
	return ( 
		<div>
        <h1 className="tc"> Welcome to Avatar World </h1>
        {ArrayAvatarCard}
	    <button> Subscribe </button>
	    </div>
	)
}

export default Avatar;