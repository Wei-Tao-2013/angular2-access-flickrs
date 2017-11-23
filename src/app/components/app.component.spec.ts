import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MainAppComponent } from './app.component';

beforeEachProviders(() => [MainAppComponent]);

describe('App: Angular2FlickrObservables', () => {
  it('should create the app',
      inject([MainAppComponent], (app: MainAppComponent) => {
    expect(app).toBeTruthy();
  }));

  
});
