# Desafio técnico Gazeta do Povo

## Pré-requisitos

- Node.js >= 18
- npm

## Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/vitorbr14/teste-grpcom.git
```

2. Entre na pasta do projeto:

```bash
cd teste-grpcom
```

3. Instalar as dependências

```bash
npm install
```

4. Rode o projeto em ambiente de desenvolvimento:
```bash
npx next dev
```
5. Acesse o projeto pelo navegador
```bash
localhost:3000/
```

## Decisões técnicas

- **Next.js (App Router)**: escolhido para facilitar rotas, SSR e organização do projeto.
- **Next.js (API)**: Utilizado para criar a API da aplicação, aproveitando as API Routes para centralizar frontend e backend no mesmo projeto, facilitando o desenvolvimento e o deploy.
- **CSS puro**: optei por não usar libs externas para manter o projeto simples e próximo do que foi pedido no desafio.
- **Fonte de dados mockada**: A aplicação utiliza dados mockados em arquivos JSON no lugar de um banco de dados. Esses dados são consumidos por uma API real construída com API Routes do Next.js, simulando o comportamento de uma aplicação em produção.
- **Testes**: Foram implementados testes básicos em alguns componentes principais para validar renderização e comportamento esperado.

## Estrutura de pastas

Decidi utilizar a [arquitetura baseada por features](https://dev.to/rufatalv/feature-driven-architecture-with-nextjs-a-better-way-to-structure-your-application-1lph).  
Mesmo sendo um projeto pequeno, essa abordagem facilita a escalabilidade, manutenção e leitura do código, mantendo componentes, hooks e serviços relacionados agrupados por domínio da aplicação.


## Uso de Inteligência Artificial

Durante o desenvolvimento deste projeto, utilizei principalmente a **documentação oficial do Next.js** como base de estudo e referência.

De forma complementar, recorri ao **ChatGPT como ferramenta de apoio pontual**, com o objetivo de acelerar a resolução de dúvidas específicas e destravar alguns pontos técnicos.

O uso da IA ocorreu principalmente nos seguintes contextos:

- **Search Params no Next.js (App Router)**  
  Eu ainda não tinha experiência prática prévia com o uso de search params no App Router. A IA foi utilizada para entender o funcionamento, exemplos de uso e boas práticas, sempre validando as informações com a documentação oficial.

- **Testes no Next.js**  
  Apesar de já possuir experiência com testes unitários e e2e no backend (Node.js / NestJS), ainda não havia testado aplicações Next.js anteriormente. A IA auxiliou no **setup inicial do ambiente de testes** e foi especialmente útil em um ponto mais desafiador: **mockar corretamente funções globais como `fetch` e comportamentos do ambiente de execução**.

Em todos os casos, a IA foi utilizada apenas como **suporte ao raciocínio**, não como substituição do entendimento técnico. Todas as soluções foram analisadas, adaptadas e integradas de acordo com o contexto do projeto.

