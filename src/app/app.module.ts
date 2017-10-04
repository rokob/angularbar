import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { RollbarService, RollbarErrorHandler, rollbarFactory } from './rollbar';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
		{
			provide: ErrorHandler,
			useClass: RollbarErrorHandler
		},
		{
				provide: RollbarService,
				useFactory: rollbarFactory
		},
	],
  bootstrap: [AppComponent]
})

export class AppModule { }
