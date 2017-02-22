import { FirebaseNgPage } from './app.po';

describe('firebase-ng App', function() {
  let page: FirebaseNgPage;

  beforeEach(() => {
    page = new FirebaseNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
