import * as React from 'react';
import { render } from '@testing-library/react';
import { ComponentA } from '@bsrc/components/ComponentA/ComponentA';


describe('<ComponentA/> Snapshot', () => {
  it('renders', () => {
    const { asFragment } = render(
      <ComponentA />
    );

    expect(asFragment()).toMatchSnapshot();
  })
})


