import { render } from '@testing-library/react';
import GoogleTagManager from './index';

// Mock dependencies
jest.mock('@next/third-parties/google', () => ({
  GoogleTagManager: ({ gtmId }: { gtmId: string }) => (
    <div data-testid="next-gtm" data-gtm-id={gtmId}>
      Next.js GTM Component
    </div>
  ),
}));

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

jest.mock('@/lib/google-analytics', () => ({
  trackPageView: jest.fn(),
}));

jest.mock('@/config/environment', () => ({
  analytics: {
    google: {
      tagManagerId: 'GTM-TEST123',
    },
  },
}));

const mockUsePathname = require('next/navigation').usePathname;
const mockTrackPageView = require('@/lib/google-analytics').trackPageView;

describe('GoogleTagManager', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUsePathname.mockReturnValue('/');
  });

  it('renders Next.js GoogleTagManager with correct GTM ID', () => {
    const { getByTestId } = render(<GoogleTagManager />);

    const gtmComponent = getByTestId('next-gtm');
    expect(gtmComponent).toBeInTheDocument();
    expect(gtmComponent).toHaveAttribute('data-gtm-id', 'GTM-TEST123');
  });

  it('calls trackPageView on mount', () => {
    render(<GoogleTagManager />);

    expect(mockTrackPageView).toHaveBeenCalledTimes(1);
    expect(mockTrackPageView).toHaveBeenCalledWith();
  });

  it('calls trackPageView when pathname changes', () => {
    const { rerender } = render(<GoogleTagManager />);

    // Initial call
    expect(mockTrackPageView).toHaveBeenCalledTimes(1);

    // Change pathname
    mockUsePathname.mockReturnValue('/hotels');
    rerender(<GoogleTagManager />);

    // Should call trackPageView again
    expect(mockTrackPageView).toHaveBeenCalledTimes(2);
  });

  it('handles multiple pathname changes', () => {
    const { rerender } = render(<GoogleTagManager />);

    // Initial render
    expect(mockTrackPageView).toHaveBeenCalledTimes(1);

    // First pathname change
    mockUsePathname.mockReturnValue('/about');
    rerender(<GoogleTagManager />);
    expect(mockTrackPageView).toHaveBeenCalledTimes(2);

    // Second pathname change
    mockUsePathname.mockReturnValue('/contact');
    rerender(<GoogleTagManager />);
    expect(mockTrackPageView).toHaveBeenCalledTimes(3);
  });

  it('renders without errors when GTM ID is available', () => {
    expect(() => render(<GoogleTagManager />)).not.toThrow();
  });
});
