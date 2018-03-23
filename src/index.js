import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactLinkedIn from './ReactLinkedIn';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<ReactLinkedIn 
		url="http://itarverne.com"
		title="The web developer expert in Auvergne"
		summary="The web developer expert in Auvergne"
		color="black"
		borderRadius="3px"
	/>
	, document.getElementById('root'));
registerServiceWorker();
