export interface Task {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  assignedTo: number;
  status: string;
}
