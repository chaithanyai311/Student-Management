import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Student {
  _id: string;
  rollno: number;
  name: string;
  studentClass: string;
  gender: string;
  studentid: number;
  contact: string;
}

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.scss']
})
export class EditDetailComponent {

  studentList: Student[] = [];
  selectedStudent: Student | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getStudentList();
  }

  getStudentList() {
    this.http.get<Student[]>('http://localhost:3000/studentList').subscribe(
      (response) => {
        this.studentList = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  selectStudent(student: Student) {
    this.selectedStudent = student;
  }

  updateStudent() {
    if (!this.selectedStudent) {
      return;
    }

    const { _id, rollno, name, studentClass, gender, studentid, contact } = this.selectedStudent;
    const updatedStudent = { rollno, name, studentClass, gender, studentid, contact };

    this.http.patch(`http://localhost:3000/studentList/${_id}`, updatedStudent).subscribe(
      (response) => {
        console.log(response);
        this.selectedStudent = null;
        this.getStudentList();
        alert("Updated successfully")
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
}
