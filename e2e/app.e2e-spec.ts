import { ClientDBPage } from './app.po';

describe('client-db App', function() {
  let page: ClientDBPage;

  beforeEach(() => {
    page = new ClientDBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
