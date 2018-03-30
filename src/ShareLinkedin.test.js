import React from 'react';
import ReactDOM from 'react-dom';
import ShareLinkedin from './ShareLinkedin';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ShareLinkedin 
      url="http://itarverne.com"
      title="The web developer expert in Auvergne"
      summary="The web developer expert in Auvergne"
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders with optionnal attr', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ShareLinkedin 
      url="http://itarverne.com"
      title="The web developer expert in Auvergne"
      summary="The web developer expert in Auvergne"
      backgroundColor="black"
      borderRadius="3px"
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});