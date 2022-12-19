import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarModule} from 'primeng/toolbar';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {SidebarModule} from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,ToolbarModule,MenuModule,SidebarModule,ButtonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  display:boolean = false;
  constructor() { 
    this.items = [
      {label: 'Portfolio', icon: 'pi pi-fw pi-id-card',routerLink:'/'},
      {label: 'Blog', icon: 'pi pi-fw pi-book',routerLink:'blog'},
      {label: 'Note', icon: 'pi pi-fw pi-file-edit',routerLink:'note'},
      {label: 'About', icon: 'pi pi-fw pi-info-circle',routerLink:'about'}
  ];
  }

  ngOnInit(): void {
  }

}
