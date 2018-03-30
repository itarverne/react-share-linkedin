import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShareLinkedin from './ShareLinkedin';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<ShareLinkedin 
		url="http://itarverne.com"
		title="The web developer expert in Auvergne"
		summary="The web developer expert in Auvergne"
		backgroundColor="black"
		borderRadius="3px"
	/>
	, document.getElementById('root'));
registerServiceWorker();
