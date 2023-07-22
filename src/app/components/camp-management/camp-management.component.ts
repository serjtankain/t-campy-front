// camping-cards.component.ts

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CampingCardService} from "../../services/camping-card.service";

@Component({
  selector: 'app-camp-management',
  templateUrl: './camp-management.component.html',
  styleUrls: ['./camp-management.component.css'],
})
export class CampManagementComponent implements OnInit {
  campingCards: any[] = [];
  newCard: any = {
    placeToVisit: '',
    numOfGroupMembers: 0,
    image: '',
    description: '',
  };

  constructor(private campingCardService: CampingCardService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadCampingCards();
  }

  loadCampingCards() {
    this.campingCardService.getCampingCards().subscribe((cards: any[]) => {
      this.campingCards = cards;
    });
  }

  openFormDialog() {
    const dialogRef = this.dialog.open(CampingCardFormDialog, {
      width: '400px',
      data: this.newCard,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.campingCardService.createCampingCard(result).subscribe(() => {
          this.loadCampingCards();
        });
      }
    });
  }

}
@Component({
  selector: 'app-camping-card-form-dialog',
  templateUrl: './camping-card-form-dialog.html',
})
export class CampingCardFormDialog {
  constructor(public dialogRef: MatDialogRef<CampingCardFormDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }
}


