import { NgModule } from '@angular/core';
import { LoginComponent } from './login';
import { ListComponent } from './list';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [AdminRoutingModule],
  declarations: [LoginComponent, ListComponent],
})
export class AdminModule {}
