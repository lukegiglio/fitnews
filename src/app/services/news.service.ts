import { Injectable } from '@angular/core';
import Parser from 'rss-parser';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = 'https://rss.app/feeds/tML0tCeS2P1g0u3Z.xml';
  parser = new Parser({
    customFields: {
      item: [
        ['media:content', 'media:content', {keepArray: false}],
      ]
    }
  });

  CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
  CORS_NEW = "http://141.144.242.37:8080/"

    constructor() {}

  async parseUrl() {
    let feed: any;
    await this.parser.parseURL(this.CORS_NEW + this.apiUrl)
    .then(result => {
      console.log('Result ok: ');
      console.log(result);
      feed = result;
    })
    .catch (error => {
      throw(error);
    });
    console.log('Out: ');
    console.log(feed);
    return feed!.items;
  }

  async getNews() {
    return await this.parseUrl();
  }
}
