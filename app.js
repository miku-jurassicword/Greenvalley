/* ============================================
   NUTRIVIDA — app.js
   Toda a lógica do site está aqui:
   receitas, filtros, busca, favoritos,
   modal, minijogo e painel do dono
   ============================================ */

/* =====================
   RECEITAS PADRÃO DO SITE
   ===================== */
const receitasPadrao = [
  {
    id: 1,
    nome: "Smoothie Detox de Frutas Vermelhas",
    categoria: "cafe",
    emoji: "🫐",
    bg: "linear-gradient(135deg,#fce7f3,#fbcfe8)",
    desc: "Bebida rica em antioxidantes, vitamina C e fibras. Ótima opção para começar o dia com energia e leveza.",
    tempo: "5 min",
    porcoes: "1 porção",
    dificuldade: "easy",
    kcal: 180, proteina: 6, carbs: 32, gordura: 3,
    ingredientes: [
      "1 xícara de morangos frescos",
      "½ xícara de mirtilo",
      "½ banana congelada",
      "200 ml de leite de amêndoas",
      "1 col. sopa de linhaça moída",
      "1 col. sopa de mel (opcional)",
      "Gelo a gosto",
    ],
    passos: [
      "Lave bem as frutas vermelhas em água corrente.",
      "Coloque todos os ingredientes no liquidificador.",
      "Bata por 2 minutos até obter uma mistura lisa e homogênea.",
      "Se ficar muito espesso, adicione um pouco mais de leite vegetal.",
      "Sirva imediatamente em copo gelado e aproveite!",
    ]
  },
  {
    id: 2,
    nome: "Overnight Oats com Banana e Mel",
    categoria: "cafe",
    emoji: "🥣",
    bg: "linear-gradient(135deg,#fff7ed,#ffedd5)",
    desc: "Aveia de geladeira preparada na véspera. Cremosa, nutritiva e cheia de fibras para um café da manhã completo.",
    tempo: "5 min + noite",
    porcoes: "1 porção",
    dificuldade: "easy",
    kcal: 340, proteina: 12, carbs: 58, gordura: 6,
    ingredientes: [
      "½ xícara de aveia em flocos",
      "200 ml de iogurte natural desnatado",
      "100 ml de leite desnatado",
      "1 banana em rodelas",
      "1 col. sopa de mel",
      "1 col. chá de canela em pó",
      "Mix de castanhas para finalizar",
    ],
    passos: [
      "Em um pote com tampa, misture a aveia, o leite e o iogurte.",
      "Adicione a canela e o mel, misturando bem.",
      "Tampe e deixe na geladeira por pelo menos 6 horas (ou a noite toda).",
      "Na manhã seguinte, coloque as rodelas de banana por cima.",
      "Finalize com as castanhas e mais um fio de mel.",
    ]
  },
  {
    id: 3,
    nome: "Tapioca de Queijo Branco com Tomate",
    categoria: "cafe",
    emoji: "🫓",
    bg: "linear-gradient(135deg,#fef9c3,#fef08a)",
    desc: "Tapioca crocante recheada com queijo branco fresco, tomate e ervas. Sem glúten e rica em proteínas.",
    tempo: "10 min",
    porcoes: "1 unidade",
    dificuldade: "easy",
    kcal: 210, proteina: 14, carbs: 22, gordura: 7,
    ingredientes: [
      "4 col. sopa de goma de tapioca hidratada",
      "50g de queijo branco em cubos",
      "2 tomates-cereja cortados ao meio",
      "Folhas de manjericão fresco",
      "1 col. chá de azeite de oliva",
      "Sal rosa e pimenta-do-reino a gosto",
    ],
    passos: [
      "Aqueça uma frigideira antiaderente em fogo médio.",
      "Espalhe a goma de tapioca formando um disco uniforme.",
      "Espere 2 minutos até firmar. Vire com cuidado.",
      "Distribua o queijo, o tomate e o manjericão sobre metade.",
      "Dobre ao meio e deixe por mais 1 minuto.",
      "Regue com azeite e sirva quente.",
    ]
  },
  {
    id: 4,
    nome: "Panqueca de Aveia e Banana",
    categoria: "cafe",
    emoji: "🥞",
    bg: "linear-gradient(135deg,#e8f5f4,#c8e8e5)",
    desc: "Panquecas fofas feitas apenas com aveia e banana, sem farinha e sem açúcar. Deliciosas e muito nutritivas!",
    tempo: "15 min",
    porcoes: "6 unidades",
    dificuldade: "easy",
    kcal: 280, proteina: 9, carbs: 48, gordura: 5,
    ingredientes: [
      "2 bananas maduras",
      "2 ovos inteiros",
      "½ xícara de aveia em flocos finos",
      "1 col. chá de extrato de baunilha",
      "1 col. chá de canela em pó",
      "Raspas de meio limão",
      "Frutas frescas para acompanhar",
    ],
    passos: [
      "Amasse bem as bananas com um garfo até virar uma pasta.",
      "Adicione os ovos e misture.",
      "Incorpore a aveia, a baunilha, a canela e as raspas de limão.",
      "Deixe a massa descansar por 5 minutos.",
      "Em frigideira com fio de azeite, coloque colheradas da massa.",
      "Cozinhe 2 minutos de cada lado. Sirva com frutas frescas.",
    ]
  },
  {
    id: 5,
    nome: "Bowl de Quinoa com Legumes Assados",
    categoria: "almoco",
    emoji: "🥙",
    bg: "linear-gradient(135deg,#e8f5f4,#b8dcd8)",
    desc: "Bowl completo com quinoa proteica, legumes assados no forno e molho tahine. Uma refeição poderosa e colorida.",
    tempo: "35 min",
    porcoes: "2 porções",
    dificuldade: "medium",
    kcal: 420, proteina: 18, carbs: 52, gordura: 14,
    ingredientes: [
      "1 xícara de quinoa",
      "1 abobrinha em cubos",
      "1 cenoura em rodelas",
      "1 pimentão vermelho em tiras",
      "1 beterraba pequena em cubos",
      "2 col. sopa de azeite de oliva",
      "3 col. sopa de tahine",
      "Suco de 1 limão",
      "Sal, pimenta e páprica a gosto",
      "Folhas de rúcula para finalizar",
    ],
    passos: [
      "Cozinhe a quinoa em 2 xícaras de água por 15 minutos.",
      "Tempere os legumes com azeite, sal, pimenta e páprica.",
      "Asse os legumes a 200°C por 20 minutos, virando na metade.",
      "Prepare o molho: misture tahine, suco de limão, sal e 3 col. de água.",
      "Monte o bowl com a quinoa, os legumes e as folhas de rúcula.",
      "Finalize com o molho de tahine e sirva.",
    ]
  },
  {
    id: 6,
    nome: "Frango Grelhado com Legumes no Vapor",
    categoria: "almoco",
    emoji: "🍗",
    bg: "linear-gradient(135deg,#fef3e2,#fde8c8)",
    desc: "Peito de frango temperado com ervas frescas e legumes no vapor. Proteico, leve e perfeito para o almoço.",
    tempo: "30 min",
    porcoes: "2 porções",
    dificuldade: "easy",
    kcal: 380, proteina: 42, carbs: 24, gordura: 10,
    ingredientes: [
      "2 filés de peito de frango (180g cada)",
      "1 brócolis em buquês",
      "1 xícara de ervilha fresca",
      "2 cenouras em palitos",
      "3 dentes de alho amassados",
      "Suco de 1 limão",
      "2 col. sopa de azeite de oliva",
      "Alecrim, tomilho e sal",
      "Arroz integral para acompanhar",
    ],
    passos: [
      "Marine o frango com alho, limão, azeite e ervas por 15 minutos.",
      "Aqueça a grelha ou frigideira em fogo alto.",
      "Grelhe o frango por 6-7 minutos de cada lado.",
      "Enquanto isso, cozinhe os legumes no vapor por 8 minutos.",
      "Tempere os legumes com azeite, sal e ervas a gosto.",
      "Sirva com arroz integral e regue com suco de limão fresco.",
    ]
  },
  {
    id: 7,
    nome: "Risoto de Brócolis com Cogumelos",
    categoria: "almoco",
    emoji: "🍲",
    bg: "linear-gradient(135deg,#e8f5ee,#c8e8d8)",
    desc: "Risoto cremoso de arroz integral com brócolis e cogumelos shiitake. Reconfortante, saudável e cheio de sabor.",
    tempo: "45 min",
    porcoes: "3 porções",
    dificuldade: "medium",
    kcal: 390, proteina: 14, carbs: 62, gordura: 10,
    ingredientes: [
      "1½ xícara de arroz arbóreo integral",
      "200g de cogumelos shiitake fatiados",
      "2 xícaras de brócolis em buquês pequenos",
      "1 cebola pequena picada",
      "3 dentes de alho",
      "1L de caldo de legumes quente",
      "½ xícara de vinho branco seco",
      "3 col. sopa de queijo parmesão",
      "2 col. sopa de azeite de oliva",
      "Sal, pimenta e noz-moscada",
    ],
    passos: [
      "Em panela grande, refogue a cebola e o alho no azeite por 3 minutos.",
      "Acrescente o arroz e mexa por 2 minutos até ficar translúcido.",
      "Adicione o vinho branco e mexa até evaporar.",
      "Acrescente o caldo quente, concha a concha, mexendo sempre.",
      "Após 25 minutos, adicione os cogumelos e o brócolis.",
      "Cozinhe por mais 10 minutos. Finalize com parmesão e noz-moscada.",
    ]
  },
  {
    id: 8,
    nome: "Bowl de Atum com Arroz Integral",
    categoria: "almoco",
    emoji: "🐟",
    bg: "linear-gradient(135deg,#e8f4fd,#c8e0f0)",
    desc: "Bowl fresco e proteico com atum, arroz integral, abacate e legumes. Prático, nutritivo e delicioso.",
    tempo: "20 min",
    porcoes: "2 porções",
    dificuldade: "easy",
    kcal: 440, proteina: 32, carbs: 48, gordura: 13,
    ingredientes: [
      "1 lata de atum em água (escorrido)",
      "2 xícaras de arroz integral cozido",
      "1 abacate maduro",
      "½ pepino em rodelas finas",
      "1 cenoura ralada",
      "Edamame cozido a gosto",
      "2 col. sopa de shoyu light",
      "1 col. sopa de gergelim torrado",
      "Suco de 1 limão",
      "Coentro ou cebolinha",
    ],
    passos: [
      "Cozinhe o arroz integral conforme as instruções da embalagem.",
      "Corte o abacate em cubos e tempere com limão.",
      "Prepare o molho misturando shoyu com gergelim e cebolinha.",
      "Monte o bowl dividindo o arroz entre dois recipientes.",
      "Arrume o atum, abacate, pepino, cenoura e edamame.",
      "Regue com o molho e finalize com gergelim e coentro.",
    ]
  },
  {
    id: 9,
    nome: "Sopa de Lentilha com Gengibre",
    categoria: "jantar",
    emoji: "🍵",
    bg: "linear-gradient(135deg,#fef8ec,#fdefd0)",
    desc: "Sopa quente, reconfortante e anti-inflamatória. Rica em proteínas vegetais e perfeita para as noites frias.",
    tempo: "40 min",
    porcoes: "4 porções",
    dificuldade: "easy",
    kcal: 290, proteina: 16, carbs: 44, gordura: 5,
    ingredientes: [
      "1½ xícara de lentilha vermelha",
      "1 lata de tomate pelado",
      "1 cebola grande picada",
      "4 dentes de alho",
      "1 pedaço de gengibre fresco (3cm)",
      "1 col. chá de cúrcuma",
      "1 col. chá de cominho",
      "1 col. chá de páprica defumada",
      "1L de caldo de legumes",
      "Folhas de coentro e limão para servir",
    ],
    passos: [
      "Refogue a cebola, o alho e o gengibre ralado no azeite.",
      "Adicione as especiarias e mexa por 1 minuto.",
      "Acrescente a lentilha, o tomate e o caldo de legumes.",
      "Cozinhe em fogo médio por 25 minutos, mexendo às vezes.",
      "Bata metade da sopa no liquidificador para deixar cremosa.",
      "Ajuste o sal, sirva com coentro e suco de limão.",
    ]
  },
  {
    id: 10,
    nome: "Salmão com Aspargos e Limão",
    categoria: "jantar",
    emoji: "🐠",
    bg: "linear-gradient(135deg,#fff4f0,#ffe8de)",
    desc: "Filé de salmão rico em ômega-3 com aspargos grelhados e molho de limão siciliano. Elegante e nutritivo.",
    tempo: "25 min",
    porcoes: "2 porções",
    dificuldade: "medium",
    kcal: 460, proteina: 38, carbs: 12, gordura: 28,
    ingredientes: [
      "2 filés de salmão (150g cada)",
      "1 maço de aspargos frescos",
      "2 dentes de alho fatiados",
      "Suco e raspas de 1 limão siciliano",
      "2 col. sopa de azeite de oliva extra virgem",
      "1 col. sopa de alcaparras",
      "Endro (dill) fresco a gosto",
      "Sal e pimenta-do-reino",
    ],
    passos: [
      "Tempere o salmão com sal, pimenta e raspas de limão.",
      "Aqueça azeite em frigideira e grelhe o salmão por 4 min de cada lado.",
      "Na mesma frigideira, doure o alho e os aspargos por 5 minutos.",
      "Adicione o suco de limão e as alcaparras. Mexa por 1 minuto.",
      "Monte o prato com o salmão sobre os aspargos.",
      "Regue com o molho da frigideira e finalize com endro fresco.",
    ]
  },
  {
    id: 11,
    nome: "Omelete de Espinafre e Queijo",
    categoria: "jantar",
    emoji: "🍳",
    bg: "linear-gradient(135deg,#e8f5f4,#c8e8e5)",
    desc: "Omelete fofinho recheado com espinafre refogado e queijo branco. Rápido, proteico e perfeito para o jantar.",
    tempo: "15 min",
    porcoes: "1 porção",
    dificuldade: "easy",
    kcal: 310, proteina: 22, carbs: 8, gordura: 21,
    ingredientes: [
      "3 ovos inteiros",
      "2 xícaras de espinafre fresco",
      "50g de queijo branco em cubos",
      "2 dentes de alho",
      "1 col. sopa de azeite de oliva",
      "Sal, pimenta e noz-moscada",
      "Tomate-cereja para acompanhar",
    ],
    passos: [
      "Refogue o alho no azeite por 1 minuto. Adicione o espinafre.",
      "Mexa por 2 minutos até murchar. Tempere com sal e noz-moscada.",
      "Bata os ovos com sal e pimenta em um bowl.",
      "Em frigideira antiaderente, despeje os ovos e mexa levemente.",
      "Quando ainda cremoso, coloque o espinafre e o queijo em metade.",
      "Dobre e sirva com tomates-cereja.",
    ]
  },
  {
    id: 12,
    nome: "Tofu Grelhado com Curry de Vegetais",
    categoria: "jantar",
    emoji: "🥢",
    bg: "linear-gradient(135deg,#f3e8ff,#e8d4f8)",
    desc: "Tofu firme marinado e grelhado com curry aromático de legumes e leite de coco. Proteína vegetal no seu melhor.",
    tempo: "40 min",
    porcoes: "2 porções",
    dificuldade: "medium",
    kcal: 350, proteina: 20, carbs: 30, gordura: 16,
    ingredientes: [
      "300g de tofu firme",
      "1 xícara de leite de coco light",
      "1 cebola picada",
      "2 dentes de alho",
      "1 col. sopa de curry em pó",
      "½ col. chá de cúrcuma",
      "1 pimentão vermelho",
      "1 abobrinha pequena",
      "2 col. sopa de shoyu",
      "Arroz basmati para acompanhar",
      "Coentro e pimenta caiena",
    ],
    passos: [
      "Pressione o tofu para remover o excesso de água. Corte em cubos.",
      "Marine o tofu no shoyu e curry por 15 minutos.",
      "Grelhe os cubos de tofu em frigideira quente até dourar.",
      "Refogue a cebola e o alho. Adicione as especiarias.",
      "Acrescente os legumes, o leite de coco e cozinhe por 15 minutos.",
      "Sirva o curry sobre arroz basmati com tofu e coentro.",
    ]
  },
  {
    id: 13,
    nome: "Mix de Castanhas e Frutas Secas",
    categoria: "lanche",
    emoji: "🥜",
    bg: "linear-gradient(135deg,#fef3e2,#fde8c8)",
    desc: "Mix energético e nutritivo de castanhas, nozes e frutas secas. Perfeito para carregar e comer a qualquer hora.",
    tempo: "5 min",
    porcoes: "4 porções",
    dificuldade: "easy",
    kcal: 240, proteina: 7, carbs: 22, gordura: 15,
    ingredientes: [
      "¼ xícara de castanha de caju",
      "¼ xícara de nozes picadas",
      "¼ xícara de amêndoas",
      "2 col. sopa de uva-passa",
      "2 col. sopa de cranberry seco",
      "2 col. sopa de damasco seco picado",
      "1 col. sopa de semente de girassol",
      "Canela em pó a gosto",
    ],
    passos: [
      "Misture todas as castanhas em um bowl.",
      "Adicione as frutas secas e as sementes.",
      "Polvilhe canela e misture bem.",
      "Divida em 4 porções individuais.",
      "Guarde em potes com tampa por até 2 semanas.",
    ]
  },
  {
    id: 14,
    nome: "Homus com Palitos de Legumes",
    categoria: "lanche",
    emoji: "🫘",
    bg: "linear-gradient(135deg,#fef8ec,#fdefd0)",
    desc: "Homus cremoso caseiro com azeite, tahine e cominho. Acompanhado de palitos de cenoura, pepino e salsão.",
    tempo: "15 min",
    porcoes: "4 porções",
    dificuldade: "easy",
    kcal: 190, proteina: 8, carbs: 20, gordura: 9,
    ingredientes: [
      "1 lata de grão-de-bico cozido",
      "3 col. sopa de tahine",
      "Suco de 2 limões",
      "2 dentes de alho",
      "3 col. sopa de azeite de oliva",
      "½ col. chá de cominho",
      "Sal a gosto",
      "Cenoura, pepino e salsão para mergulhar",
      "Páprica e azeite para finalizar",
    ],
    passos: [
      "Escorra o grão-de-bico e reserve o líquido.",
      "Coloque o grão-de-bico no processador com tahine e alho.",
      "Adicione o limão, o cominho, o sal e o azeite.",
      "Processe, adicionando o líquido reservado aos poucos.",
      "Bata por 4 minutos até ficar muito cremoso.",
      "Sirva com páprica, azeite e os palitos de legumes.",
    ]
  },
  {
    id: 15,
    nome: "Iogurte Grego com Granola Caseira",
    categoria: "lanche",
    emoji: "🍨",
    bg: "linear-gradient(135deg,#e8f4fd,#c8e0f0)",
    desc: "Parfait de iogurte grego proteico com granola caseira crocante, frutas frescas e fio de mel. Irresistível!",
    tempo: "10 min",
    porcoes: "2 porções",
    dificuldade: "easy",
    kcal: 290, proteina: 15, carbs: 38, gordura: 8,
    ingredientes: [
      "1 xícara de iogurte grego natural",
      "½ xícara de granola crocante",
      "1 xícara de morango fatiado",
      "½ xícara de mirtilo",
      "2 col. sopa de mel puro",
      "1 col. sopa de coco ralado",
      "Hortelã para decorar",
    ],
    passos: [
      "Divida o iogurte grego em dois copos ou bowls.",
      "Adicione metade da granola em cada porção.",
      "Distribua os morangos e o mirtilo por cima.",
      "Regue com o mel e polvilhe o coco ralado.",
      "Decore com folhinhas de hortelã.",
      "Sirva imediatamente para manter a granola crocante.",
    ]
  },
];

