import { Component, OnInit } from '@angular/core';
import { UsersListService } from 'src/app/service/users-list.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent implements OnInit {
  userData: any = [];
  public displayColumn: any[] = [
    'Name',
    'Email',
    'UserName',
    'Phone No',
    'Website',
  ];
  public dataSource: any = [];

  constructor(private usersListService: UsersListService) {
    this.usersListService.getUserData().subscribe((data) => {
      this.userData = data;
      this.dataSource = data;
      console.log(data);
    });
  }

  ngOnInit(): void {}
}
