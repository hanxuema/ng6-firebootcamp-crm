import { Component, OnInit } from "@angular/core";
import { Company } from "../company";
import { CompanyService } from "../company.service";
import { pipe, Subscription, Observable } from "rxjs";
import { tap, finalize } from "rxjs/operators";

@Component({
  selector: "fbc-company-list",
  templateUrl: "./company-list.component.html",
  styleUrls: ["./company-list.component.scss"]
})

// , OnAfterViewInit another module
export class CompanyListComponent implements OnInit {
  companies$: Observable<Company[]>;

  // same as 3 lines above, just a nice shortcut
  constructor(private companyService: CompanyService) {
    // fire first and then ngOnInit
  }

  ngOnInit() {
    // best place to setup things
    this.loadCompanies();
  }

  loadCompanies() {
    this.companies$ = this.companyService
      .getCompanies()
      .pipe(
        tap(
          x => console.log("Tap in component", x),
          finalize(() => console.log("Finalize"))
        )
      );
  }

  deleteCompanyInParentComponent(company: Company) {
    this.companyService.deleteCompany(company).subscribe(next => {
      // MUST HAVE SUBSCRIBER, OTHERWISE DELETE COMPANY NOT FIRE
      this.loadCompanies();
      console.log("delete" + next);
    });
  }

  logSomething(text: string){
    console.log(text);
  }
}
