import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersListService } from 'src/app/service/users-list.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, SortDirection } from '@angular/material/sort';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  userData: any = [];
  public displayColumn: any[] = [
    'No.',
    'Title',
    'PropertType',
    'Address',
    'BedRooms',
    'BathRooms',
    'CoveredArea',
    'Commercial',
    'Price',
  ];

  public dataSource: any = [];
  propertytype: any;
  constructor(private usersListService: UsersListService) {
    this.usersListService.getUserData().subscribe((response) => {
      this.userData = response;
      this.dataSource.data = this.userData;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource([]);
  }

  search() {
    if (this.propertytype === '') {
      this.dataSource.data = this.userData;
    } else {
      this.dataSource.data = this.userData.filter((item: any) => {
        return item.propertytype
          .toLowerCase()
          .includes(this.propertytype.toLowerCase());
      });
    }
    this.paginator.firstPage();
  }
}
