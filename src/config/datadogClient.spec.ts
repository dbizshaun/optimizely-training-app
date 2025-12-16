const mockRumInit = jest.fn();
const mockLogsInit = jest.fn();

jest.mock('@datadog/browser-rum', () => ({
  datadogRum: {
    init: mockRumInit,
  },
}));

jest.mock('@datadog/browser-logs', () => ({
  datadogLogs: {
    init: mockLogsInit,
  },
}));

describe('datadogClient', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  it('should initialize datadogRum and datadogLogs when applicationId is present', () => {
    jest.doMock('@/config/environment', () => ({
      __esModule: true,
      default: {
        datadog: {
          client: {
            applicationId: 'test-app-id',
            clientToken: 'test-client-token',
            service: 'test-service',
            env: 'test',
            site: 'datadoghq.com',
          },
        },
        site: {
          public: {
            baseUrl: 'https://example.com',
          },
        },
        system: {
          version: '1.0.0',
        },
      },
    }));

    const dataDogInitialisation = require('./datadogClient').default;
    dataDogInitialisation();

    expect(mockRumInit).toHaveBeenCalledTimes(1);
    expect(mockLogsInit).toHaveBeenCalledTimes(1);
  });

  it('should not initialize when applicationId is empty', () => {
    jest.doMock('@/config/environment', () => ({
      __esModule: true,
      default: {
        datadog: {
          client: {
            applicationId: '',
            clientToken: '',
            service: '',
            env: '',
            site: '',
          },
        },
        site: {
          public: {
            baseUrl: '',
          },
        },
        system: {
          version: '1.0.0',
        },
      },
    }));

    const dataDogInitialisation = require('./datadogClient').default;
    dataDogInitialisation();

    expect(mockRumInit).not.toHaveBeenCalled();
    expect(mockLogsInit).not.toHaveBeenCalled();
  });

  it('should configure beforeSend to filter specific error messages', () => {
    jest.doMock('@/config/environment', () => ({
      __esModule: true,
      default: {
        datadog: {
          client: {
            applicationId: 'test-app-id',
            clientToken: 'test-client-token',
            service: 'test-service',
            env: 'test',
            site: 'datadoghq.com',
          },
        },
        site: {
          public: {
            baseUrl: 'https://example.com',
          },
        },
        system: {
          version: '1.0.0',
        },
      },
    }));

    const dataDogInitialisation = require('./datadogClient').default;
    dataDogInitialisation();

    const initCall = mockRumInit.mock.calls[0][0];
    const beforeSend = initCall.beforeSend;

    // Test that normal events pass through
    expect(beforeSend({ type: 'view' })).toBe(true);

    // Test that matching error messages are filtered
    const filteredEvent = {
      error: {
        message: 'Object Not Found Matching Id:123, MethodName:test, ParamCount:1',
      },
    };
    expect(beforeSend(filteredEvent)).toBe(false);

    // Test that non-matching error messages pass through
    const normalErrorEvent = {
      error: {
        message: 'Some other error',
      },
    };
    expect(beforeSend(normalErrorEvent)).toBe(true);
  });

  it('should configure allowedTracingUrls correctly', () => {
    jest.doMock('@/config/environment', () => ({
      __esModule: true,
      default: {
        datadog: {
          client: {
            applicationId: 'test-app-id',
            clientToken: 'test-client-token',
            service: 'test-service',
            env: 'test',
            site: 'datadoghq.com',
          },
        },
        site: {
          public: {
            baseUrl: 'https://example.com',
          },
        },
        system: {
          version: '1.0.0',
        },
      },
    }));

    const dataDogInitialisation = require('./datadogClient').default;
    dataDogInitialisation();

    const initCall = mockRumInit.mock.calls[0][0];
    const [baseUrlMatcher, apiUrlMatcher] = initCall.allowedTracingUrls;

    expect(baseUrlMatcher('https://example.com/api/test')).toBe(true);
    expect(baseUrlMatcher('https://other.com/api')).toBe(false);

    expect(apiUrlMatcher('https://api.azurewebsites.net/test')).toBe(true);
    expect(apiUrlMatcher('https://other.com/api')).toBe(false);
  });
});
