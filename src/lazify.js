import React from 'react';

export default (importingComponent, extraProps = {}) => {
  return class LazyComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        LazyComponent: null,
      };
    }

    componentDidMount() {
      importingComponent.then((Comp) => {
        const LoadedComponent = Comp.default;
        this.setState({
          LazyComponent: (<LoadedComponent {...this.props} {...extraProps} />),
        });
      });
    }

    render() {
      const { LazyComponent } = this.state;
      return (
        <div>{ LazyComponent }</div>
      );
    }
  }
}
