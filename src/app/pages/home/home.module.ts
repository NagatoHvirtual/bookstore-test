import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgModule } from "@angular/core";
import { SliderComponent } from '@components/slider/slider.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ProductComponent } from '@components/product/product.component';
import { InitialNamePipe } from 'src/app/pipes/initial-name.pipe';
import { BooksService } from '@services/books.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PostComponent } from '@components/post/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: HomeComponent }
]

@NgModule({
  imports: [
    CommonModule,
    InfiniteScrollModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  declarations: [
    HomeComponent,
    SliderComponent,
    ProductComponent,
    InitialNamePipe,
    PostComponent
  ],
  providers: [
    BooksService
  ]
})
export class HomeModule { }
