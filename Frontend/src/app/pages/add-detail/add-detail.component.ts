import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-add-detail',
  templateUrl: './add-detail.component.html',
  styleUrls: ['./add-detail.component.scss']
})
export class AddDetailComponent {
  
  student: any = {}; // Empty student object to store form data
  
  constructor(private studentService: StudentService,private route: Router) { }

  saveStudent() {
    const { rollno, name, studentClass, gender, studentid, contact } = this.student;
    this.studentService.createStudentList(rollno, name, studentClass, gender, studentid, contact)
      .subscribe(response => {
        // Handle the response from the service if needed
        console.log(response);
        alert("Student details added successfully");
        this.route.navigate(['/']);
        
      });
  }

  
}
