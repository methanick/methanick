import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-detail-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail-page.component.html',
  styleUrls: ['./blog-detail-page.component.scss']
})
export class BlogDetailPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
