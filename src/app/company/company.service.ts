import { Injectable } from "@angular/core";
import { Company } from "./company";
import { HttpClient } from "@angular/common/http";
import { Observable, observable } from "rxjs";
import { tap, catchError } from "rxjs/operators";

// this is a code that can be injected to other components
// CompanyService is included in the dependency injection
@Injectable({
  providedIn: 'root' // new to ng6
})
export class CompanyService {
  API_BASE = "http://firebootcamp-crm-api.azurewebsites.net/api";

  constructor(private httpClient: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.API_BASE}/company`)
    .pipe(
        tap( x => console.log("Tap", x)),
        catchError(this.errorHandler)
    );


    // return [
    //   { name: 'company1', phone: 12132, email: 'xie@jasldf.com' },
    //   { name: 'company2', phone: 121, email: 'xie@hgjgf.com' },
    //   { name: 'company3', phone: 121677632, email: 'xie@yuyu.com' },
    // ];
  }
  errorHandler(error: Error): Observable<Company[]>{
    console.error("ERROR CAUGHT IN SERVICE", error);
    //throw error;
    return new Observable<Company[]>();
  }
}
