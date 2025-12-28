const articles = [
  {
    id: "d17eb719-1025-4e14-a6d6-80682aba7886",
    title: "A Ascensão da Inteligência Artificial Generativa",
    subtitle:
      "Como ferramentas como o Grok estão transformando a criatividade e o trabalho diário",
    author: "Ana Silva",
    publishedAt: "2025-11-20",
    category: "Tecnologia",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    content:
      "A inteligência artificial generativa tem revolucionado diversos setores... Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "252154f2-4121-46d8-80b5-d90dcf6bef80",
    title: "Dicas para Manter a Saúde Mental no Trabalho Remoto",
    subtitle:
      "Estratégias práticas para equilibrar produtividade e bem-estar em casa",
    author: "Pedro Oliveira",
    publishedAt: "2025-10-15",
    category: "Saúde",
    heroImage: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65",
    content:
      "Com o aumento do trabalho remoto, muitos enfrentam desafios como isolamento e burnout... Lorem ipsum dolor sit amet.",
  },
  {
    id: "558ec74c-b745-4ee9-8923-96d9582111a7",
    title: "Investimentos Sustentáveis: O Futuro das Finanças",
    subtitle: "Como investir em empresas ecológicas e obter retornos sólidos",
    author: "Mariana Costa",
    publishedAt: "2025-09-28",
    category: "Finanças",
    heroImage: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e",
    content:
      "Os investimentos ESG (Environmental, Social and Governance) ganham espaço no mercado financeiro... Lorem ipsum dolor sit amet.",
  },
  {
    id: "9fdcfecb-d827-4dcf-8980-d9a965cf86f3",
    title: "As Melhores Destinos para Viagens em 2026",
    subtitle: "Lugares incríveis para explorar após a pandemia",
    author: "João Mendes",
    publishedAt: "2025-12-10",
    category: "Viagens",
    heroImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    content:
      "Com a recuperação do turismo, novos destinos emergem como favoritos... Lorem ipsum dolor sit amet.",
  },
  {
    id: "930743b2-0073-4e2b-b4e6-4fdd611d6a4f",
    title: "Mindfulness no Dia a Dia",
    subtitle:
      "Técnicas simples para reduzir o estresse e aumentar a produtividade",
    author: "Laura Ferreira",
    publishedAt: "2025-08-05",
    category: "Saúde",
    heroImage:
      "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "Praticar mindfulness não requer horas de meditação... Lorem ipsum dolor sit amet.",
  },
  {
    id: "b3b31ce5-48ec-432e-8577-c85998616437",
    title: "Criptomoedas em 2025: Tendências e Previsões",
    subtitle: "O que esperar do mercado de Bitcoin e altcoins",
    author: "Ricardo Alves",
    publishedAt: "2025-12-01",
    category: "Finanças",
    heroImage:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "O mercado de criptomoedas continua volátil, mas com maturidade crescente... Lorem ipsum dolor sit amet.",
  },
  {
    id: "dad463bb-f6ce-45d5-89a4-624f36687954",
    title: "O Impacto da Tecnologia na Educação",
    subtitle: "Ferramentas digitais que estão revolucionando a aprendizagem",
    author: "Sofia Ramos",
    publishedAt: "2025-07-18",
    category: "Tecnologia",
    heroImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
    content:
      "Plataformas online, realidade virtual e IA personalizada mudam como aprendemos... Lorem ipsum dolor sit amet.",
  },
  {
    id: "1f6c9603-507b-45b6-b4e3-df4d80ebc7be",
    title: "Alimentação Saudável no Orçamento Apertado",
    subtitle: "Receitas nutritivas e econômicas para o dia a dia",
    author: "Beatriz Lima",
    publishedAt: "2025-06-22",
    category: "Saúde",
    heroImage: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
    content:
      "Comer bem não precisa ser caro. Dicas de planejamento ajudam a manter uma dieta equilibrada... Lorem ipsum dolor sit amet.",
  },
  // --- NOVOS ARTIGOS ADICIONADOS ABAIXO ---
  {
    id: "e4d2a1b0-9c8d-4f3e-a2b1-5d6c7b8a9e0f",
    title: "O Futuro das Cidades Inteligentes",
    subtitle: "Como a IoT e o 5G estão moldando o urbanismo moderno",
    author: "Lucas Rocha",
    publishedAt: "2025-05-12",
    category: "Tecnologia",
    heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    content:
      "Cidades inteligentes utilizam dados para otimizar o tráfego e o consumo de energia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius quam eu felis tincidunt.",
  },
  {
    id: "f5a6b7c8-d9e0-4123-b4a5-6c7d8e9f0a1b",
    title: "Fotografia Mobile: Do Zero ao Profissional",
    subtitle: "Domine a câmera do seu smartphone com técnicas simples",
    author: "Carla Souza",
    publishedAt: "2025-04-30",
    category: "Arte",
    heroImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    content:
      "Você não precisa de uma DSLR para tirar fotos incríveis. A composição é a chave do sucesso. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "a1b2c3d4-e5f6-4789-9012-34567890abcd",
    title: "A Revolução do Carros Elétricos",
    subtitle: "O que falta para o Brasil adotar essa tecnologia em massa?",
    author: "André Santos",
    publishedAt: "2025-03-15",
    category: "Automobilismo",
    heroImage: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7",
    content:
      "A infraestrutura de carregamento ainda é o maior desafio para os veículos elétricos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "b2c3d4e5-f6a7-4890-1234-567890abcdef",
    title: "Minimalismo Digital: Recupere seu Foco",
    subtitle: "Como reduzir o ruído das notificações e redes sociais",
    author: "Fernanda Dias",
    publishedAt: "2025-02-10",
    category: "Estilo de Vida",
    heroImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    content:
      "Menos é mais quando se trata de atenção digital. Aprenda a filtrar o que realmente importa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "c3d4e5f6-a7b8-4901-2345-67890abcdef1",
    title: "Culinária Vegana para Iniciantes",
    subtitle: "Substituições fáceis para pratos do cotidiano",
    author: "Juliana Paes",
    publishedAt: "2025-01-20",
    category: "Gastronomia",
    heroImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    content:
      "Descubra como o tofu e o grão-de-bico podem ser protagonistas em receitas deliciosas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "d4e5f6a7-b8c9-4012-3456-7890abcdef12",
    title: "O Renascimento do Vinil",
    subtitle: "Por que os discos físicos voltaram com tanta força?",
    author: "Roberto Carlos",
    publishedAt: "2024-12-05",
    category: "Música",
    heroImage: "https://images.unsplash.com/photo-1603048588665-791ca8aea617",
    content:
      "A experiência tátil e a fidelidade sonora atraem novas gerações para os toca-discos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "e5f6a7b8-c9d0-4123-4567-890abcdef123",
    title: "Exploração Espacial: A Próxima Fronteira",
    subtitle: "Elon Musk, Jeff Bezos e a corrida para Marte",
    author: "Marcos Pontes",
    publishedAt: "2024-11-12",
    category: "Ciência",
    heroImage: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
    content:
      "A colonização de outros planetas deixou de ser ficção científica e se tornou um plano de negócios. Lorem ipsum dolor sit amet.",
  },
  {
    id: "f6a7b8c9-d0e1-4234-5678-90abcdef1234",
    title: "Arquitetura Sustentável nas Metrópoles",
    subtitle: "Prédios que respiram e produzem sua própria energia",
    author: "Helena Troia",
    publishedAt: "2024-10-25",
    category: "Arquitetura",
    heroImage: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    content:
      "Jardins verticais e painéis solares integrados estão mudando a cara das grandes cidades. Lorem ipsum dolor sit amet.",
  },
  {
    id: "0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d",
    title: "Yoga para Aliviar Dores nas Costas",
    subtitle: "Posturas simples para quem trabalha sentado o dia todo",
    author: "Patrícia Amorim",
    publishedAt: "2024-09-18",
    category: "Saúde",
    heroImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    content:
      "Cinco minutos de alongamento podem prevenir lesões crônicas na coluna. Lorem ipsum dolor sit amet.",
  },
  {
    id: "1b2c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e",
    title: "O Mercado de Games em 2025",
    subtitle:
      "Como o Cloud Gaming está democratizando o acesso aos títulos AAA",
    author: "Tiago Leifert",
    publishedAt: "2024-08-30",
    category: "Tecnologia",
    heroImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    content:
      "Jogar em qualquer tela sem precisar de um hardware potente é a nova realidade. Lorem ipsum dolor sit amet.",
  },
  {
    id: "2c3d4e5f-6a7b-8c9d-0e1f-2a3b4c5d6e7f",
    title: "E-commerce e Personalização por IA",
    subtitle: "A experiência de compra nunca foi tão individualizada",
    author: "Sérgio Lima",
    publishedAt: "2024-07-15",
    category: "Negócios",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    content:
      "Algoritmos que prevêem o que você quer antes mesmo de você saber. Lorem ipsum dolor sit amet.",
  },
  {
    id: "3d4e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a",
    title: "Desenvolvimento Web com Next.js 15",
    subtitle: "O que mudou e por que você deve atualizar seus projetos",
    author: "Guilherme Rauch",
    publishedAt: "2024-06-05",
    category: "Programação",
    heroImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    content:
      "Explorando as novas APIs de cache e a estabilização do App Router. Lorem ipsum dolor sit amet.",
  },
];

export default articles;
