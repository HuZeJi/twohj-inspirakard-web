import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardTestingComponent } from './card-testing/card-testing.component';

const routes: Routes = [
  {
    path: '',
    component: CardTestingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestModuleRoutingModule {}
