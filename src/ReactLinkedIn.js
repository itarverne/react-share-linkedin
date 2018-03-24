import React, { Component } from 'react';
import PropTypes from 'prop-types';

const linkedin = {
  backgroundColor: '#0077b5',
  width: '70px'
}

const linkedin__logo = {
  color: 'white',
  margin: '5px',
  fontFamily: 'SourceSansPro-Semibold',
  src: 'url(fonts/Source Sans Pro/SourceSansPro-Semibold.ttf)'
}

const linkedin__link = {
  color: 'white',
  textDecoration: 'none',
  fontFamily: 'SourceSansPro-Regular',
  src: 'url(fonts/Source Sans Pro/SourceSansPro-Regular.ttf)'
}

class ReactLinkedIn extends Component {

  render() {
  	let urlEncoded = encodeURI(`https://www.linkedin.com/shareArticle?\
mini=true&\
url=${this.props.url}&\
title=${this.props.title}&\
summary=${this.props.summary}&\
source=LinkedIn`);

    let linkedinWithParam = Object.assign(linkedin, {
      'backgroundColor': this.props.color,
      'borderRadius': this.props.borderRadius
    });

    return (
      <div style={linkedinWithParam}>
        <a href={urlEncoded} target="_blank" rel="noopener" style={linkedin__link} >
	      	<span style={linkedin__logo}>IN</span>
	      	<span>Share</span>
	      </a>
      </div>
    );
  }
}

ReactLinkedIn.propTypes = {
  url: PropTypes.string.isRequired
};

export default ReactLinkedIn;
