import { render } from '@testing-library/react';

import UseCallbackStudycase from './use-callback-studycase';

describe('UseCallbackStudycase', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseCallbackStudycase />);
    expect(baseElement).toBeTruthy();
  });
});
