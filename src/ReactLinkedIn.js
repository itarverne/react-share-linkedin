import React, { Component } from 'react';
import PropTypes from 'prop-types';

let linkedin = {
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

    let customParamStyles = {
      'backgroundColor': 
        (this.props.backgroundColor)
          ? 
        this.props.backgroundColor 
          : 
        '#0077b5',
      'borderRadius': 
        (this.props.borderRadius) 
          ? 
        this.props.borderRadius
          : 
        'none'
    };
    const linkedinWithParam = Object.assign({}, linkedin, customParamStyles);

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
