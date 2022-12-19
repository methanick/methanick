import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-detail-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-detail-page.component.html',
  styleUrls: ['./note-detail-page.component.scss']
})
export class NoteDetailPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
