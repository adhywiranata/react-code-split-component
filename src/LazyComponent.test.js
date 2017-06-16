import React from 'react';
import {shallow, mount} from 'enzyme';
import jsdom from 'jsdom';

import LazyComponent from './LazyComponent';
import mockPromise from './__mocks__/mockPromise';

const doc = new jsdom.JSDOM('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

const DummyComponent = () => (<div></div>);

describe('<LazyComponent />', () => {
  it('renders normally', () => {
    const wrapper = shallow(
      <LazyComponent />
    );
    expect(wrapper).toHaveLength(1);
  });

  it('have null LazyComponent initial state after rendered', () => {
    const wrapper = shallow(
      <LazyComponent />
    );
    expect(wrapper.state('LazyComponent')).toBeNull();
  });

  it('have props called load as a promise', (done) => {
    const wrapper = mount(
      <LazyComponent load={() => mockPromise} />
    );
    expect(wrapper.prop('load')).toBeDefined();
    done();
  });

  it('successfully calls updateLazyComponent method without breaks', (done) => {
    const spy = jest.spyOn(LazyComponent.prototype, 'updateLazyComponent');
    const wrapper = mount(
      <LazyComponent load={() => mockPromise} />
    );
    wrapper.instance().updateLazyComponent(require('./DummyComponent'));
    expect(spy).toHaveBeenCalled();
    done();
  });

  it('successfully calls updateLazyComponent on component did mount', (done) => {
    const spy = jest.spyOn(LazyComponent.prototype, 'componentDidMount');
    const wrapper = mount(
      <LazyComponent load={() => mockPromise} />
    );
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
    done();
  });
});
