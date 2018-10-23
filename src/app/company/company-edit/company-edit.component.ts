import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { CompanyService } from "../company.service";
import { Company } from "../company";

@Component({
  selector: "fbc-company-edit",
  templateUrl: "./company-edit.component.html",
  styleUrls: ["./company-edit.component.scss"]
})
export class CompanyEditComponent implements OnInit {
  companyId: number;
  isNewCompany: boolean;
  companyForm: FormGroup;

  constructor(
    private companyService: CompanyService,
    private router: Router,
    private activateRouter: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    // get the companyId
    // snapshot give the current value of the router
    this.companyId = this.activateRouter.snapshot.params["id"];
    this.isNewCompany = this.companyId == 0;
    this.buildForm();
    if (!this.isNewCompany) {
      // get company detail
      this.companyService
        .getCompany(this.companyId)
        .subscribe(data => this.companyForm.patchValue(data));
    }
  }

  saveCompany() {
    console.log(this.companyForm);
    if (!this.isNewCompany) {
      const updateCompany: Company = {...this.companyForm.value,id: this.companyId};
      this.companyService
        .updateCompany(updateCompany)
        .subscribe(() => this.router.navigate(["/company/list"]));
    } else {
      this.companyService
        .addCompany(this.companyForm.value)
        .subscribe(() => this.router.navigate(["/company/list"]));
    }
  }

  buildForm() {
    this.companyForm = this.formBuilder.group({
      name: ["", Validators.required],
      phone: [""],
      email: [""]
    });
  }
}
