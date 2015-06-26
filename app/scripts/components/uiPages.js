/**@jsx React.DOM*/

(function() {
  'use strict';

  var React = window.React = require('react');

  class UIPages extends React.Component {
    render() {
      this.props.children.forEach((elem, i) => {
        debugger
        elem.setState({
          pageIndex: i
        });
      });

      return (
        <div className="ui-pages container">
          {this.props.children}
        </div>
      );
    }
  }

  module.exports = UIPages;
})();
