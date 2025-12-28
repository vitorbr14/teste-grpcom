// Como nada está sendo buscado de uma API real, essa função simula um atraso na resposta.

export function mockDelay(): Promise<void> {
  const min = 500;
  const max = 1000;

  const delay = Math.floor(Math.random() * (max - min + 1)) + min;

  return new Promise((resolve) => setTimeout(resolve, delay));
}
