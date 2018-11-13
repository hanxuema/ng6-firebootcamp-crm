import { Injectable } from "@angular/core";
import { Company } from "./company";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, observable, BehaviorSubject } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { environment } from "../../environments/environment";
// this is a code that can be injected to other components
// CompanyService is included in the dependency injection
@Injectable({
  providedIn: "root" // new to ng6, this means this provider is in root module
})
export class CompanyService {
  API_BASE = "https://localhost:44339/api";

  constructor(private httpClient: HttpClient) {
    this.loadCompanies(); //anyone who call the service,
  }
  companies$ = new BehaviorSubject<Company[]>([]); //type of observable in rxjs,

  loadCompanies() {
    this.httpClient
      .get<Company[]>(`${this.API_BASE}/companies`)
      // .pipe(
      //   tap(x => console.log("Tap", x)),
      //   catchError(e => this.errorHandler<Company[]>(e))
      // )
      .subscribe(c => {
        console.log(c);
        this.companies$.next(c);
        console.log("State value : ", this.companies$.getValue());
        console.log("State : ", this.companies$);
      });
  }

  getCompanies(): Observable<Company[]> {
    return this.companies$;
  }

  deleteCompany(company: Company) {
    return this.httpClient
      .delete<Company>(`${this.API_BASE}/company/${company.id}`)
      .pipe(catchError(e => this.errorHandler<Company>(e)))
      .subscribe(c => this.loadCompanies());
  }

  updateCompany(company: Company) {
    return this.httpClient
      .put<Company>(`${this.API_BASE}/company/$(company.id)`, company, {
        headers: new HttpHeaders().set("content-type", "application/json")
      })
      .pipe(catchError(e => this.errorHandler<Company>(e)))
      .subscribe(c => this.loadCompanies());
  }

  addCompany(company: Company) {
    return this.httpClient
      .post<Company>(`${this.API_BASE}/company`, company, {
        headers: new HttpHeaders().set("content-type", "application/json")
      })
      .pipe(catchError(e => this.errorHandler<Company>(e)))
      .subscribe(c => this.loadCompanies());
  }

  getCompany(id: number): Observable<Company> {
    return this.httpClient.get<Company>(`${this.API_BASE}/company/${id}`);
  }

  errorHandler<T>(error: Error): Observable<T> {
    console.error("ERROR CAUGHT IN SERVICE", error);
    throw error;
  }
}
