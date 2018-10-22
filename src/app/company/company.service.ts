import { Injectable } from '@angular/core';
import { Company } from './company';

// this is a code that can be injected to other components
// CompanyService is included in the dependency injection
@Injectable({
  providedIn: 'root' // new to ng6
})
export class CompanyService {

  constructor() { }

  getCompanies(): Company[] {
    return [
      { name: 'company1', phone: 12132, email: 'xie@jasldf.com' },
      { name: 'company2', phone: 121, email: 'xie@hgjgf.com' },
      { name: 'company3', phone: 121677632, email: 'xie@yuyu.com' },
    ];
  }
}
