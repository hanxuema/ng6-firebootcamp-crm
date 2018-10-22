import { Injectable } from "@angular/core";
import { Company } from "./company";
import { HttpClient } from "@angular/common/http";
import { Observable, observable } from "rxjs";
import { tap, catchError } from "rxjs/operators";

// this is a code that can be injected to other components
// CompanyService is included in the dependency injection
@Injectable({
  providedIn: "root" // new to ng6, this means this provider is in root module
})
export class CompanyService {
  API_BASE = "http://firebootcamp-crm-api.azurewebsites.net/api";

  constructor(private httpClient: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.API_BASE}/company`).pipe(
      tap(x => console.log("Tap", x)),
      catchError(e => this.errorHandler<Company[]>(e))
    );
  }

  deleteCompany(company: Company): Observable<Company> {

    return this.httpClient
      .delete<Company>(`${this.API_BASE}/company/${company.id}`)
      .pipe(catchError(e => this.errorHandler<Company>(e)));
  }

  errorHandler<T>(error: Error): Observable<T> {
    console.error("ERROR CAUGHT IN SERVICE", error);
    throw error;
  }
}
