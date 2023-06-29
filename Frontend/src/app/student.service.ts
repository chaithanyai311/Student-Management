import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private webReqService: WebRequestService) {                }

  createStudentList(rollno: number, name: string, studentClass: string, gender: string, studentid: string, contact: string) {
    const studentData = { rollno, name, studentClass, gender, studentid, contact };
    return this.webReqService.post('studentList', studentData);
  }

  getStudentLists() {
    return this.webReqService.get('studentList');
  }

  deleteStudentList(id: string) {
    return this.webReqService.delete(`studentList/${id}`);
  }

  updateStudentList(id: string, rollno: number, name: string, studentClass: string, gender: string, studentid: string, contact: string) {
    const updatedStudentData = { rollno, name, studentClass, gender, studentid, contact };
    return this.webReqService.patch(`studentList/${id}`, updatedStudentData);
  }
  
  
}
