import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'fbc-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // this affact all the children components
})

export class CompanyTableComponent implements OnInit {

  @Input()
  companies: Company[];

  constructor() { }

  ngOnInit() {
  }

}
