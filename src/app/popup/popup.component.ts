import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {

  modalData: any;

openthis(route: string) {

  console.log(route);
  this.router.navigate([route]);
  this.closePopup();
}
  closePopup() {
    this.activeModal.close();
  }

constructor(private router: Router,public activeModal: NgbActiveModal) {}


}
