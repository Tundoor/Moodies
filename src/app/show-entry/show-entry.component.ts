import { Component, OnInit, ViewChild} from '@angular/core';
import { EntryModalComponent } from '../entry-modal/entry-modal.component';

@Component({
  selector: 'app-show-entry',
  templateUrl: './show-entry.component.html',
  styleUrls: ['./show-entry.component.css']
})
export class ShowEntryComponent {

   @ViewChild('modal', { static: false })
  modal!: EntryModalComponent;

  openModal() {
    this.modal.open();
  }

}
