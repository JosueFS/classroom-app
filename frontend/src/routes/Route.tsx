/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface IRouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  onlyTeacher?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<IRouteProps> = ({
  isPrivate = false,
  onlyTeacher = false,
  component: Component,
  ...rest
}) => {
  const { authState } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        if (authState.type === 'teacher') {
          return isPrivate === !!authState.name ? (
            <>
              <Component {...rest} />
            </>
          ) : (
            <Redirect
              to={{
                pathname: isPrivate ? '/' : `/teacher`,
              }}
            />
          );
        }

        return isPrivate === !!authState.name && onlyTeacher === false ? (
          <>
            <Component {...rest} />
          </>
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : `/home`,
            }}
          />
        );
      }}
    />
  );
};

export default Route;
