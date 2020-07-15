import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() onLikeItCount: number;
  @Input() onHateItCount: number;
  constructor() {}

  ngOnInit(): void {}

  onLikeIt() {
    console.log('onLikeIt');
    return this.onLikeItCount++;
  }
  onHateIt() {
    console.log('onHateIt');
    this.onHateItCount++;
  }
}
