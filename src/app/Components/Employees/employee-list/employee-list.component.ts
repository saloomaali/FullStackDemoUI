import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/Services/employees.service';
import { Employee } from 'src/app/models/employee.models';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees: Employee[] =[];
  constructor(private employeesService : EmployeesService){

  }

  ngOnInit(){
    this.employeesService.getAllEmployees().subscribe({
      next:  (employees) => {
        this.employees = employees;
        console.log(employees)
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}
