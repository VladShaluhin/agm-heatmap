import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AgmHeatmapModule } from '../agm-heatmap/agm-heatmap.module';
import { TestControl } from './test-contrl';


@NgModule({
  declarations: [
    AppComponent,
    TestControl
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD3SYG9sNtaPnoRWtEECmUVh3lPk3cFp6Y',
      libraries: ['visualization']
    }),
    AgmHeatmapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
