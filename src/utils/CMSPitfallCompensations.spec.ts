import { resolveHomePath, ResolveViewportSizeForPreview } from './CMSPitfallCompensations';

describe('CMSPitfallCompensations', () => {
  describe('ResolveViewportSizeForPreview', () => {
    it('should return original size when not in edit mode', () => {
      const result = ResolveViewportSizeForPreview('50vh', false);
      expect(result).toBe('50vh');
    });

    it('should return original size when inEditMode is undefined', () => {
      const result = ResolveViewportSizeForPreview('75px');
      expect(result).toBe('75px');
    });

    it('should convert viewport units to pixels in edit mode with default constant', () => {
      const result = ResolveViewportSizeForPreview('50vh', true);
      // 50 * 1024 / 100 = 512px
      expect(result).toBe('512px');
    });

    it('should use custom sizeConstant when provided', () => {
      const result = ResolveViewportSizeForPreview('50vh', true, 800);
      // 50 * 800 / 100 = 400px
      expect(result).toBe('400px');
    });

    it('should throw error for non-numeric size strings', () => {
      expect(() => {
        ResolveViewportSizeForPreview('auto', true);
      }).toThrow('ResolveViewportSizeForPreview: Could not parse viewport size string: auto');
    });

    it('should throw error for empty strings', () => {
      expect(() => {
        ResolveViewportSizeForPreview('', true);
      }).toThrow('ResolveViewportSizeForPreview: Could not parse viewport size string: ');
    });
  });

  describe('resolveHomePath', () => {
    it('should remove /en/ from URL path', () => {
      const result = resolveHomePath('/en/about-us');
      expect(result).toBe('/about-us');
    });

    it('should handle multiple /en/ occurrences', () => {
      const result = resolveHomePath('/en/section/en/page');
      expect(result).toBe('/section/en/page');
    });

    it('should return original URL when no /en/ is present', () => {
      const result = resolveHomePath('/about-us');
      expect(result).toBe('/about-us');
    });

    it('should handle root /en/ path', () => {
      const result = resolveHomePath('/en/');
      expect(result).toBe('/');
    });

    it('should handle empty string', () => {
      const result = resolveHomePath('');
      expect(result).toBe('');
    });

    it('should handle URLs with query parameters', () => {
      const result = resolveHomePath('/en/page?param=value');
      expect(result).toBe('/page?param=value');
    });
  });
});
