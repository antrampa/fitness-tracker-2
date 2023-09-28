import { Component } from "@angular/core";

@Component({
    selector: 'app-stop-training',
    template: `<h1 mat-dialog-title>Are you sure?</h1>
    
<div mat-dialog-title>
  <button mat-button mat-dialog-close>Yes</button>
  <button mat-button [mat-dialog-close]="false">No</button>
</div>`
})
export class StopTrainingComponent {

}