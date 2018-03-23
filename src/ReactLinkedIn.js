import React, { Component } from 'react';
import './ReactLinkedIn.css';
import PropTypes from 'prop-types';

class ReactLinkedIn extends Component {

  render() {
  	let urlEncoded = encodeURI(`https://www.linkedin.com/shareArticle?\
mini=true&\
url=${this.props.url}&\
title=${this.props.title}&\
summary=${this.props.summary}&\
source=LinkedIn`);

    let bgColorStyle = {
      'backgroundColor': this.props.color,
      'borderRadius': this.props.borderRadius
    };

    return (
      <div className="linkedin" style={bgColorStyle}>
        <a href={urlEncoded} target="_blank" rel="noopener" className="linkedin__link" >
	      	<span className="linkedin__logo">IN</span>
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