/* =====================
   ESTADO DO SITE
   Guarda o que o usuário está fazendo agora
   ===================== */
let categoriaAtiva = "todos"; // filtro de categoria ativo
let buscaAtual = "";          // texto digitado na busca
let favoritos = JSON.parse(localStorage.getItem("nutrivida_favs") || "[]"); // favoritos salvos

/* Carrega receitas personalizadas salvas pelo dono */
function carregarReceitasCustom() {
  return JSON.parse(localStorage.getItem("nutrivida_custom") || "[]");
}

/* Junta receitas padrão + personalizadas */
function todasReceitas() {
  return [...receitasPadrao, ...carregarReceitasCustom()];
}

/* =====================
   FUNÇÕES AUXILIARES
   ===================== */

/* Salva favoritos no localStorage do navegador */
function salvarFavoritos() {
  localStorage.setItem("nutrivida_favs", JSON.stringify(favoritos));
}

/* Adiciona ou remove um favorito ao clicar no coração */
function toggleFavorito(id, e) {
  e.stopPropagation(); // evita abrir o modal ao clicar no coração
  const idx = favoritos.indexOf(id);
  if (idx === -1) favoritos.push(id);
  else favoritos.splice(idx, 1);
  salvarFavoritos();
  renderCards();
}

/* Retorna o texto de dificuldade em português */
function textoDificuldade(d) {
  return { easy: "Fácil", medium: "Médio", hard: "Difícil" }[d] || d;
}

