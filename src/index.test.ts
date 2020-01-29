import { main, roleta } from './index';

describe('Teste', () => {

  test('Teste inicial', () => {
    const expectResp = main();
    expect(expectResp).toEqual(true);
  });
  
  test('Testa a morte', () => {
    const expectResp = roleta(5, 2, 1);
    const expectResult = {
      ordem: [2, 5, 3, 1],
      sobrevivente: 1
    };
    expect(expectResp).toEqual(expectResult);
  });

});
