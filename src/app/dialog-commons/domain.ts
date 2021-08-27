import { Component, Inject, Injectable } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

type Newable = { new (...args: any[]): any };
const dialogService: DialogService = null as any;

export type DialogContent<TInput> = TInput & { type: 'DialogContent' };

type FindDialogContentParameters<T extends unknown[]> = {
  [Key in keyof T]: T[Key] extends DialogContent<infer TInput> ? ExcludeNever<TInput> : never;
};
type FindDialogContent<T extends Newable> = FindDialogContentParameters<ConstructorParameters<T>>[number];

type ExcludeNever<T extends any> = T extends [infer Head, ...infer Tail]
  ? [Head] extends [never]
    ? ExcludeNever<Tail>
    : [Head, ...ExcludeNever<Tail>]
  : T;

//Example
// @Component({ template: `<p>Hello, {{ data.firstName }} {{ data.lastName }}</p>` })
// export class DemoDialogTypeSafeComponent {
//   constructor(@Inject(MAT_DIALOG_DATA) public data: DialogContent<{ firstName: string; lastName: string }>) {}
// }

@Injectable({ providedIn: 'root' })
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openDialog<TComponent extends Newable, TInput extends FindDialogContent<TComponent>>(
    component: TComponent,
    data: TInput
  ) {
    return this.dialog.open(component, { data });
  }
}

// dialogService.openDialog(DemoDialogTypeSafeComponent, {  });
