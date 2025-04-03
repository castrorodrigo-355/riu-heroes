import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styles: [],
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { id: string; isLoading: Observable<boolean> }
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    setTimeout(() => {
      this.dialogRef.close(true);
    }, 1500);
  }
}
