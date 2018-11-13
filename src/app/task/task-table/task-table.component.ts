import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'fbc-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // this detects changes, this affact all the children components
})
export class TaskTableComponent implements OnInit {
  @Input() // using input for values coming in
  tasks: Task[];

  @Output()
  deleteClicked = new EventEmitter<Task>();

  constructor() {}

  deleteTaskInChildComponent(task: Task) {
    // this.deleteClicked.next(company);
    // emit is the same as next
    this.deleteClicked.emit(task);
  }

  ngOnInit() {}
}