/* Retorna o texto da categoria em português */
function textoCategoria(c) {
  return { cafe: "Café da Manhã", almoco: "Almoço", jantar: "Jantar", lanche: "Lanche" }[c] || c;
}

/* Retorna a classe CSS do badge da categoria */
function classeBadge(c) {
  return { cafe: "badge-cafe", almoco: "badge-almoco", jantar: "badge-jantar", lanche: "badge-lanche" }[c] || "";
}

/* =====================
   FILTRAGEM E RENDERIZAÇÃO
   ===================== */

/* Filtra as receitas de acordo com categoria e busca */
function receitasFiltradas() {
  const todas = todasReceitas();
  return todas.filter(r => {
    const catOk = categoriaAtiva === "todos" || r.categoria === categoriaAtiva;
    const q = buscaAtual.toLowerCase();
    // verifica se o nome, descrição ou algum ingrediente bate com a busca
    const buscaOk = !q
      || r.nome.toLowerCase().includes(q)
      || r.desc.toLowerCase().includes(q)
      || r.ingredientes.some(i => i.toLowerCase().includes(q));
    return catOk && buscaOk;
  });
}

/* Atualiza os números nos botões de filtro */
function atualizarContadores() {
  const todas = todasReceitas();
  const q = buscaAtual.toLowerCase();
  const cats = ["cafe", "almoco", "jantar", "lanche"];

  // conta total geral
  document.getElementById("count-todos").textContent = todas.filter(r =>
    !q || r.nome.toLowerCase().includes(q) || r.ingredientes.some(i => i.toLowerCase().includes(q))
  ).length;

  // conta por categoria
  cats.forEach(c => {
    document.getElementById("count-" + c).textContent = todas.filter(r =>
      r.categoria === c &&
      (!q || r.nome.toLowerCase().includes(q) || r.ingredientes.some(i => i.toLowerCase().includes(q)))
    ).length;
  });
}

