import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BlogDetailPageComponent } from './pages/blog-page/blog-detail-page/blog-detail-page.component';
import { BlogListPageComponent } from './pages/blog-page/blog-list-page/blog-list-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { NoteDetailPageComponent } from './pages/note-page/note-detail-page/note-detail-page.component';
import { NoteListPageComponent } from './pages/note-page/note-list-page/note-list-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';

const routes: Routes = [
  {path:'', component:PortfolioPageComponent},
  {path:'about', component:AboutPageComponent},
  {path:'blog', component:BlogListPageComponent},
  {path:'blog/:id', component:BlogDetailPageComponent},
  {path:'note', component:NoteListPageComponent},
  {path:'note/:id', component:NoteDetailPageComponent},
  {path:'**', component:NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
