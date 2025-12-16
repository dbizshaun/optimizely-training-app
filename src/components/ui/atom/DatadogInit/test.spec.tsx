import { render } from '@testing-library/react';
import { DatadogInit } from './index';

jest.mock('@/config/datadogClient', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('DatadogInit', () => {
  const mockDataDogInitialisation = require('@/config/datadogClient').default;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call dataDogInitialisation on mount', () => {
    render(<DatadogInit />);

    expect(mockDataDogInitialisation).toHaveBeenCalledTimes(1);
  });

  it('should render null', () => {
    const { container } = render(<DatadogInit />);

    expect(container.firstChild).toBeNull();
  });

  it('should only call dataDogInitialisation once', () => {
    const { rerender } = render(<DatadogInit />);
    rerender(<DatadogInit />);

    expect(mockDataDogInitialisation).toHaveBeenCalledTimes(1);
  });
});
