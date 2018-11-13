import { Component, OnInit } from "@angular/core";
import { Company } from "./company/company";
import { CompanyService } from "./company/company.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { TaskService } from "./task/task.service";

@Component({
  selector: "fbc-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  //
  title = "Task manager";
  companyCount$ : Observable<number>;
  taskCount$ : Observable<number>;

  constructor(private companyService: CompanyService, private taskService: TaskService) {}

  ngOnInit(): void {
    this.companyCount$ = this.companyService
      .getCompanies()
      .pipe(map(companies => companies.length));

      this.taskCount$ = this.taskService
      .getTasks()
      .pipe(map(tasks => tasks.length));
  }

  keyPressed(event) {
    this.title = event.target.value;
  }
}
