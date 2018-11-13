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
  API_BASE = environment.API_BASE;

  constructor(private httpClient: HttpClient) {
    this.loadTasks();
  }
  tasks$ = new BehaviorSubject<Task[]>([]);

  loadTasks(): any {
    this.httpClient
      .get<Task[]>(`${this.API_BASE}/tasks`)
      .pipe(
        tap(x =>
          console.log("Tap", x)),
        catchError(e => this.errorHandler<Task[]>(e))
      )
      .subscribe(c => {
        this.tasks$.next(c);
        console.log("State value : ", this.tasks$.getValue());
        console.log("State : ", this.tasks$);
      });
  }

  getTasks(entityid?: number): Observable<Task[]> {
    return this.tasks$;
  }

  deleteTask(task: Task): any {
    throw new Error("Method not implemented.");
  }

  errorHandler<T>(error: Error): Observable<T> {
    console.error("ERROR CAUGHT IN SERVICE", error);
    throw error;
  }

}