/* Desenha os cards de receita na tela */
function renderCards() {
  const grid   = document.getElementById("recipesGrid");
  const noRes  = document.getElementById("noResults");
  const lista  = receitasFiltradas();

  if (lista.length === 0) {
    // nenhuma receita encontrada
    grid.innerHTML = "";
    noRes.style.display = "block";
  } else {
    noRes.style.display = "none";
    // cria o HTML de cada card
    grid.innerHTML = lista.map((r, i) => `
      <article class="recipe-card" onclick="abrirModal(${r.id})" style="animation-delay:${i * 40}ms">
        <div class="card-thumb" style="background:${r.bg}">
          <span>${r.emoji}</span>
          <span class="card-category-badge ${classeBadge(r.categoria)}">${textoCategoria(r.categoria)}</span>
          <button class="fav-btn ${favoritos.includes(r.id) ? "active" : ""}"
                  onclick="toggleFavorito(${r.id}, event)" title="Favoritar">
            ${favoritos.includes(r.id) ? "❤️" : "🤍"}
          </button>
        </div>
        <div class="card-body">
          <h3>${r.nome}</h3>
          <p>${r.desc}</p>
          <div class="card-meta">
            <span class="meta-item">⏱ ${r.tempo}</span>
            <span class="meta-item">
              <span class="dot dot-${r.dificuldade}"></span>
              ${textoDificuldade(r.dificuldade)}
            </span>
            <span class="meta-item">🍽 ${r.porcoes}</span>
          </div>
        </div>
        <div class="card-footer">
          <div class="nutrition-pills">
            <span class="pill">${r.kcal} kcal</span>
            <span class="pill prot">${r.proteina}g prot.</span>
            <span class="pill carb">${r.carbs}g carb.</span>
          </div>
          <button class="view-btn">Ver receita →</button>
        </div>
      </article>
    `).join("");
  }
  atualizarContadores();
}

