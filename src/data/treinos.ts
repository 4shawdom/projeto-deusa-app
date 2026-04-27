export interface Exercicio {
  nome: string
  duracao?: string
  repeticoes?: string
  series?: string
  descricao?: string
}

export interface Treino {
  id: string
  fase: 1 | 2 | 3
  semana: number
  dia: number
  nome: string
  duracao: string
  foco: string
  nivel: string
  descricao: string
  exercicios: Exercicio[]
}

export const fases = [
  { numero: 1, nome: 'Ativação Metabólica', semanas: '1–2', cor: 'from-pink-500 to-rose-600', descricao: 'Desperte seu metabolismo com movimentos suaves e eficazes.' },
  { numero: 2, nome: 'Queima de Gordura', semanas: '3–4', cor: 'from-purple-500 to-pink-600', descricao: 'Acelere a queima de gordura com treinos de alta eficiência.' },
  { numero: 3, nome: 'Transformação Total', semanas: '5–6', cor: 'from-fuchsia-500 to-purple-600', descricao: 'Consolide sua transformação e veja o resultado no espelho.' },
]

export const treinos: Treino[] = [
  // ──────────────── FASE 1 ────────────────
  {
    id: 'f1-d1',
    fase: 1, semana: 1, dia: 1,
    nome: 'Despertar Metabólico',
    duracao: '12 min', foco: 'Corpo Completo', nivel: 'Iniciante',
    descricao: 'O primeiro passo da sua transformação. Movimentos simples que ativam o metabolismo e preparam o corpo para os próximos dias.',
    exercicios: [
      { nome: 'Marcha no lugar (aquecimento)', duracao: '2 min' },
      { nome: 'Agachamento livre', repeticoes: '15 reps', series: '3x' },
      { nome: 'Elevação lateral dos braços', repeticoes: '12 reps', series: '3x' },
      { nome: 'Abdominal bicicleta', repeticoes: '20 reps', series: '3x' },
      { nome: 'Ponte de glúteos', repeticoes: '15 reps', series: '3x' },
      { nome: 'Alongamento final', duracao: '2 min' },
    ],
  },
  {
    id: 'f1-d2',
    fase: 1, semana: 1, dia: 2,
    nome: 'Ativação de Glúteos',
    duracao: '12 min', foco: 'Glúteos e Pernas', nivel: 'Iniciante',
    descricao: 'Foco total no poder dos glúteos e pernas, regiões-chave para o metabolismo feminino.',
    exercicios: [
      { nome: 'Caminhada lateral (aquecimento)', duracao: '1 min' },
      { nome: 'Agachamento sumo', repeticoes: '15 reps', series: '3x' },
      { nome: 'Avanço (lunge) alternado', repeticoes: '12 cada perna', series: '3x' },
      { nome: 'Elevação de quadril na parede', repeticoes: '15 reps', series: '3x' },
      { nome: 'Abdução de quadril deitada', repeticoes: '20 reps', series: '3x' },
      { nome: 'Alongamento de quadríceps', duracao: '1 min' },
    ],
  },
  {
    id: 'f1-d3',
    fase: 1, semana: 1, dia: 3,
    nome: 'Core Feminino',
    duracao: '12 min', foco: 'Abdômen e Core', nivel: 'Iniciante',
    descricao: 'Fortaleça seu centro. Um core forte é a base de toda transformação corporal.',
    exercicios: [
      { nome: 'Respiração diafragmática (aquecimento)', duracao: '1 min' },
      { nome: 'Prancha frontal', duracao: '30 seg', series: '3x' },
      { nome: 'Abdominal crunch', repeticoes: '15 reps', series: '3x' },
      { nome: 'Elevação de pernas deitada', repeticoes: '12 reps', series: '3x' },
      { nome: 'Oblíquo lateral', repeticoes: '15 cada lado', series: '3x' },
      { nome: 'Prancha lateral', duracao: '20 seg cada lado', series: '2x' },
    ],
  },
  {
    id: 'f1-d4',
    fase: 1, semana: 2, dia: 1,
    nome: 'Cardio Suave',
    duracao: '12 min', foco: 'Cardio e Resistência', nivel: 'Iniciante',
    descricao: 'Mantenha o coração trabalhando. Cardio leve para queimar calorias sem estressar o corpo.',
    exercicios: [
      { nome: 'Aquecimento — marcha elevada', duracao: '1 min' },
      { nome: 'Polichinelo', duracao: '30 seg', series: '4x' },
      { nome: 'Step lateral', duracao: '30 seg cada lado', series: '3x' },
      { nome: 'Corrida estacionária', duracao: '45 seg', series: '3x' },
      { nome: 'Agachamento com salto', repeticoes: '10 reps', series: '3x' },
      { nome: 'Descanso ativo — caminhada', duracao: '1 min' },
    ],
  },
  {
    id: 'f1-d5',
    fase: 1, semana: 2, dia: 2,
    nome: 'Corpo Completo Leve',
    duracao: '12 min', foco: 'Corpo Completo', nivel: 'Iniciante',
    descricao: 'Finalize a primeira fase ativando todos os grupos musculares de forma equilibrada.',
    exercicios: [
      { nome: 'Aquecimento articular', duracao: '1 min' },
      { nome: 'Agachamento + elevação de braços', repeticoes: '12 reps', series: '3x' },
      { nome: 'Flexão de joelhos no chão', repeticoes: '10 reps', series: '3x' },
      { nome: 'Abdominal com rotação', repeticoes: '15 reps', series: '3x' },
      { nome: 'Ponte de glúteos com pausa', repeticoes: '12 reps', series: '3x' },
      { nome: 'Alongamento completo', duracao: '2 min' },
    ],
  },

  // ──────────────── FASE 2 ────────────────
  {
    id: 'f2-d1',
    fase: 2, semana: 3, dia: 1,
    nome: 'HIIT Feminino',
    duracao: '12 min', foco: 'Queima de Gordura', nivel: 'Intermediário',
    descricao: 'Intervalos de alta intensidade calibrados para o metabolismo feminino. Queime gordura por horas após o treino.',
    exercicios: [
      { nome: 'Aquecimento — polichinelo', duracao: '1 min' },
      { nome: 'Burpee simplificado', repeticoes: '8 reps', series: '3x', descricao: 'Sem salto' },
      { nome: 'Mountain climber', duracao: '40 seg', series: '3x' },
      { nome: 'Agachamento com salto', repeticoes: '12 reps', series: '3x' },
      { nome: 'Corrida estacionária intensa', duracao: '45 seg', series: '3x' },
      { nome: 'Volta à calma', duracao: '1 min' },
    ],
  },
  {
    id: 'f2-d2',
    fase: 2, semana: 3, dia: 2,
    nome: 'Queima Abdominal',
    duracao: '12 min', foco: 'Abdômen', nivel: 'Intermediário',
    descricao: 'Protocolo específico para a gordura abdominal. Combinação de exercícios que trabalham cada camada do abdômen.',
    exercicios: [
      { nome: 'Aquecimento — rotação de tronco', duracao: '1 min' },
      { nome: 'Abdominal com toque no calcanhar', repeticoes: '20 reps', series: '3x' },
      { nome: 'Prancha com elevação de braço', duracao: '30 seg', series: '3x' },
      { nome: 'Russian twist', repeticoes: '20 reps', series: '3x' },
      { nome: 'Elevação de pernas + quadril', repeticoes: '15 reps', series: '3x' },
      { nome: 'Prancha frontal estática', duracao: '45 seg', series: '2x' },
    ],
  },
  {
    id: 'f2-d3',
    fase: 2, semana: 3, dia: 3,
    nome: 'Circuito Metabólico',
    duracao: '12 min', foco: 'Corpo Completo', nivel: 'Intermediário',
    descricao: 'Circuito contínuo que mantém o metabolismo acelerado. Transições rápidas entre exercícios para máximo resultado.',
    exercicios: [
      { nome: 'Aquecimento', duracao: '1 min' },
      { nome: 'Agachamento + chute traseiro', repeticoes: '12 reps', series: '3x' },
      { nome: 'Flexão inclinada', repeticoes: '10 reps', series: '3x' },
      { nome: 'Lunge com salto alternado', repeticoes: '10 cada perna', series: '3x' },
      { nome: 'Superman (extensão costas)', repeticoes: '15 reps', series: '3x' },
      { nome: 'Descanso ativo', duracao: '1 min' },
    ],
  },
  {
    id: 'f2-d4',
    fase: 2, semana: 4, dia: 1,
    nome: 'Força e Queima',
    duracao: '12 min', foco: 'Força Muscular', nivel: 'Intermediário',
    descricao: 'Músculo queima gordura mesmo em repouso. Construa força com movimentos compostos de alta eficiência.',
    exercicios: [
      { nome: 'Aquecimento mobilidade', duracao: '1 min' },
      { nome: 'Agachamento profundo com pausa', repeticoes: '12 reps', series: '4x' },
      { nome: 'Flexão de braços', repeticoes: '8 reps', series: '3x' },
      { nome: 'Elevação de quadril unilateral', repeticoes: '12 cada lado', series: '3x' },
      { nome: 'Tricep dip na cadeira', repeticoes: '12 reps', series: '3x' },
      { nome: 'Prancha dinâmica', duracao: '30 seg', series: '3x' },
    ],
  },
  {
    id: 'f2-d5',
    fase: 2, semana: 4, dia: 2,
    nome: 'Aceleração Total',
    duracao: '12 min', foco: 'Cardio Intenso', nivel: 'Intermediário',
    descricao: 'O treino mais intenso da fase 2. Você está pronta. Seu metabolismo vai agradecer.',
    exercicios: [
      { nome: 'Aquecimento', duracao: '1 min' },
      { nome: 'Burpee completo', repeticoes: '8 reps', series: '3x' },
      { nome: 'Agachamento + salto + rotação', repeticoes: '10 reps', series: '3x' },
      { nome: 'Mountain climber veloz', duracao: '40 seg', series: '4x' },
      { nome: 'Sprints no lugar', duracao: '30 seg', series: '4x' },
      { nome: 'Volta à calma + alongamento', duracao: '2 min' },
    ],
  },

  // ──────────────── FASE 3 ────────────────
  {
    id: 'f3-d1',
    fase: 3, semana: 5, dia: 1,
    nome: 'Máxima Performance',
    duracao: '12 min', foco: 'Alta Intensidade', nivel: 'Avançado',
    descricao: 'Você chegou à fase final. Seu corpo está preparado para extrair o máximo de cada movimento.',
    exercicios: [
      { nome: 'Aquecimento dinâmico', duracao: '1 min' },
      { nome: 'Burpee com salto', repeticoes: '10 reps', series: '4x' },
      { nome: 'Agachamento pistol (assistido)', repeticoes: '8 reps cada', series: '3x' },
      { nome: 'Flexão com palma', repeticoes: '8 reps', series: '3x' },
      { nome: 'Sprints 30/30', duracao: '30 seg on / 30 seg off', series: '4x' },
      { nome: 'Descanso ativo', duracao: '1 min' },
    ],
  },
  {
    id: 'f3-d2',
    fase: 3, semana: 5, dia: 2,
    nome: 'Esculpir e Tonificar',
    duracao: '12 min', foco: 'Definição Muscular', nivel: 'Avançado',
    descricao: 'Defina e esculpa. Movimentos de precisão para tonificar cada detalhe do seu corpo.',
    exercicios: [
      { nome: 'Aquecimento', duracao: '1 min' },
      { nome: 'Lunge reverso + joelhada', repeticoes: '12 cada lado', series: '3x' },
      { nome: 'Elevação de glúteo com pausa 3 seg', repeticoes: '15 reps', series: '4x' },
      { nome: 'Prancha com elevação de perna', duracao: '30 seg', series: '3x' },
      { nome: 'Agachamento sumo + elevação de calcanhar', repeticoes: '15 reps', series: '3x' },
      { nome: 'Alongamento final', duracao: '2 min' },
    ],
  },
  {
    id: 'f3-d3',
    fase: 3, semana: 5, dia: 3,
    nome: 'Full Body Intenso',
    duracao: '12 min', foco: 'Corpo Completo', nivel: 'Avançado',
    descricao: 'Todos os músculos trabalhando juntos. Um treino que representa tudo que você conquistou até aqui.',
    exercicios: [
      { nome: 'Aquecimento completo', duracao: '1 min' },
      { nome: 'Circuito: Burpee + agachamento + abdominal', repeticoes: '10 de cada', series: '3x' },
      { nome: 'Mountain climber + flexão', duracao: '40 seg', series: '3x' },
      { nome: 'Lunge + elevação de braços', repeticoes: '12 cada lado', series: '3x' },
      { nome: 'Superman + ponte', repeticoes: '15 reps', series: '3x' },
      { nome: 'Volta à calma', duracao: '1 min' },
    ],
  },
  {
    id: 'f3-d4',
    fase: 3, semana: 6, dia: 1,
    nome: 'Finalização de Glúteos',
    duracao: '12 min', foco: 'Glúteos Avançado', nivel: 'Avançado',
    descricao: 'O treino que vai deixar seus glúteos mais tonificados e levantados. A cereja do bolo da sua transformação.',
    exercicios: [
      { nome: 'Aquecimento mobilidade de quadril', duracao: '1 min' },
      { nome: 'Agachamento búlgaro', repeticoes: '12 cada perna', series: '4x' },
      { nome: 'Elevação de quadril com pausa 5 seg', repeticoes: '12 reps', series: '4x' },
      { nome: 'Abdução em 4 apoios', repeticoes: '20 reps cada', series: '3x' },
      { nome: 'Agachamento sumo + impulso', repeticoes: '15 reps', series: '3x' },
      { nome: 'Alongamento de glúteos', duracao: '2 min' },
    ],
  },
  {
    id: 'f3-d5',
    fase: 3, semana: 6, dia: 2,
    nome: 'Transformação Final',
    duracao: '12 min', foco: 'Celebração da Conquista', nivel: 'Avançado',
    descricao: 'O último treino. Você completou os 45 dias. Este treino é uma celebração de tudo que você conquistou.',
    exercicios: [
      { nome: 'Aquecimento festivo — dança livre', duracao: '2 min' },
      { nome: 'Melhor sequência da fase 1', duracao: '2 min' },
      { nome: 'Melhor sequência da fase 2', duracao: '2 min' },
      { nome: 'Melhor sequência da fase 3', duracao: '2 min' },
      { nome: 'Cool down + meditação de gratidão', duracao: '2 min' },
      { nome: 'Registro do progresso final', duracao: '2 min' },
    ],
  },
]

