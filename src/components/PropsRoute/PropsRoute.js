import PropTypes from "prop-types";
import React from "react";
import { Route } from "react-router-dom";
import { renderMergedProps } from "../../utils/renderMergedProps";

/**
 * Wrapper around the Router component, which makes it pass the properties
 * to it's child.
 * Taken from https://github.com/ReactTraining/react-router/issues/4105
 */
const PropsRoute = ({ component, ...rest }) => (
  <Route
    {...rest}
    render={routeProps => renderMergedProps(component, routeProps, rest)}
  />
);

PropsRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node]),
};

export default PropsRoute;
