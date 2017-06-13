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
      this.setState({
        LazyComponent: (<ComponentToBeLazyLoaded />),
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
