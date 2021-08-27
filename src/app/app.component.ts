import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DemoDialogStaticComponent } from './demo-dialog-static/demo-dialog-static.component';
import { DemoDialogTypeSafeComponent } from './demo-dialog-type-safe/demo-dialog-type-safe.component';
import { DemoDialogComponent } from './demo-dialog/demo-dialog.component';
import { DialogService } from './dialog-commons/domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-mat-dialog-type-safety';

  constructor(
    private dialog: MatDialog,
    private dialogService: DialogService
  ) {}

  openDialog() {
    this.dialog.open<
      DemoDialogComponent,
      { firstName: string; lastName: string }
    >(DemoDialogComponent, {
      data: { firstName: 'Robin', lastName: 'Gander' },
    });
  }

  openDialogStatic() {
    DemoDialogStaticComponent.open(this.dialog, {
      firstName: 'Robin',
      lastName: 'Gander',
    });
  }

  openDialogTypeSafe() {
    this.dialogService.openDialog(DemoDialogTypeSafeComponent, {
      firstName: 'Robin',
      lastName: 'Gander',
    });
  }
}
