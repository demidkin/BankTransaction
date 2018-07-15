import React from "react";
import { Route, Redirect, } from "react-router-dom";

class PrivateRoute extends React.Component {
  render(){
    let route;
    if (location.pathname !== this.props.path || this.props.isAuthenticated || this.props.isAuthenticated === undefined) {
      route = <Route path={this.props.path} component={this.props.component}/>
    } else {
      route = <Redirect to={this.props.redirectpath} />
    }

    return (
      <div>
        {route}
      </div>
    )
  }
}

export default PrivateRoute;

