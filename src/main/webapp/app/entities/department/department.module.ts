import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GestiondeNoteFsegsSharedModule } from 'app/shared/shared.module';
import { DepartmentComponent } from './department.component';
import { DepartmentDetailComponent } from './department-detail.component';
import { DepartmentUpdateComponent } from './department-update.component';
import { DepartmentDeleteDialogComponent } from './department-delete-dialog.component';
import { departmentRoute } from './department.route';

@NgModule({
  imports: [GestiondeNoteFsegsSharedModule, RouterModule.forChild(departmentRoute)],
  declarations: [DepartmentComponent, DepartmentDetailComponent, DepartmentUpdateComponent, DepartmentDeleteDialogComponent],
  entryComponents: [DepartmentDeleteDialogComponent]
})
export class GestiondeNoteFsegsDepartmentModule {}