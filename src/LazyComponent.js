import React from 'react';

class LazyComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      LazyComponent: null,
    };
  }

  componentDidMount() {
    this.props.load().then((Comp) => {
      const LoadedComponent = Comp.default;
      this.setState({
        LazyComponent: (<LoadedComponent {...this.props} />),
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

export default LazyComponent;
