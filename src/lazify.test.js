import React from 'react';
import {shallow, mount} from 'enzyme';
import jsdom from 'jsdom';

import lazify from './lazify';

const doc = new jsdom.JSDOM('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe('lazify', () => {
  it('is a function', () => {
    expect(typeof lazify).toEqual('function');
  });

  it('returns a successfully rendered component', () => {
    const LazyComponent = lazify(null);
    const wrapper = shallow(<LazyComponent />);
    expect(wrapper).toHaveLength(1);
  });

  it('returns a <LazyComponent /> with null initial state', () => {
    const LazyComponent = lazify(null);
    const wrapper = shallow(<LazyComponent />);
    expect(wrapper.state('LazyComponent')).toBeNull();
  });

  it('successfully calls updateLazyComponent method without breaks', (done) => {
    const mockPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(require('./DummyComponent'));
      }, 1);
    });
    const LazyComponent = lazify(mockPromise);
    const spy = jest.spyOn(LazyComponent.prototype, 'updateLazyComponent');
    const wrapper = mount(<LazyComponent />);
    wrapper.instance().updateLazyComponent(require('./DummyComponent'));
    expect(spy).toHaveBeenCalled();
    done();
  });

  it('successfully calls updateLazyComponent on component did mount', (done) => {
    const mockPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(require('./DummyComponent'));
      }, 1);
    });
    const LazyComponent = lazify(mockPromise);
    const spy = jest.spyOn(LazyComponent.prototype, 'componentDidMount');
    const wrapper = mount(<LazyComponent />);
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
    done();
  });
});
