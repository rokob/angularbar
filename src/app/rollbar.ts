import * as Rollbar from 'rollbar';

import { ErrorHandler } from '@angular/core';
import { Injectable, Injector } from '@angular/core';

import { InjectionToken } from '@angular/core';

// config here or put in config module and import
export let rollbarConfig = {
    accessToken: 'YOUR_TOKEN',
    captureUncaught: true,
    captureUnhandledRejections: true,
    enabled: true,
    environment: 'YOUR_ENV_NAME'
}

@Injectable()
export class RollbarErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(err:any) : void {
    var rollbar = this.injector.get(RollbarService);
    rollbar.error(err.originalError || err);
  }
}

export function rollbarFactory() {
    return new Rollbar(rollbarConfig);
}

export const RollbarService = new InjectionToken<Rollbar>('rollbar');
