import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ImageGalerryModule} from './image-galerry/image-galerry.module';
import {GalleryConfig} from './image-galerry/token';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        ImageGalerryModule
    ],
  providers: [{provide: GalleryConfig, useValue: 2}],
  bootstrap: [AppComponent]
})
export class AppModule { }
