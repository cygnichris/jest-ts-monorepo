import * as React from 'react';
import { render } from '@testing-library/react';
import { ComponentB } from '@bsrc/components/ComponentB/ComponentB';

describe('<ComponentB/> Snapshot', () => {
  it('renders', () => {
    const { asFragment } = render(
      <ComponentB />
    );

    expect(asFragment()).toMatchSnapshot();
  })
})
