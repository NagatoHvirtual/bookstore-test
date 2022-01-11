import { Component, Input } from '@angular/core';
import { PostInterface } from '@interfaces/posts.interface';

@Component({
  selector: 'post-component',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() item: PostInterface = {}
}
