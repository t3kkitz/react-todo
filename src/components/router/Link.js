import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Link extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired
  }

  render() {
    return <a href="#0" onClick={this.handleClick}>{this.props.children}</a>
  }

  handleClick = (e) => {
    e.preventDefault();
    window.history.pushState(null, '', this.props.to)
  }

}