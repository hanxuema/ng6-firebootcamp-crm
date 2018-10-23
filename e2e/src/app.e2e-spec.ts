import { AppPage } from './app.po';
import { HomePage } from './home.po';
import { by,element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getH1Text()).toEqual('Welcome to firebootcamp-crm!');
  });

  it("click navigation", ()=>{
    page.navigateTo();
    page.clickTitle();
    expect(element(by.css("fbc-root p")).getText()).toEqual("home works!");
  })

  it('Home page', () => {
    var homePage = new HomePage();
    homePage.navigateTo();
    expect(homePage.getParagraphText()).toEqual('home works!');
  });

});
