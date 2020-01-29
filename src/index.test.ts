import { main } from './index';

describe('Teste', () => {
  test('teste inicial', () => {
    const expectResp = main();
    expect(expectResp).toEqual(true);
  });
});
