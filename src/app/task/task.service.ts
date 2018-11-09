import { Injectable } from "@angular/core";
import { Task } from "./task";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, observable, BehaviorSubject } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
}) //test comment: benjamin tan
export class TaskService {
  loadTasks(): any {
    this.httpClient
      .get<Task[]>(`${this.API_BASE}/company`)
      .pipe(
        tap(x => console.log("Tap", x)),
        catchError(e => this.errorHandler<Task[]>(e))
      )
      .subscribe(c => {
        this.tasks$.next(c);
      });
  }

  errorHandler<T>(error: Error): Observable<T> {
    console.error("ERROR CAUGHT IN SERVICE", error);
    throw error;
  }
  API_BASE = environment.API_BASE;

  getTasks(entityid: number): Observable<Task[]> {
    return this.tasks$;
  }

  constructor(private httpClient: HttpClient) {
    this.loadTasks();
  }

  tasks$ = new BehaviorSubject<Task[]>([]);
}
