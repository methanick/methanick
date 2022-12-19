import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-note-list-page',
  standalone: true,
  imports: [CommonModule,CardModule,FormsModule,InputTextModule,ButtonModule],
  templateUrl: './note-list-page.component.html',
  styleUrls: ['./note-list-page.component.scss']
})
export class NoteListPageComponent implements OnInit {
  searchText:string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
