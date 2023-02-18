import { Injectable } from '@angular/core';
import Parser from 'rss-parser';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = 'https://rss.app/feeds/tLQzlpMFoNHqOfta.xml';
  parser = new Parser({
    customFields: {
      item: [
        ['media:content', 'media:content', {keepArray: false}],
      ]
    }
  });
  // Note: some RSS feeds can't be loaded in the browser due to CORS security.
  // To get around this, you can use a proxy.
  CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

    constructor() {}

  async parseUrl() {
    let feed: any;
    await this.parser.parseURL(this.apiUrl)
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