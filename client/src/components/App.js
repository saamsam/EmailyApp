import React, { Component } from 'react';
import {BrowserRouter, Route } from 'react-router-dom'; //The BrowserRouter is the brain  behind this library. The Route just describes the rules that each route must follow.
import {connect} from 'react-redux';
import Header from './Header';
import Landing from './Landing';
import * as actions from '../actions';


const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>


class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
 render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact={true} path="/" component={Landing} />
            <Route exact={true} path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
