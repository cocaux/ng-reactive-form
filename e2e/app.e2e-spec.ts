import { NgReactiveFormPage } from './app.po';

describe('ng-reactive-form App', () => {
  let page: NgReactiveFormPage;

  beforeEach(() => {
    page = new NgReactiveFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
