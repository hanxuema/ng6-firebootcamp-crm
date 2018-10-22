import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'fbc-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // this detects changes, this affact all the children components
})
export class CompanyTableComponent implements OnInit {
  @Input() // using input for values coming in
  companies: Company[];

  @Output()
  deleteClicked = new EventEmitter<Company>();

  constructor() {}

  deleteCompanyInChildComponent(company: Company) {
    // this.deleteClicked.next(company);
    // emit is the same as next
    this.deleteClicked.emit(company);
  }

  ngOnInit() {}
}
