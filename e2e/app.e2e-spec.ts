import { JmPage } from './app.po';

describe('jm App', function() {
  let page: JmPage;

  beforeEach(() => {
    page = new JmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
