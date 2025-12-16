import { trackPageView, trackCTA, trackFormEvents, trackSearchEvents } from './index';

// Mock the logEvent function
jest.mock('./logEvent', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Google Analytics Tracking Functions', () => {
  const mockLogEvent = require('./logEvent').default;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('trackPageView', () => {
    it('should call logEvent with page_view event', () => {
      trackPageView();

      expect(mockLogEvent).toHaveBeenCalledWith({
        event: 'page_view',
      });
    });
  });

  describe('trackCTA', () => {
    it('should call logEvent with cta_clicked event and label', () => {
      const config = { label: 'Book Now' };

      trackCTA(config);

      expect(mockLogEvent).toHaveBeenCalledWith({
        event: 'cta_clicked',
        label: 'Book Now',
      });
    });

    it('should include additional info when provided', () => {
      const config = { label: 'Learn More' };
      const additionalInfo = { section: 'hero', position: 'top' };

      trackCTA(config, additionalInfo);

      expect(mockLogEvent).toHaveBeenCalledWith({
        event: 'cta_clicked',
        label: 'Learn More',
        section: 'hero',
        position: 'top',
      });
    });
  });

  describe('trackFormEvents', () => {
    it('should call logEvent with form event and status', () => {
      const config = { status: 'started' as const, type: 'booking' };

      trackFormEvents(config);

      expect(mockLogEvent).toHaveBeenCalledWith({
        event: 'form',
        status: 'started',
        type: 'booking',
      });
    });

    it('should handle success status with additional info', () => {
      const config = { status: 'success' as const, type: 'contact' };
      const additionalInfo = { formId: 'contact-form-1' };

      trackFormEvents(config, additionalInfo);

      expect(mockLogEvent).toHaveBeenCalledWith({
        event: 'form',
        status: 'success',
        type: 'contact',
        formId: 'contact-form-1',
      });
    });

    it('should handle failed status', () => {
      const config = { status: 'failed' as const, type: 'newsletter' };

      trackFormEvents(config);

      expect(mockLogEvent).toHaveBeenCalledWith({
        event: 'form',
        status: 'failed',
        type: 'newsletter',
      });
    });
  });

  describe('trackSearchEvents', () => {
    it('should call logEvent with search event and parameters', () => {
      const config = { searchText: 'luxury hotel', resultCount: 15 };

      trackSearchEvents(config);

      expect(mockLogEvent).toHaveBeenCalledWith({
        event: 'search',
        searchText: 'luxury hotel',
        resultCount: 15,
      });
    });

    it('should include additional info when provided', () => {
      const config = { searchText: 'spa resort', resultCount: 8 };
      const additionalInfo = { category: 'wellness', location: 'dubai' };

      trackSearchEvents(config, additionalInfo);

      expect(mockLogEvent).toHaveBeenCalledWith({
        event: 'search',
        searchText: 'spa resort',
        resultCount: 8,
        category: 'wellness',
        location: 'dubai',
      });
    });

    it('should handle zero search results', () => {
      const config = { searchText: 'nonexistent', resultCount: 0 };

      trackSearchEvents(config);

      expect(mockLogEvent).toHaveBeenCalledWith({
        event: 'search',
        searchText: 'nonexistent',
        resultCount: 0,
      });
    });
  });
});
