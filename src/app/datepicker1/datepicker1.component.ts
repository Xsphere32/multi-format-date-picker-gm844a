import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';


const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-datepicker1',
  templateUrl: './datepicker1.component.html',
  styleUrls: ['./datepicker1.component.css'],
  providers: [

    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class Datepicker1Component implements OnInit {

  @Output() date1: EventEmitter<any> = new EventEmitter<any>();

  date = new FormControl(moment());


  constructor() { }

  ngOnInit() {
  }

  change(dateEvent) {
    this.date1.emit(dateEvent.value)
  }
}

