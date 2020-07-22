import { Component, OnInit } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {

  constructor(
    private dialog: MatDialogModule
  ) { }

  ngOnInit(): void {
  }

}