/* =====================
   MODAL DE RECEITA
   ===================== */

/* Abre o modal com os detalhes completos da receita */
function abrirModal(id) {
  const r = todasReceitas().find(x => x.id === id);
  if (!r) return;

  document.getElementById("modalContent").innerHTML = `
    <div class="modal-thumb" style="background:${r.bg}">
      <span>${r.emoji}</span>
      <button class="modal-close" onclick="fecharModal()">✕</button>
    </div>
    <div class="modal-body">
      <div class="modal-top">
        <h2>${r.nome}</h2>
        <span class="card-category-badge ${classeBadge(r.categoria)}"
              style="white-space:nowrap;flex-shrink:0">${textoCategoria(r.categoria)}</span>
      </div>
      <div class="modal-meta">
        <div class="modal-meta-item">⏱ ${r.tempo}</div>
        <div class="modal-meta-item">🍽 ${r.porcoes}</div>
        <div class="modal-meta-item">
          <span class="dot dot-${r.dificuldade}"
                style="display:inline-block;width:8px;height:8px;border-radius:50%"></span>
          ${textoDificuldade(r.dificuldade)}
        </div>
      </div>
      <p class="modal-desc">${r.desc}</p>

      <div class="nutrition-grid">
        <div class="nutri-item"><span class="nutri-value">${r.kcal}</span><span class="nutri-label">Calorias</span></div>
        <div class="nutri-item"><span class="nutri-value">${r.proteina}g</span><span class="nutri-label">Proteínas</span></div>
        <div class="nutri-item"><span class="nutri-value">${r.carbs}g</span><span class="nutri-label">Carboidratos</span></div>
        <div class="nutri-item"><span class="nutri-value">${r.gordura}g</span><span class="nutri-label">Gorduras</span></div>
      </div>

      <p class="modal-section-title">🛒 Ingredientes</p>
      <ul class="ingredients-list">
        ${r.ingredientes.map(i => `<li>${i}</li>`).join("")}
      </ul>

      <p class="modal-section-title">👨‍🍳 Modo de Preparo</p>
      <ol class="steps-list">
        ${r.passos.map((s, idx) => `
          <li><span class="step-num">${idx + 1}</span><span>${s}</span></li>
        `).join("")}
      </ol>
    </div>
  `;

  // abre o modal e trava a rolagem da página
  document.getElementById("modalBackdrop").classList.add("open");
  document.body.style.overflow = "hidden";
}

