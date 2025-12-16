import logEvent from './logEvent';

// Mock Next.js third-parties Google GTM
jest.mock('@next/third-parties/google', () => ({
  sendGTMEvent: jest.fn(),
}));

// Mock window.location
const mockLocation = {
  href: 'https://example.com/test-page',
};

Object.defineProperty(window, 'location', {
  value: mockLocation,
  writable: true,
});

describe('logEvent', () => {
  const { sendGTMEvent } = require('@next/third-parties/google');

  beforeEach(() => {
    jest.clearAllMocks();
    // Reset window.location.href to the original value before each test
    window.location.href = 'https://example.com/test-page';
  });

  it('should call sendGTMEvent with event parameters and page URL', () => {
    const eventParams = {
      event: 'test_event',
      label: 'test_label',
      value: 123,
    };

    logEvent(eventParams);

    expect(sendGTMEvent).toHaveBeenCalledWith({
      ...eventParams,
      page: 'https://example.com/test-page',
    });
  });

  it('should include current page URL from window.location.href', () => {
    window.location.href = 'https://example.com/different-page';

    const eventParams = {
      event: 'page_view',
    };

    logEvent(eventParams);

    expect(sendGTMEvent).toHaveBeenCalledWith({
      event: 'page_view',
      page: 'https://example.com/different-page',
    });
  });

  it('should handle event parameters with mixed string and number values', () => {
    const eventParams = {
      event: 'search',
      searchText: 'hotel',
      resultCount: 42,
      category: 'hospitality',
    };

    logEvent(eventParams);

    expect(sendGTMEvent).toHaveBeenCalledWith({
      event: 'search',
      searchText: 'hotel',
      resultCount: 42,
      category: 'hospitality',
      page: 'https://example.com/test-page',
    });
  });

  it('should handle empty event parameters object', () => {
    const eventParams = {};

    logEvent(eventParams);

    expect(sendGTMEvent).toHaveBeenCalledWith({
      page: 'https://example.com/test-page',
    });
  });
});
