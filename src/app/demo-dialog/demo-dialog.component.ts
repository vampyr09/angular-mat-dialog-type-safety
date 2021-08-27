import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  template: ` <p>Hallo, {{ data.firstName }} {{ data.lastName }}</p>`,
})
export class DemoDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
