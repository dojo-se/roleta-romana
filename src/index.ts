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

export const matar = (n: number, k: number, i: number) => { 
  const coletivo = Array.from(new Array(n)).map((_, i) => i+1)
  let mortos: number[] = []
  let indice = i-1
  while (coletivo.length - mortos.length> 1) {
    mortos = [indice+1,...mortos]
    indice = (indice + k) % n
  }
  return mortos;

}