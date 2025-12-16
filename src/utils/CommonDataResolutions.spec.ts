import { resolveImageData, resolveVideoData, resolveLinkData } from './CommonDataResolutions';

// Mock dependencies
jest.mock('@/gql', () => ({
  getFragmentData: jest.fn(),
}));

jest.mock('@/gql/graphql', () => ({
  LinkDataFragmentDoc: 'LinkDataFragmentDoc',
  PublicImageAssetDataFragmentDoc: 'PublicImageAssetDataFragmentDoc',
  PublicImageReferenceDataFragmentDoc: 'PublicImageReferenceDataFragmentDoc',
  PublicVideoAssetDataFragmentDoc: 'PublicVideoAssetDataFragmentDoc',
  PublicVideoReferenceDataFragmentDoc: 'PublicVideoReferenceDataFragmentDoc',
  ReferenceDataFragmentDoc: 'ReferenceDataFragmentDoc',
}));

jest.mock('@/config/environment', () => ({
  __esModule: true,
  default: {
    optimizely: {
      cms: {
        siteDomain: 'example.com',
      },
    },
  },
}));

// Import mocked dependencies
import { getFragmentData } from '@/gql';

describe('CommonDataResolutions', () => {
  const mockGetFragmentData = getFragmentData as jest.MockedFunction<typeof getFragmentData>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('resolveImageData', () => {
    it('should resolve DAM image data successfully', () => {
      const mockFragment = { key: 'test-image' };
      const mockDamImageFragment = { url: 'https://dam.example.com/image.jpg' };
      const mockDamImage = { url: 'https://dam.example.com/image.jpg', alt: 'Test Image' };

      mockGetFragmentData
        .mockReturnValueOnce({ item: mockDamImageFragment } as any)
        .mockReturnValueOnce(mockDamImage as any);

      const result = resolveImageData(mockFragment);

      expect(result).toEqual({
        src: 'https://dam.example.com/image.jpg',
        alt: 'Test Image',
      });
    });

    it('should use fallback alt when DAM alt is missing', () => {
      const mockFragment = { key: 'hero-banner' };
      const mockDamImageFragment = { url: 'https://dam.example.com/banner.jpg' };
      const mockDamImage = { url: 'https://dam.example.com/banner.jpg' };

      mockGetFragmentData
        .mockReturnValueOnce({ item: mockDamImageFragment } as any)
        .mockReturnValueOnce(mockDamImage as any);

      const result = resolveImageData(mockFragment);

      expect(result.src).toBe('https://dam.example.com/banner.jpg');
      expect(result.alt).toBe('hero-banner');
    });

    it('should throw error when resolution fails', () => {
      const mockFragment = { key: 'error-image' };
      mockGetFragmentData.mockImplementation(() => {
        throw new Error('GraphQL error');
      });

      expect(() => resolveImageData(mockFragment)).toThrow(
        'Custom Error: Failed to resolve image (resolveImageData function)'
      );
    });
  });

  describe('resolveVideoData', () => {
    it('should resolve DAM video data successfully', () => {
      const mockFragment = { key: 'test-video' };
      const mockDamVideoFragment = { url: 'https://dam.example.com/video.mp4' };
      const mockDamVideo = { url: 'https://dam.example.com/video.mp4' };

      mockGetFragmentData
        .mockReturnValueOnce({ item: mockDamVideoFragment } as any)
        .mockReturnValueOnce(mockDamVideo as any);

      const result = resolveVideoData(mockFragment);

      expect(result).toBe('https://dam.example.com/video.mp4');
    });

    it('should throw error when resolution fails', () => {
      const mockFragment = { key: 'error-video' };
      mockGetFragmentData.mockImplementation(() => {
        throw new Error('GraphQL error');
      });

      expect(() => resolveVideoData(mockFragment)).toThrow(
        'Custom Error: Failed to resolve video (resolveVideoData function)'
      );
    });
  });

  describe('resolveLinkData', () => {
    it('should resolve internal links correctly', () => {
      const mockFragment = { base: 'https://example.com', default: '/about' };
      const mockLink = { base: 'https://example.com', default: '/about' };

      mockGetFragmentData.mockReturnValue(mockLink as any);

      const result = resolveLinkData(mockFragment);

      expect(result).toBe('/about');
    });

    it('should handle missing default with fallback', () => {
      const mockFragment = { base: 'https://example.com' };
      const mockLink = { base: 'https://example.com', default: null };

      mockGetFragmentData.mockReturnValue(mockLink as any);

      const result = resolveLinkData(mockFragment);

      expect(result).toBe('/');
    });

    it('should throw error when resolution fails', () => {
      const mockFragment = { base: 'invalid-url' };
      mockGetFragmentData.mockImplementation(() => {
        throw new Error('GraphQL error');
      });

      expect(() => resolveLinkData(mockFragment)).toThrow(
        'Failed to resolve link (resolveLinkData function)'
      );
    });
  });
});
