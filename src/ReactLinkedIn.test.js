import React from 'react';
import ReactDOM from 'react-dom';
import ReactLinkedIn from './ReactLinkedIn';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<ReactLinkedIn 
  		url="http://itarverne.com"
		title="The web developer expert in Auvergne"
		summary="The web developer expert in Auvergne"
	/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders with optionnal attr', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<ReactLinkedIn 
  		url="http://itarverne.com"
		title="The web developer expert in Auvergne"
		summary="The web developer expert in Auvergne"
		color="black"
		borderRadius="3px"
	/>, div);
  ReactDOM.unmountComponentAtNode(div);
});