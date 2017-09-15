import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Link extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired
  }

  static contextTypes = {
    route:       PropTypes.string,
    linkHandler: PropTypes.func
  }

  render() {
    const activeClass = this.context.route === this.props.to ? 'active' : ''
    return <a href="#0" className={activeClass} onClick={this.handleClick}>{this.props.children}</a>
  }

  handleClick = (e) => {
    e.preventDefault();
    this.context.linkHandler(this.props.to);
  }

}