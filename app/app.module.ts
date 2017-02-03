import { ContactComponent } from './Contact/contact-form.component';
import { OnblurEventComponent } from './Demo/onblur-event.component';
import { FormsModule } from '@angular/forms';
import { EventFilteringComponent } from "./Demo/event-filtering.component";
import { KeyUpComponent } from "./Demo/key-up.component";
import { ItemListComponent } from './Demo/shopping-list.component';
import { UserDetailsComponent } from './Home/user-details.component';
import { NgModule }      from '@angular/core';
import { HomeComponent } from "./Home/home.component";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule , FormsModule ],
  declarations: [ AppComponent, HomeComponent, 
                  UserDetailsComponent, ItemListComponent, 
                  KeyUpComponent, EventFilteringComponent,
                  OnblurEventComponent, ContactComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
