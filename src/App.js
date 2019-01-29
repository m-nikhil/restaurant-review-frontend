import React, { Component } from 'react';
import './App.css';
import {Route, Switch, withRouter} from "react-router-dom";
import {connect} from 'react-redux';


@connect((store) => ({
  app: store.app
}))
class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="App-content" style={{height: '100vh'}}>
            <Switch>
                <Route component={Home}
                    exact
                    path="/"
                />
                {getRoutes().map((route, i) => {
                    return <Route component={route.component}
                        key={`route-${route.path}-${i}`}
                        path={route.path}
                    />
                })}
                <Route component={NotFound}/>
            </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
