import React, { lazy, Suspense, Component } from "react";
import { Route } from "react-router-dom";

class RouteError extends Component {
  state = {
    error: undefined
  };

  componentDidCatch(error) {
    this.setState({ error });
  }
  render() {
    return this.state.error ? (
      <div style={{ color: "red" }}>
        The component you provided does not exist COMPONENT NAME: "
        {this.props.componentName}"
      </div>
    ) : (
      this.props.children
    );
  }
}

function LazyRoute(props) {
  const lazyComponent = lazy(() =>
    import(`../../components/${props.componentName}/${props.componentName}`)
  );

  return (
    /* TOOD: Set a loading component */
    <Suspense fallback={<p>...loading</p>}>
      <RouteError componentName={props.componentName}>
        <Route {...props} component={lazyComponent} />
      </RouteError>
    </Suspense>
  );
}

export default LazyRoute;
