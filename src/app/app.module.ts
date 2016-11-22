import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {WizardComponent} from './wizard/wizard.component';
import {WizardService} from './wizard/wizard.service';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    WizardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
