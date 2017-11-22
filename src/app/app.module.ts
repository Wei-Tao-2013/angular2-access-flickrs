import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MainAppComponent } from './components/app.component';
import { HttpModule,Jsonp,JsonpModule } from '@angular/http';

@NgModule({
  declarations: [
    MainAppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  entryComponents: [MainAppComponent],
  bootstrap: [MainAppComponent]
})
export class AppModule {

}
