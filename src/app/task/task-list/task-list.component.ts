import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {TaskService} from '../task.service';
import { Observable } from 'rxjs';
import { Task } from '../task';

@Component({
  selector: 'fbc-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(
    private taskService:  TaskService,
    private router: Router,
    private activeRouter: ActivatedRoute
    ) {

   }

  ngOnInit() {
    //getting all ther tasks
    //for the company, for the team, or for the person
    this.tasks$ = this.taskService.getTasks(entityid);
  }

}
