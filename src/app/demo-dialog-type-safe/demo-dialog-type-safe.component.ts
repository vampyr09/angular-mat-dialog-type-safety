import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogContent } from '../dialog-commons/domain';

@Component({ template: ` <p>Hello, {{ data.firstName }} {{ data.lastName }}</p>` })
export class DemoDialogTypeSafeComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogContent<{ firstName: string; lastName: string }>) {}
}