/* Fecha o modal */
function fecharModal() {
  document.getElementById("modalBackdrop").classList.remove("open");
  document.body.style.overflow = "";
}

/* ============================================
   MINIJOGO — HORTA NUTRI (estilo Stardew)
   ============================================ */

/* Lista de canteiros com culturas e fatos nutricionais */
const canteiros = [
  { emoji: "🥕", nome: "Cenoura",   fato: "Rica em beta-caroteno, que protege os olhos e dá brilho à pele!" },
  { emoji: "🥦", nome: "Brócolis",  fato: "Um superalimento! Rico em vitamina C, fibras e antioxidantes." },
  { emoji: "🍅", nome: "Tomate",    fato: "O licopeno do tomate protege o coração e combate o envelhecimento." },
  { emoji: "🫑", nome: "Pimentão",  fato: "Tem mais vitamina C que a laranja! Ótimo para a imunidade." },
  { emoji: "🌽", nome: "Milho",     fato: "Fonte de fibras e energia duradoura para aguentar o dia todo!" },
  { emoji: "🍓", nome: "Morango",   fato: "Cheio de vitamina C e antioxidantes. Delicioso e muito saudável!" },
  { emoji: "🥬", nome: "Alface",    fato: "Hidratante e rica em folato. Essencial para a saúde das células." },
  { emoji: "🧅", nome: "Cebola",    fato: "Antibacteriana e anti-inflamatória. Uma aliada poderosa da saúde!" },
  { emoji: "🍆", nome: "Berinjela", fato: "Baixa em calorias, rica em fibras. Perfeita para manter o peso." },
  { emoji: "🫛", nome: "Vagem",     fato: "Combina proteína vegetal com fibras. Uma dupla perfeita no prato!" },
  { emoji: "🥒", nome: "Pepino",    fato: "É 99% água! Hidratante natural, ótimo nos dias quentes." },
  { emoji: "🌿", nome: "Ervas",     fato: "Manjericão, alecrim e hortelã têm propriedades medicinais únicas!" },
];

/* Estado de cada canteiro: 'ready', 'growing' ou 'empty' */
let estadoCanteiros = canteiros.map(() => "ready");

/* Pontuação de saúde do jogador */
let pontosJogo = 0;

/* Renderiza o jardim na tela */
function renderJardim() {
  const grid = document.getElementById("gardenGrid");
  if (!grid) return; // sai se a seção não existir

  grid.innerHTML = canteiros.map((c, i) => {
    const estado = estadoCanteiros[i];
    let emojiMostrado = "";
    let label = "";

    if (estado === "ready") {
      emojiMostrado = c.emoji; // planta pronta para colher
      label = "COLHER";
    } else if (estado === "growing") {
      emojiMostrado = "🌱"; // crescendo ainda
      label = "CRESCENDO";
    } else {
      emojiMostrado = "🟫"; // canteiro vazio
      label = "VAZIO";
    }

    return `
      <div class="plot ${estado}" id="plot-${i}" onclick="colherPlanta(${i})" title="${c.nome}">
        <span class="plot-emoji">${emojiMostrado}</span>
        <span class="plot-label">${label}</span>
      </div>
    `;
  }).join("");
}

/* Lida com o clique no canteiro */
function colherPlanta(idx) {
  const estado = estadoCanteiros[idx];

  if (estado === "ready") {
    // colhe a planta e mostra o fato nutricional
    estadoCanteiros[idx] = "empty";
    pontosJogo += 10;
    atualizarPontos();
    mostrarFato(canteiros[idx]);

    // anima o canteiro
    const plot = document.getElementById("plot-" + idx);
    plot.classList.add("harvesting");
    setTimeout(() => plot.classList.remove("harvesting"), 400);

    renderJardim();

    // depois de 3 segundos começa a crescer de novo
    setTimeout(() => {
      estadoCanteiros[idx] = "growing";
      renderJardim();
      // depois de mais 5 segundos fica pronto novamente
      setTimeout(() => {
        estadoCanteiros[idx] = "ready";
        renderJardim();
      }, 5000);
    }, 3000);

  } else if (estado === "empty") {
    // canteiro vazio: planta uma semente
    estadoCanteiros[idx] = "growing";
    renderJardim();
    setTimeout(() => {
      estadoCanteiros[idx] = "ready";
      renderJardim();
    }, 5000);
  }
  // se estiver "growing", não faz nada
}

