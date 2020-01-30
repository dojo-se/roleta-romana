import { main, roleta, matar, sobreviventes } from './index';

describe('Teste', () => {

  test('Teste inicial', () => {
    const expectResp = main();
    expect(expectResp).toEqual(true);
  });
  
  test('Testa a morte', () => {
    const expectResp = roleta(5, 2, 1);
    const expectResult = {
      ordem: [2, 5, 3, 1],
      sobrevivente: 4
    };
    expect(expectResp).toEqual(expectResult);
  });
  
  
  test(`Testa caso base`, () => {
    const expectResp = roleta(1, 2, 1);
    const expectResult = {
      ordem: [],
      sobrevivente: 1
    };
    expect(expectResp).toEqual(expectResult);
  });

  test(`Testa a funcao de matar`, () => {
    const expectResp = matar(2, 2, 1);
    const expectResult = [1];
    expect(expectResp).toEqual(expectResult);
  });
  
  test(`Testa a funcao de matar n==5`, () => {
    const expectResp = matar(5, 2, 1);
    const expectResult = [2, 5, 3, 1];
    expect(expectResp).toEqual(expectResult);
  });

  test(`Testa o sobrevivente`, () => {
    const coletivo = [1, 2, 3, 4];
    const mortos = [1, 2, 3];

    const expectResp = sobreviventes(coletivo, mortos);
    expect(expectResp).toEqual(4);
  });

  test(`Testa a roleta final`, () => {
    const expectResp = roleta(5, 2, 1);
    const expectResult = {
      ordem: [2, 5, 3, 1],
      sobrevivente: 4
    };
    expect(expectResp).toEqual(expectResult);
  });




});
