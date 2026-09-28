// Edite aqui: todo o conteúdo do portfólio vive neste arquivo.

export const profile = {
  name: "Matheus Henrique",
  role: "Desenvolvedor Web",
  roles: ["Front-end Developer", "Estudante de Back-end", "Criador de interfaces"],
  location: "Recife, Pernambuco, Brasil",
  email: "matheus.hss.m4@gmail.com",
  github: "https://github.com/matshenrique",
  linkedin: "https://www.linkedin.com/in/matheus-henrique-6b8a79352/",
  summary:
    "Graduando em Análise e Desenvolvimento de Sistemas. Construo interfaces responsivas, componentizadas e escaláveis, e estou aprofundando meus estudos em back-end, APIs REST, bancos de dados e arquitetura de software.",
  about: [
    "Atuo principalmente no front-end, com React, TypeScript e Vite. Gosto de prototipar no Figma antes de escrever código, porque decidir a experiência primeiro evita retrabalho depois.",
    "Agora estou expandindo para o back-end com Node.js e Java, passando por APIs REST e bancos relacionais. Meu objetivo é entregar produtos completos, do layout ao servidor.",
  ],
  stats: [
    { label: "Repositórios", value: 12 },
    { label: "Stacks estudadas", value: 3 },
    { label: "Foco", value: "Full-stack" },
  ],
};

export const skills = [
  { group: "Front-end", items: ["React", "TypeScript", "JavaScript", "Vite", "HTML5", "CSS3", "Bootstrap", "Figma"] },
  { group: "Back-end", items: ["Node.js", "Java", "Python", "APIs REST"] },
  { group: "Banco de dados", items: ["MySQL", "PostgreSQL"] },
];

// Apenas os projetos mais relevantes para recrutadores.
export const projects = [
  {
    title: "Automação com Python",
    description:
      "Robô que cadastra produtos automaticamente em um sistema, lendo os dados de planilhas com pandas e controlando a interface com pyautogui. Reduz uma tarefa repetitiva a um único comando.",
    tags: ["Python", "pandas", "pyautogui", "Automação"],
    category: "Automação",
    repo: "https://github.com/matshenrique/Automa-o-Python",
    highlight: "Processos automatizados",
  },
  {
    title: "Nordestinos à Mesa",
    description:
      "Portal de receitas nordestinas com navegação por pratos e layout responsivo. Já recebeu um fork da comunidade.",
    tags: ["HTML", "CSS", "JavaScript", "Responsivo"],
    category: "Web",
    repo: "https://github.com/matshenrique/Nordestinos-a-Mesa",
    highlight: "Projeto com fork",
  },
  {
    title: "Formulário de Login",
    description:
      "Tela de login feita em React, com estado controlado, validação dos campos e feedback visual para o usuário.",
    tags: ["React", "JavaScript", "Formulários"],
    category: "React",
    repo: "https://github.com/matshenrique/formulario-login",
    highlight: "Componentização em React",
  },
  {
    title: "Nike Store",
    description:
      "Página de loja de tênis com vitrine de produtos, foco em identidade visual forte e experiência mobile.",
    tags: ["HTML", "CSS", "UI Design"],
    category: "Web",
    repo: "https://github.com/matshenrique/nike-store",
    highlight: "Design de e-commerce",
  },
  {
    title: "Starbucks Landing Page",
    description:
      "Landing page de cafeteria que reproduz a identidade da marca com atenção a tipografia, espaçamento e responsividade.",
    tags: ["HTML", "CSS", "Landing Page"],
    category: "Web",
    repo: "https://github.com/matshenrique/Starbuks",
    highlight: "Fidelidade visual",
  },
];
