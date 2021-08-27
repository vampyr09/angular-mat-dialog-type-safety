import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

type DemoDialogStaticComponentInput = {
  firstName: string;
  lastName: string;
};

@Component({
  template: ` <p>Hallo, {{ data.firstName }} {{ data.lastName }}</p>`,
})
export class DemoDialogStaticComponent {
  static open(dialog: MatDialog, data: DemoDialogStaticComponentInput) {
    dialog.open(this, { data });
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DemoDialogStaticComponentInput
  ) {}
}
