import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from './Header';

describe('Header', () => {
  it('should render header', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header/>);

    expect(renderer.getRenderOutput())
      .toMatchSnapshot();
  });
});
