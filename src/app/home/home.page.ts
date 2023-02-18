import { Component, OnInit } from '@angular/core';
import Parser from 'rss-parser';
import VConsole from 'vconsole';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  news:  ({"media:content": any;} & Parser.Item)[] = [];
  isDataLoaded: boolean = false;
  vConsole = new VConsole();


  constructor() {}

  async ngOnInit() {
    //this.news = await this.newsService.getNews();
    this.isDataLoaded = true;
  }

  async onClick() {
    this.news.forEach(entry => {
      if (entry['media:content']) console.log(entry['media:content'].$.url);
    })
  }

  goToUrl(url: any) {
    window.location.href = url;
  }

  onSaveBookmark() {
    console.log('Saving bookmark!');
  }
}
