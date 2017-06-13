import React from 'react';

class LazyComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      Comp: null,
    };
  }

  componentDidMount() {
    this.props.load().then((Comp) => {
      const TheComp = Comp.default;
      this.setState({
        Comp: (<TheComp />),
      });
    });
  }

  render() {
    return (
      <div>{ this.state.Comp }</div>
    );
  }
}

export default LazyComponent;
