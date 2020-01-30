/* eslint-disable import/prefer-default-export */

export const main = () => true;

export const roleta = (n: number, k: number, i: number) => {
  if (n === 1) {
    return {
      ordem: [],
      sobrevivente: i
    } 
  }

  const mortos = matar(n, k, i);
  const coletivo = range(n);
  return {
    ordem: mortos,
    sobrevivente: sobreviventes(coletivo, mortos)
  }
}

const range = (n:number) => Array.from(new Array(n)).map((_, i) => i+1)

export const matar = (n: number, k: number, i: number) => { 
  const coletivo = range(n);
  let mortos: number[] = []
  let indice = i-1
  while (coletivo.length - mortos.length> 1) {
    mortos = [indice+1,...mortos]
    indice = (indice + k) % n
  }
  return mortos;
}

export const sobreviventes = (coletivo:any[] = [], mortos:any[] = []) => {
  const res = coletivo.find(pessoa => !mortos.includes(pessoa));
  return res;
}