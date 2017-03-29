import { browser, element, by } from 'protractor';
import { promise } from 'selenium-webdriver';
import Promise = promise.Promise;

export class Angular2Page {
  navigateTo(): Promise<any> {
    return browser.get('/');
  }

  getParagraphText(): Promise<string> {
    return element(by.css('app-root h1')).getText();
  }
}
