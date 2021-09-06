import React from 'react';
import {
  Redirect,
  Route as ReactDomRoute,
  RouteProps as ReactDomRouteProps,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface IRouteProps extends ReactDomRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<IRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const {
    authState: { name },
  } = useAuth();

  return (
    <ReactDomRoute
      {...rest}
      render={() => {
        return isPrivate === !!name ? (
          <>
            <Component {...rest} />
          </>
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/login' : '/' }} />
        );
      }}
    />
  );
};

export default Route;
