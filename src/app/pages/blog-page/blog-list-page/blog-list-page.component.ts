import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-blog-list-page',
  standalone: true,
  imports: [CommonModule,ButtonModule,CardModule,RouterModule,FormsModule,InputTextModule],
  templateUrl: './blog-list-page.component.html',
  styleUrls: ['./blog-list-page.component.scss']
})
export class BlogListPageComponent implements OnInit {
searchText:string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
