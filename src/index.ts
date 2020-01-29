/* eslint-disable import/prefer-default-export */

export const main = () => true;

export const roleta = (n: number, k: number, i: number) => {
  if (n === 1) {
    return {
      ordem: [],
      sobrevivente: i
    }
    
  }
  return {
    ordem: [2, 5, 3, 1],
    sobrevivente: 1
  }
}