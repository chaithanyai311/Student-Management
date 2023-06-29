import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss']
})
export class ViewDetailComponent {

  constructor(private studentService: StudentService,private route: Router) { }

  students: any;
  selectedStudentId: string='';

  ngOnInit() {
    this.studentService.getStudentLists().subscribe((students: Object) => {
        this.students = students;
    })
  }

  onDeleteListClick(studentId: string) {
    this.studentService.deleteStudentList(studentId).subscribe(
      (res: any) => {
        console.log(res);
        // Refresh the student list after deletion
        this.studentService.getStudentLists().subscribe((students: Object) => {
          this.students = students;
        }); 
        alert("Student detail deleted successfully");
      },
      (error: any) => {
        console.log(error);
      }
    );
  } 
}
