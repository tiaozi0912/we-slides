(function() {
  'use strict';

  var React = window.React = require('react');

  var UIPages = require('./components/uiPages');
  var UIPage = require('./components/uiPage');

  var Slider = require('react-slick');

  class SimpleSlider extends React.Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </Slider>
      );
    }
  }

  class UIApp extends React.Component {
    render() {
      return (
        <UIPages>
          <UIPage></UIPage>
          <UIPage></UIPage>
        </UIPages>
      )
    }
  }

  React.render(
    <SimpleSlider />,
    document.getElementsByTagName('body')[0]
  );
})();
