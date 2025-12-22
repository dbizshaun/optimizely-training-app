import { datadogRum } from '@datadog/browser-rum';
import { datadogLogs } from '@datadog/browser-logs';
import { RumErrorEvent } from '@datadog/browser-rum';
import env from '@/config/environment';

const DATADOG = {
  APPLICATION_ID: env.datadog.client.applicationId,
  CLIENT_TOKEN: env.datadog.client.clientToken,
  DATADOG_SERVICE: env.datadog.client.service,
  DATADOG_ENV: env.datadog.client.env,
  DATADOG_SITE: env.datadog.client.site,
};

const INTERNAL = {
  BASE_URL: env.site.public.baseUrl,
  API_SERVICE_URL: 'azurewebsites.net',
};

export default function dataDogInitialisation() {
  if (!DATADOG.APPLICATION_ID) return;
  datadogRum.init({
    applicationId: DATADOG.APPLICATION_ID,
    clientToken: DATADOG.CLIENT_TOKEN,
    site: DATADOG.DATADOG_SITE,
    service: DATADOG.DATADOG_SERVICE,
    env: DATADOG.DATADOG_ENV,
    // Specify a version number to identify the deployed version of your application in Datadog
    version: env.system.version,
    allowedTracingUrls: [
      url => url.startsWith(INTERNAL.BASE_URL),
      url => url.includes(INTERNAL.API_SERVICE_URL),
    ],
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',

    beforeSend: event => {
      if (event.error) {
        const error = (event as RumErrorEvent).error;
        // filter out error that might be caused by link validation/ pre-fetch rendering from email clicks
        // https://github.com/DataDog/browser-sdk/issues/2715
        const regex = /Object Not Found Matching Id:\d+, MethodName:\w+, ParamCount:\d+/;
        if (regex.test(error.message)) return false; // Filter this error out
      }

      return true; // Otherwise, send the event
    },
  });
  datadogLogs.init({
    clientToken: DATADOG.CLIENT_TOKEN,
    site: DATADOG.DATADOG_SITE,
    forwardErrorsToLogs: true,
    sessionSampleRate: 100,
    service: DATADOG.DATADOG_SERVICE,
  });
}
