import React from "react";
import { Route, Redirect, } from "react-router-dom";

class PrivateRoute extends React.Component {
  render(){
    let route;
    if (this.props.isAuthenticated) {
      route = <Route path={this.props.path} component={this.props.component}/>
    } else {
      route = <Redirect to="/login" />
    }

    return (
      <div>
        {route}
      </div>
    )
  }
}


export default PrivateRoute;

