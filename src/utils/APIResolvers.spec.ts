describe('APIResolvers', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  describe('getSiteUrl', () => {
    it('should return sitePrimary with https when it starts with http', () => {
      jest.doMock('@/config/environment', () => ({
        __esModule: true,
        default: {
          optimizely: {
            cms: {
              sitePrimary: 'https://example.com',
            },
          },
        },
      }));

      const { getSiteUrl } = require('./APIResolvers');
      expect(getSiteUrl()).toBe('https://example.com');
    });

    it('should prepend https when sitePrimary does not start with http', () => {
      jest.doMock('@/config/environment', () => ({
        __esModule: true,
        default: {
          optimizely: {
            cms: {
              sitePrimary: 'example.com',
            },
          },
        },
      }));

      const { getSiteUrl } = require('./APIResolvers');
      expect(getSiteUrl()).toBe('https://example.com');
    });

    it('should return localhost fallback when sitePrimary is empty', () => {
      jest.doMock('@/config/environment', () => ({
        __esModule: true,
        default: {
          optimizely: {
            cms: {
              sitePrimary: '',
            },
          },
        },
      }));

      const { getSiteUrl } = require('./APIResolvers');
      expect(getSiteUrl()).toBe('https://localhost:3000');
    });

    it('should return localhost fallback when sitePrimary is undefined', () => {
      jest.doMock('@/config/environment', () => ({
        __esModule: true,
        default: {
          optimizely: {
            cms: {
              sitePrimary: undefined,
            },
          },
        },
      }));

      const { getSiteUrl } = require('./APIResolvers');
      expect(getSiteUrl()).toBe('https://localhost:3000');
    });
  });
});
