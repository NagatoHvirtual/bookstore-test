import { TranslateService } from '@ngx-translate/core';
import { BooksResultInterface } from './../../interfaces/books.interface';
import { BooksService } from '@services/books.service';
import { Component, OnInit } from "@angular/core";
import { PostInterface } from '@interfaces/posts.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private bookService: BooksService,
    private translate: TranslateService
  ) { }

  private pageNumber = 1;
  private postImageList = [{
    image: 'assets/imgs/b1.jpg'
  }, {
    image: 'assets/imgs/b2.jpg'
  }]

  public books: BooksResultInterface[] = [];
  public postList: PostInterface[] = this.setPostList();
  public nextEnable = true;
  public search = '';
  public formContact: FormGroup = new FormGroup({
    name: new FormControl('', { validators: [Validators.required]}),
    email: new FormControl('', { validators: [Validators.required, Validators.email]}),
    phone: new FormControl('', { validators: [Validators.required, Validators.pattern('[ +()0-9]+')]}),
    message: new FormControl('', { validators: [Validators.required]}),
  })

  ngOnInit() {
    this.getBooks();
  }

  public getBooks() {
    this.nextEnable && this.bookService.get({ page: this.pageNumber, search: this.search }).subscribe(data => {
      this.books = [...this.books, ...data.results];
      if (data.next) { this.pageNumber++ } else { this.nextEnable = false; }
    });
  }

  public onSubmitSearch($event: any) {
    $event.preventDefault();
    this.books = [];
    this.pageNumber = 1;
    this.nextEnable = true;

    this.getBooks()
  }

  public onSubmitContact() {
    this.formContact.markAllAsTouched()
    this.formContact.updateValueAndValidity();
    if(this.formContact.valid) {
      alert(JSON.stringify(this.formContact.getRawValue()))
    }
  }

  private setPostList() {
    const postList: PostInterface[] = this.translate.instant('posts.list')
    return this.postImageList.map((val, index) => { return { ...val, ...postList[index] } })
  }
}
