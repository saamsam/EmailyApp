import React, { Component } from 'react';
import Moment from 'react-moment';

export default class DateTime extends Component {
  render() {
    const dateToFormat = new Date();
    return <Moment date={dateToFormat} />;
  }
}
