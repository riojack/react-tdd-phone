import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Phone from '../src/Phone';

describe('Phone', () => {
  let props,
    element;

  beforeEach('set up', () => {
    props = {};
    element = shallow(<Phone />);
  });

  it('should be a div', () => {
    expect(element.type()).to.equal('div');
  });
});
