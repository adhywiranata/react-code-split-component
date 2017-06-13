import React from 'react';

export default (ComponentToBeLazyLoaded) => {
  return class LazyComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        LazyComponent: null,
      };
    }

    componentDidMount() {
      console.log(ComponentToBeLazyLoaded);
      this.props.load().then((Comp) => {
        const LoadedComponent = Comp.default;
        this.setState({
          LazyComponent: (<ComponentToBeLazyLoaded {...this.props} />),
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
