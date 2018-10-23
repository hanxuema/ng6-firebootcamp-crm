import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { of } from "rxjs";
import { CompanyService } from "./company/company.service";

describe("AppComponent", () => {

  let companySvc;
  let component : AppComponent;

  beforeEach(() => {
    companySvc = {
      getCompanies: () => of([{
        id:1,
        name: 'Fake Company',
        email : 'fakeEmail@ssw.com.au',
        phone: 12345,
      }]),
      API_BASE:''
    };
    component = new AppComponent(companySvc);
  });

  it("should return 2", () => {
    expect(1 + 1).toEqual(2);
  });

  it("title should be firebootcamp-crm", () => {

    const component = new AppComponent(companySvc);
    expect(component.title).toEqual("firebootcamp-crm");
  });

  it(`companyCount = 1`, () => {
    component.ngOnInit();
    component.companyCount$.subscribe(c => {
      expect(c).toEqual(1);
    });
  });
});
