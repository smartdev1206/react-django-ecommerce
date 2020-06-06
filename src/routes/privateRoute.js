import {Route, Redirect} from "react-router-dom";
import * as actions from "../store/actions/auth";
import {connect} from "react-redux";
import React from "react";

const PrivateRoute = ({props}) => {
    const {component, isAuthenticated, ...rest} = props
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    React.createElement(component, props)
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {
                                from: props.location,
                            },
                        }}
                    />
                )
            }
        />
    );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};




export default connect(
  mapStateToProps,
)(PrivateRoute);