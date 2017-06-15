import React from 'react';
import {shallow, mount} from 'enzyme';
import jsdom from 'jsdom';

import lazify from './lazify';

const doc = new jsdom.JSDOM('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

const DummyComponent = () => (<div></div>);

describe('lazify', () => {
  it('is a function', () => {
    expect(typeof lazify).toEqual('function');
  });

  it('returns a successfully rendered component', () => {
    const LazyComponent = lazify(null);
    const wrapper = shallow(<LazyComponent />);
    expect(wrapper).toHaveLength(1);
  });
});
