import { Component, OnInit } from "@angular/core";
import { Task } from "../task";
import { TaskService } from "../task.service";
import { pipe, Subscription, Observable } from "rxjs";
import { tap, finalize } from "rxjs/operators";

@Component({
  selector: "fbc-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"]
})

// , OnAfterViewInit another module
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;

  // same as 3 lines above, just a nice shortcut
  constructor(private taskService: TaskService) {
    // fire first and then ngOnInit
  }

  ngOnInit() {
    // best place to setup things
    this.tasks$ = this.taskService.getTasks();
  }

  loadCompanies() {
    this.tasks$ = this.taskService
      .getTasks()
      .pipe(
        tap(
          x => console.log("Tap in component", x),
          finalize(() => console.log("Finalize"))
        )
      );
  }

  deleteTaskInParentComponent(task: Task) {
    this.taskService.deleteTask(task);

  }

  logSomething(text: string) {
    console.log(text);
  }
}