/* Mostra o fato nutricional no balão */
function mostrarFato(canteiro) {
  const balao = document.getElementById("factBubble");
  if (!balao) return;
  balao.classList.remove("empty");
  balao.innerHTML = `<p><strong>${canteiro.emoji} ${canteiro.nome}:</strong> ${canteiro.fato}</p>`;
}

/* Atualiza os pontos de saúde na tela */
function atualizarPontos() {
  const el = document.getElementById("gameScore");
  if (!el) return;
  // cada 10 pontos = 1 coração cheio
  const coracoes = Math.min(Math.floor(pontosJogo / 10), 10);
  const vazios   = 10 - coracoes;
  el.querySelector(".score-hearts").textContent =
    "❤️".repeat(coracoes) + "🤍".repeat(vazios);
  el.querySelector(".score-num").textContent = pontosJogo;
}

/* ============================================
   PAINEL DO DONO — adicionar receitas
   Acessível com Ctrl + Shift + A
   Senha: nutrivida
   ============================================ */

let adminLogado = false; // controla se o dono está logado

/* Abre o painel do admin */
function abrirAdmin() {
  document.getElementById("adminOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
  if (!adminLogado) {
    mostrarTelaLogin();
  } else {
    mostrarFormulario();
  }
}

/* Fecha o painel do admin */
function fecharAdmin() {
  document.getElementById("adminOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

/* Mostra a tela de senha */
function mostrarTelaLogin() {
  document.getElementById("adminConteudo").innerHTML = `
    <div class="admin-login">
      <p>Digite a senha para acessar o painel do dono:</p>
      <div class="form-group">
        <input type="password" id="senhaInput" placeholder="Senha secreta..."
               onkeydown="if(event.key==='Enter') verificarSenha()" />
      </div>
      <button class="btn-save" onclick="verificarSenha()">🔓 Entrar</button>
      <div id="erroSenha" style="color:#e11d48;margin-top:12px;font-size:.85rem;display:none">
        Senha incorreta. Tente novamente.
      </div>
    </div>
  `;
  setTimeout(() => document.getElementById("senhaInput")?.focus(), 100);
}

/* Verifica se a senha está certa */
function verificarSenha() {
  const senha = document.getElementById("senhaInput")?.value;
  if (senha === "nutrivida") {
    // senha correta — entra no painel
    adminLogado = true;
    mostrarFormulario();
  } else {
    // senha errada — mostra erro
    document.getElementById("erroSenha").style.display = "block";
  }
}

/* Mostra o formulário para adicionar receitas */
function mostrarFormulario() {
  document.getElementById("adminConteudo").innerHTML = `
    <h3 style="font-size:1rem;font-weight:800;color:#374151;margin-bottom:20px">
      ➕ Nova Receita
    </h3>

    <div class="form-row">
      <div class="form-group">
        <label>Emoji da receita</label>
        <input type="text" id="f-emoji" placeholder="ex: 🥗" maxlength="2" />
      </div>
      <div class="form-group">
        <label>Categoria</label>
        <select id="f-cat">
          <option value="cafe">☀️ Café da Manhã</option>
          <option value="almoco">🌿 Almoço</option>
          <option value="jantar">🌙 Jantar</option>
          <option value="lanche">🍎 Lanche</option>
        </select>
      </div>
    </div>

    <div class="form-group">
      <label>Nome da receita</label>
      <input type="text" id="f-nome" placeholder="ex: Salada de Quinoa com Abacate" />
    </div>

    <div class="form-group">
      <label>Descrição curta</label>
      <textarea id="f-desc" rows="2" placeholder="Uma frase descrevendo a receita..."></textarea>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label>Tempo de preparo</label>
        <input type="text" id="f-tempo" placeholder="ex: 25 min" />
      </div>
      <div class="form-group">
        <label>Porções</label>
        <input type="text" id="f-porcoes" placeholder="ex: 2 porções" />
      </div>
    </div>

    <div class="form-group">
      <label>Dificuldade</label>
      <select id="f-dif">
        <option value="easy">Fácil</option>
        <option value="medium">Médio</option>
        <option value="hard">Difícil</option>
      </select>
    </div>

    <p style="font-size:.85rem;font-weight:700;color:#374151;margin-bottom:10px">
      Informação Nutricional (por porção)
    </p>
    <div class="form-row-4">
      <div class="form-group">
        <label>Calorias</label>
        <input type="number" id="f-kcal" placeholder="320" />
      </div>
      <div class="form-group">
        <label>Proteínas (g)</label>
        <input type="number" id="f-prot" placeholder="18" />
      </div>
      <div class="form-group">
        <label>Carboidratos (g)</label>
        <input type="number" id="f-carbs" placeholder="40" />
      </div>
      <div class="form-group">
        <label>Gorduras (g)</label>
        <input type="number" id="f-gord" placeholder="8" />
      </div>
    </div>

    <div class="form-group">
      <label>Ingredientes (um por linha)</label>
      <textarea id="f-ing" rows="5" placeholder="200g de frango grelhado
1 xícara de quinoa
½ abacate
..."></textarea>
    </div>

    <div class="form-group">
      <label>Passos do preparo (um por linha)</label>
      <textarea id="f-passos" rows="5" placeholder="Cozinhe a quinoa por 15 minutos.
Tempere o frango e grelhe.
Monte o prato e sirva.
..."></textarea>
    </div>

    <button class="btn-save" onclick="salvarReceita()">💾 Salvar Receita</button>
    <div class="save-success" id="msgSucesso">✅ Receita salva com sucesso!</div>

    <div class="custom-recipes-list" id="listaCustom"></div>
  `;

  renderListaCustom(); // mostra as receitas já salvas
}

/* Salva a nova receita no localStorage */
function salvarReceita() {
  // pega os valores do formulário
  const nome    = document.getElementById("f-nome").value.trim();
  const emoji   = document.getElementById("f-emoji").value.trim() || "🍽️";
  const cat     = document.getElementById("f-cat").value;
  const desc    = document.getElementById("f-desc").value.trim();
  const tempo   = document.getElementById("f-tempo").value.trim();
  const porcoes = document.getElementById("f-porcoes").value.trim();
  const dif     = document.getElementById("f-dif").value;
  const kcal    = parseInt(document.getElementById("f-kcal").value) || 0;
  const prot    = parseInt(document.getElementById("f-prot").value) || 0;
  const carbs   = parseInt(document.getElementById("f-carbs").value) || 0;
  const gord    = parseInt(document.getElementById("f-gord").value) || 0;
  const ing     = document.getElementById("f-ing").value.trim().split("\n").filter(l => l.trim());
  const passos  = document.getElementById("f-passos").value.trim().split("\n").filter(l => l.trim());

  // verifica campos obrigatórios
  if (!nome || !desc || ing.length === 0 || passos.length === 0) {
    alert("Preencha pelo menos: nome, descrição, ingredientes e passos.");
    return;
  }

  // cria o objeto da receita
  const customList = carregarReceitasCustom();
  const novaReceita = {
    id: Date.now(), // ID único baseado na hora
    nome, emoji, categoria: cat, desc, tempo, porcoes, dificuldade: dif,
    kcal, proteina: prot, carbs, gordura: gord,
    ingredientes: ing,
    passos,
    bg: gerarGradiente(cat), // cor de fundo automática pela categoria
  };

  customList.push(novaReceita);
  localStorage.setItem("nutrivida_custom", JSON.stringify(customList));

  // mostra mensagem de sucesso e atualiza tudo
  document.getElementById("msgSucesso").style.display = "block";
  setTimeout(() => {
    if (document.getElementById("msgSucesso"))
      document.getElementById("msgSucesso").style.display = "none";
  }, 3000);

  renderListaCustom();
  renderCards(); // atualiza o grid principal
}

/* Gera um gradiente automático baseado na categoria */
function gerarGradiente(cat) {
  const gradientes = {
    cafe:   "linear-gradient(135deg,#fef3e2,#fde8c8)",
    almoco: "linear-gradient(135deg,#e8f5f4,#c8e8e5)",
    jantar: "linear-gradient(135deg,#e8f4fd,#c8e0f0)",
    lanche: "linear-gradient(135deg,#fef8ec,#fdefd0)",
  };
  return gradientes[cat] || "linear-gradient(135deg,#e8f5f4,#c8e8e5)";
}

/* Renderiza a lista de receitas personalizadas no admin */
function renderListaCustom() {
  const lista = carregarReceitasCustom();
  const el    = document.getElementById("listaCustom");
  if (!el) return;

  if (lista.length === 0) {
    el.innerHTML = "";
    return;
  }

  el.innerHTML = `
    <h3>📋 Suas receitas adicionadas (${lista.length})</h3>
    ${lista.map(r => `
      <div class="custom-recipe-item">
        <span>${r.emoji} ${r.nome}</span>
        <button class="btn-delete" onclick="deletarReceita(${r.id})">🗑 Deletar</button>
      </div>
    `).join("")}
  `;
}

/* Deleta uma receita personalizada pelo ID */
function deletarReceita(id) {
  if (!confirm("Tem certeza que quer deletar esta receita?")) return;
  let lista = carregarReceitasCustom();
  lista = lista.filter(r => r.id !== id); // remove a receita da lista
  localStorage.setItem("nutrivida_custom", JSON.stringify(lista));
  renderListaCustom();
  renderCards(); // atualiza o grid principal
}

/* =====================
   EVENTOS DE INTERFACE
   ===================== */

/* Filtra ao clicar nos botões de categoria */
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    categoriaAtiva = btn.dataset.cat;
    renderCards();
  });
});

/* Busca em tempo real ao digitar */
document.getElementById("searchInput").addEventListener("input", e => {
  buscaAtual = e.target.value;
  renderCards();
});

/* Fecha modal ao clicar no fundo escuro */
document.getElementById("modalBackdrop").addEventListener("click", e => {
  if (e.target === document.getElementById("modalBackdrop")) fecharModal();
});

/* Fecha admin ao clicar no fundo escuro */
document.getElementById("adminOverlay").addEventListener("click", e => {
  if (e.target === document.getElementById("adminOverlay")) fecharAdmin();
});

/* Tecla Escape fecha modals abertos */
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    fecharModal();
    fecharAdmin();
  }
  // Ctrl + Shift + A abre o painel do dono (atalho secreto)
  if (e.ctrlKey && e.shiftKey && e.key === "A") {
    e.preventDefault();
    abrirAdmin();
  }
});

/* =====================
   INICIALIZAÇÃO
   Roda assim que a página carrega
   ===================== */
renderCards();  // mostra os cards de receita
renderJardim(); // monta o jardim do minijogo
atualizarPontos(); // inicia a pontuação zerada
