import { Component, OnInit } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies: Company[];

  constructor() { }

  ngOnInit() {
    this.companies = this.getCompanies();
  }

  getCompanies(): Company[] {
    return [
      { name: 'company1', phone: 12132, email: 'xiey@jasldf.com' },
      { name: 'company2', phone: 121, email: 'xiey@hgjgf.com' },
      { name: 'company3', phone: 121677632, email: 'xiey@yuyu.com' },
    ];
  }
}
