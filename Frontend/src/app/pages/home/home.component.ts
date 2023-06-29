import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  activeTab: string = '';
  showAddDetailComponent = false;
  showViewDetailComponent = false;

  showAddDetail() {
    this.showAddDetailComponent = true;
    this.showViewDetailComponent = false;
  }

  showViewDetail() {
    this.showAddDetailComponent = false;
    this.showViewDetailComponent = true;
  }
}
