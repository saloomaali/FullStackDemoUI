import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../Services/employees.service';
import { Employee } from '../models/employee.models';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit{

  employeeDetails: Employee ={
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  }
  constructor(private route: ActivatedRoute, private employeesServices: EmployeesService, private router: Router){

  }
  ngOnInit(): void {

    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        console.log(id);
        if(id){
          this.employeesServices.getEmployee(id).subscribe({
            next: (response) => {
              console.log(response);
              this.employeeDetails = response;
            }
          })
        }
      }
    })
    }

    updateEmployee(){
      this.employeesServices.updateEmployee(this.employeeDetails.id, this.employeeDetails).subscribe({
        next: (response) => {
          this.router.navigate(['employees']);
        }
      })
    }

    deleteEmployee(){
      this.employeesServices.deleteEmployee(this.employeeDetails.id).subscribe({
        next: (response) => {
          this.router.navigate(['employees']);        }
      })
    }
 

}
