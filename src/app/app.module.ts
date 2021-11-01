import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StaffFormComponent } from './staff-form/staff-form.component';
import { StaffDataComponent } from './staff-data/staff-data.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffFormComponent,
    StaffDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
