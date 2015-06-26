/**@jsx React.DOM*/

(function() {
  'use strict';

  var React = window.React = require('react');

  class UIPage extends React.Component {
    render() {
      return (
        <div className="ui-page">
          <div>This is UIPage {this.state.pageIndex}</div>
        </div>
      );
    }
  }

  module.exports = UIPage;
})();
