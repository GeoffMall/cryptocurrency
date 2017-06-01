import { GeoffmallPage } from './app.po';

describe('geoffmall App', () => {
  let page: GeoffmallPage;

  beforeEach(() => {
    page = new GeoffmallPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
