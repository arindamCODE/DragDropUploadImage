import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageUploadModule } from "angular2-image-upload";

import { AppComponent } from './app.component';
import { UploaderComponent } from './uploader/uploader.component';

const routes: Routes = [
  { path: '', redirectTo: '/up', pathMatch: 'full' },
  { path: 'up', component: UploaderComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent
  ],
  imports: [
    BrowserModule,
    ImageUploadModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
