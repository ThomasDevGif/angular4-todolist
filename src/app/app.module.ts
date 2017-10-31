import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule, RoutedComponents }   from './app-routing.module';

// Components
import { AppComponent } from './app.component';

// Services

@NgModule({
  declarations: [
    AppComponent,
    RoutedComponents
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
