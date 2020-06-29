import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatDatepickerModule} from '@angular/material';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Datepicker1Component } from './datepicker1/datepicker1.component';
import { Datepicker2Component } from './datepicker2/datepicker2.component';

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, ReactiveFormsModule, MatDatepickerModule, MatFormFieldModule, MatInputModule],
  declarations: [AppComponent, HelloComponent, Datepicker1Component, Datepicker2Component],
  bootstrap: [AppComponent]
})
export class AppModule { }
