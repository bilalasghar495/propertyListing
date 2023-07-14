import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableViewComponent } from './pages/table-view/table-view.component';
import { CardViewComponent } from './pages/card-view/card-view.component';

const routes: Routes = [
  {
    path: 'tableView',
    component: TableViewComponent,
  },
  {
    path: 'cardView',
    component: CardViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