export const nutriPlanos = [
  {
    fase: 1,
    nome: 'Reset Metabólico',
    descricao: 'Alimentos que acordam o metabolismo e preparam o corpo para a queima.',
    cafe: ['Água com limão em jejum', 'Omelete com espinafre', 'Frutas vermelhas com chia'],
    almoco: ['Frango grelhado com legumes no vapor', 'Arroz integral + feijão', 'Salada verde com azeite'],
    jantar: ['Sopa de legumes com frango desfiado', 'Ovo mexido com tomate', 'Iogurte grego com mel'],
    snacks: ['Castanhas do Pará (3 unidades)', 'Banana com pasta de amendoim', 'Pepino com limão'],
    dicas: ['Beba 2L de água por dia', 'Evite açúcar refinado', 'Coma a cada 3–4 horas'],
  },
  {
    fase: 2,
    nome: 'Queima Ativa',
    descricao: 'Protocolo nutricional para potencializar a queima de gordura.',
    cafe: ['Vitamina verde (couve + maçã + gengibre)', 'Ovos mexidos com aveia', 'Café com óleo de coco'],
    almoco: ['Salmão com batata-doce', 'Peito de frango + quinoa + salada', 'Atum com grão-de-bico'],
    jantar: ['Omelete de claras', 'Caldo de carne magra com legumes', 'Frango desfiado com abobrinha'],
    snacks: ['Maçã com canela', 'Whey protein (se aplicável)', 'Cenoura com homus'],
    dicas: ['Reduza carboidratos simples', 'Priorize proteínas magras', 'Não pule refeições'],
  },
  {
    fase: 3,
    nome: 'Transformação Sustentável',
    descricao: 'Consolidando hábitos alimentares que vão além dos 45 dias.',
    cafe: ['Smoothie de proteína com banana', 'Tapioca com ovo e queijo cottage', 'Iogurte com granola sem açúcar'],
    almoco: ['Mix de proteínas (frango + ovo) com salada colorida', 'Macarrão integral com atum', 'Risoto de quinoa com legumes'],
    jantar: ['Salmão com aspargos', 'Frango ao limão com couve-flor', 'Omelete de legumes'],
    snacks: ['Combinação de nuts e frutas secas', 'Queijo cottage com mel', 'Chocolate 70% cacau (2 quadradinhos)'],
    dicas: ['Mantenha o déficit calórico leve', 'Coma devagar e mastigue bem', 'Celebre seu progresso!'],
  },
]
