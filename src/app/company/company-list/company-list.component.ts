import { Component, OnInit } from "@angular/core";
import { Company } from "../company";
import { CompanyService } from "../company.service";
import { pipe } from "rxjs";
import { tap } from "rxjs/operators";

@Component({
  selector: "fbc-company-list",
  templateUrl: "./company-list.component.html",
  styleUrls: ["./company-list.component.scss"]
})

// , OnAfterViewInit another module
export class CompanyListComponent implements OnInit {
  companies: Company[];

  // companyService: CompanyService;
  // constructor(companyService: CompanyService) {
  //   this.companyService = companyService;
  // }

  // same as 3 lines above, just a nice shortcut
  constructor(private companyService: CompanyService) {
    // fire first and then ngOnInit
  }

  ngOnInit() {
    // best place to setup things
    this.companyService.getCompanies()
    .pipe(
      tap(x=>console.log('Tap in component', x))
    )
    .subscribe(
      data => {
        this.companies = data;
      },
      error => console.error(error),
      () => console.log('Observable complete')
    );
  }
}
