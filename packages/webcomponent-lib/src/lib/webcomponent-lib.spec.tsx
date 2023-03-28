import { render } from '@testing-library/react';

import WebcomponentLib from './webcomponent-lib';

describe('WebcomponentLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebcomponentLib />);
    expect(baseElement).toBeTruthy();
  });
});
