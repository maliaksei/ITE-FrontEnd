import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Component } from 'react';
import * as commonActions from '../actions/other/common';
import * as titleActions from '../actions/title/common';

@connect(
  state => ({
      title: state.title.get('action'),
      other: state.other.get('action')
  }),
  dispatch => ({
    actions: bindActionCreators(titleActions, dispatch)
  })
)

class About extends Component {

    handleAction1Click = () => {
        this.props.actions.changeTitle("asd");
    };

    handleAction2Click = () => {
        this.props.actions.changeTitle("aaa");
    };

  render() {
    return (
      <div>
        <h1>About</h1>
        <h3>current common action value -> {this.props.title}</h3>
        <p onClick={this.handleAction2Click}>action 1</p>
        <p onClick={this.handleAction1Click}>action 2</p>
      </div>
    );
  }
}

export default About;
