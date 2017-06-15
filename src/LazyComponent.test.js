import React from 'react';
import {shallow, mount} from 'enzyme';
import jsdom from 'jsdom';

import LazyComponent from './LazyComponent';

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
    const mockPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof <DummyComponent /> === 'object') {
          resolve(<DummyComponent />);
        } else {
          reject();
        }
      }, 1);
    });
    const wrapper = mount(
      <LazyComponent load={() => mockPromise} />
    );
    expect(wrapper.prop('load')).toBeDefined();
    done();
  });
});