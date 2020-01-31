import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
 
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.page.html',
  styleUrls: ['./student-list.page.scss'],
})
export class StudentListPage implements OnInit {
 
  studentsData: any;
 
  constructor(
    public apiService: ApiService
  ) {
    this.studentsData;
  }
 
  ngOnInit() {
    this.apiService.getAllStudents();
  }
 
 
  delete(item) {
    //Supprimer l'étudiant à partir de son id
    this.apiService.deleteItem(item.id).subscribe(Response => {
      //Mettre à jour la liste des étudiants après suppression
      this.apiService.getAllStudents();
    });
  }
 
}