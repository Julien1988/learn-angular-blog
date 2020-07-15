import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mon-blog';

  posts = [
    {
      title: 'Super article !!!',
      content: 'Voici un article très intéréssent !',
      onLikeItCount: 0,
      onHateItCount: 0,
    },
    {
      title: 'Un truc sur un truc',
      content: 'A lire vite',
      onLikeItCount: 0,
      onHateItCount: 0,
    },
  ];
}
