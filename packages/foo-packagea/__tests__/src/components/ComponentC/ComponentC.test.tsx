import * as React from 'react';
import { ComponentC } from '@asrc/components/ComponentC/ComponentC';
import { render } from '@testing-library/react';

describe('<ComponentC/> Snapshot', () => {
  it('renders', () => {
    const { debug } = render(
      <ComponentC />
    );

    debug();
  })
})


