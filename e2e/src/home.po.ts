import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/home');
  }

  getParagraphText() {
    return element(by.css('fbc-root p')).getText();
  }

}
