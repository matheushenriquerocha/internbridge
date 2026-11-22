// ==================== BASE DE VAGAS (INICIANTES E AVANÇADOS / DIVERSOS CURSOS) ====================
const VAGAS_DATA = [
  {
    id: 1,
    titulo: "Estágio em Suporte Técnico e TI",
    empresa: "TechBridge Soluções",
    curso: "Tecnologia",
    turno: "Manhã",
    horario: "08h00 às 13h00 (Flexível em semana de provas)",
    bolsa: "R$ 1.100,00 + Vale Transporte",
    modalidade: "Híbrido (3x presencial)",
    semestre: "A partir do 1º período",
    periodoMinimo: 1,
    aceitaIniciante: true,
    obrigatorios: [
      "Cursando graduação em TI, Sistemas ou áreas afins (turno tarde ou noite)",
      "Noções básicas de informática e sistemas",
      "Vontade de aprender (não exige experiência anterior)"
    ],
    desejaveis: [
      "Projetos acadêmicos na faculdade",
      "Conhecimento básico em Excel ou Git"
    ]
  },
  {
    id: 2,
    titulo: "Estágio em Desenvolvimento Full-Stack (React & Node)",
    empresa: "NuvemCore Engenharia de Software",
    curso: "Tecnologia",
    turno: "Tarde",
    horario: "13h00 às 18h00 (Horário flexível)",
    bolsa: "R$ 1.650,00 + Auxílio Home Office + VR",
    modalidade: "100% Remoto",
    semestre: "A partir do 5º período",
    periodoMinimo: 5,
    aceitaIniciante: false,
    obrigatorios: [
      "Cursando Ciência da Computação, Engenharia de Software ou SI (5º ao 8º período)",
      "Experiência prévia com JavaScript, React ou APIs REST (estágio anterior, freelancer ou projeto real)",
      "Conhecimento prático de Git e bancos de dados SQL"
    ],
    desejaveis: [
      "Vivência em metodologias ágeis (Scrum/Kanban)",
      "Noções de TypeScript ou testes automatizados"
    ]
  },
  {
    id: 3,
    titulo: "Estágio em Dados e Business Intelligence (BI)",
    empresa: "DataPulse Analytics",
    curso: "Tecnologia",
    turno: "Manhã",
    horario: "08h30 às 13h30",
    bolsa: "R$ 1.500,00 + Vale Transporte + Vale Refeição",
    modalidade: "Híbrido",
    semestre: "A partir do 4º período",
    periodoMinimo: 4,
    aceitaIniciante: false,
    obrigatorios: [
      "Cursando TI, Estatística ou Engenharia a partir do 4º período",
      "Experiência prática com SQL e construção de dashboards (Power BI ou Looker)",
      "Excel intermediário/avançado"
    ],
    desejaveis: [
      "Conhecimento em Python (Pandas) para tratamento de dados"
    ]
  },
  {
    id: 4,
    titulo: "Estágio Administrativo e Atendimento",
    empresa: "Grupo Atlântico",
    curso: "Administração",
    turno: "Tarde",
    horario: "13h00 às 18h00 (Segunda a Sexta)",
    bolsa: "R$ 1.150,00 + VT + Seguro de Vida",
    modalidade: "Presencial",
    semestre: "A partir do 2º período",
    periodoMinimo: 2,
    aceitaIniciante: true,
    obrigatorios: [
      "Cursando Administração ou Processos Gerenciais (turno manhã ou noite)",
      "Conhecimento básico de planilhas (Excel/Google Sheets)"
    ],
    desejaveis: [
      "Organização de documentos e atendimento ao cliente",
      "Cursos livres gratuitos na área administrativa"
    ]
  },
  {
    id: 5,
    titulo: "Estágio em Planejamento Estratégico e Controladoria",
    empresa: "Vértice Corporativo",
    curso: "Administração",
    turno: "Manhã",
    horario: "08h00 às 13h00",
    bolsa: "R$ 1.550,00 + VR + VT",
    modalidade: "Híbrido",
    semestre: "A partir do 5º período",
    periodoMinimo: 5,
    aceitaIniciante: false,
    obrigatorios: [
      "Cursando Administração ou Engenharia de Produção (5º ao 7º período)",
      "Experiência anterior em rotinas administrativas, empresa júnior ou projetos de gestão",
      "Domínio de Excel (PROCV, Tabela Dinâmica) e apresentações executivas"
    ],
    desejaveis: [
      "Conhecimento em indicadores KPIs e Power BI"
    ]
  },
  {
    id: 6,
    titulo: "Estágio em Auditoria Fiscal e Contabilidade",
    empresa: "Contábil Prime & Associados",
    curso: "Contabilidade",
    turno: "Tarde",
    horario: "13h00 às 18h00",
    bolsa: "R$ 1.450,00 + Vale Transporte + Auxílio Alimentação",
    modalidade: "Presencial",
    semestre: "A partir do 4º período",
    periodoMinimo: 4,
    aceitaIniciante: false,
    obrigatorios: [
      "Cursando Ciências Contábeis ou Economia a partir do 4º período",
      "Experiência prévia com conciliação bancária, lançamentos contábeis ou rotinas fiscais",
      "Excel intermediário"
    ],
    desejaveis: [
      "Vivência em sistemas ERP (Domínio, Alterdata ou SAP)"
    ]
  },
  {
    id: 7,
    titulo: "Estágio em Obras e Orçamentos de Engenharia",
    empresa: "Construtora Horizonte",
    curso: "Engenharia",
    turno: "Manhã",
    horario: "07h30 às 12h30 (Acompanhamento de obra e escritório)",
    bolsa: "R$ 1.600,00 + Vale Transporte + Refeição no local",
    modalidade: "Presencial",
    semestre: "A partir do 5º período",
    periodoMinimo: 5,
    aceitaIniciante: false,
    obrigatorios: [
      "Cursando Engenharia Civil (5º ao 8º período)",
      "Experiência prática em leitura de projetos estruturais/arquitetônicos ou vivência em canteiro/laboratório",
      "Domínio de AutoCAD e Excel"
    ],
    desejaveis: [
      "Conhecimento em Revit (BIM) ou MS Project"
    ]
  },
  {
    id: 8,
    titulo: "Estágio em Projetos de Arquitetura e Interiores",
    empresa: "Estúdio Traço Urbano",
    curso: "Engenharia",
    turno: "Tarde",
    horario: "13h30 às 18h30",
    bolsa: "R$ 1.350,00 + Vale Transporte",
    modalidade: "Híbrido",
    semestre: "A partir do 4º período",
    periodoMinimo: 4,
    aceitaIniciante: false,
    obrigatorios: [
      "Cursando Arquitetura e Urbanismo a partir do 4º período",
      "Portfólio acadêmico com plantas baixas, detalhamento e modelagem 3D",
      "Conhecimento em AutoCAD e SketchUp"
    ],
    desejaveis: [
      "Renderização em Lumion, Enscape ou V-Ray"
    ]
  },
  {
    id: 9,
    titulo: "Estágio em Design UI/UX e Criação Digital",
    empresa: "Estúdio Criativo Mídia",
    curso: "Comunicação",
    turno: "Tarde",
    horario: "13h00 às 18h00 (Horário flexível)",
    bolsa: "R$ 1.300,00 + Auxílio Home Office",
    modalidade: "100% Remoto",
    semestre: "A partir do 3º período",
    periodoMinimo: 3,
    aceitaIniciante: false,
    obrigatorios: [
      "Cursando Design, Publicidade ou Comunicação Digital a partir do 3º período",
      "Portfólio com protótipos de interfaces ou peças gráficas (projetos da faculdade ou freelas)",
      "Domínio prático de Figma e pacote Adobe"
    ],
    desejaveis: [
      "Noções de Design System e acessibilidade web"
    ]
  },
  {
    id: 10,
    titulo: "Estágio em Social Media e Produção de Conteúdo",
    empresa: "Agência Impulso",
    curso: "Comunicação",
    turno: "Manhã",
    horario: "08h30 às 13h30",
    bolsa: "R$ 1.050,00 + Vale Transporte",
    modalidade: "Híbrido",
    semestre: "A partir do 1º período",
    periodoMinimo: 1,
    aceitaIniciante: true,
    obrigatorios: [
      "Cursando Jornalismo, Publicidade, Marketing ou Letras (turno tarde ou noite)",
      "Boa escrita em português e familiaridade com redes sociais",
      "Não exige experiência prévia em agência"
    ],
    desejaveis: [
      "Noções básicas de Canva ou edição de vídeos curtos"
    ]
  },
  {
    id: 11,
    titulo: "Estágio em Auxiliar Pedagógico",
    empresa: "Colégio Horizonte",
    curso: "Educação",
    turno: "Manhã",
    horario: "07h30 às 12h30 (Segunda a Sexta)",
    bolsa: "R$ 950,00 + Auxílio Transporte",
    modalidade: "Presencial",
    semestre: "A partir do 2º período",
    periodoMinimo: 2,
    aceitaIniciante: true,
    obrigatorios: [
      "Cursando Pedagogia ou Licenciaturas (turno noturno)",
      "Boa comunicação com crianças e equipe escolar"
    ],
    desejaveis: [
      "Participação em projetos de extensão ou monitoria",
      "Organização de atividades lúdicas"
    ]
  },
  {
    id: 12,
    titulo: "Estágio em Assistência de Enfermagem Hospitalar",
    empresa: "Hospital São Lucas",
    curso: "Saúde",
    turno: "Manhã",
    horario: "07h00 às 13h00 (Escala 5x2)",
    bolsa: "R$ 1.400,00 + Vale Transporte + Alimentação",
    modalidade: "Presencial",
    semestre: "A partir do 6º período",
    periodoMinimo: 6,
    aceitaIniciante: false,
    obrigatorios: [
      "Cursando Enfermagem (6º ao 8º período)",
      "Experiência prévia em estágio curricular obrigatório ou vivência prática em clínica/ambulatório",
      "Cartão de vacinação atualizado"
    ],
    desejaveis: [
      "Curso de suporte básico de vida (BLS) ou participação em ligas acadêmicas"
    ]
  },
  {
    id: 13,
    titulo: "Estágio em Atendimento e Triagem Clínica",
    empresa: "Clínica Bem-Estar",
    curso: "Saúde",
    turno: "Noite",
    horario: "17h00 às 22h00 (Escala flexível)",
    bolsa: "R$ 1.000,00 + Vale Transporte",
    modalidade: "Presencial",
    semestre: "A partir do 2º período",
    periodoMinimo: 2,
    aceitaIniciante: true,
    obrigatorios: [
      "Cursando Enfermagem, Psicologia ou Fisioterapia (turno manhã)",
      "Postura ética, empatia e acolhimento"
    ],
    desejaveis: [
      "Participação em ações sociais ou projetos de extensão"
    ]
  },
  {
    id: 14,
    titulo: "Estágio Jurídico Contencioso (Cível e Trabalhista)",
    empresa: "Advocacia Mendes & Associados",
    curso: "Direito",
    turno: "Tarde",
    horario: "13h00 às 18h00 (Liberação em dias de prova)",
    bolsa: "R$ 1.450,00 + Vale Transporte",
    modalidade: "Híbrido",
    semestre: "A partir do 6º período",
    periodoMinimo: 6,
    aceitaIniciante: false,
    obrigatorios: [
      "Cursando Direito (6º ao 9º período)",
      "Experiência prévia na elaboração de petições iniciais/contestações e consulta em sistemas (PJe/e-SAJ)",
      "Boa redação jurídica"
    ],
    desejaveis: [
      "Atuação anterior no Núcleo de Prática Jurídica (NPJ) ou escritório"
    ]
  }
];

// ==================== DETECÇÃO INTELIGENTE DO PERFIL DO USUÁRIO ====================
function extrairPerfilAcademico(cursoTexto, turnoUsuario) {
  const texto = (cursoTexto || "").toLowerCase();
  let areaDetectada = null;

  if (/(ti|tecnologia|sistema|computa|software|dados|análise|redes|informática)/i.test(texto)) {
    areaDetectada = "Tecnologia";
  } else if (/(administra|gestão|processos|negócios|produção)/i.test(texto)) {
    areaDetectada = "Administração";
  } else if (/(contábeis|contabilidade|economia|finanças)/i.test(texto)) {
    areaDetectada = "Contabilidade";
  } else if (/(engenharia|arquitetura|urbanismo|civil|elétrica|mecânica)/i.test(texto)) {
    areaDetectada = "Engenharia";
  } else if (/(design|publicidade|marketing|jornalismo|comunicação|letras)/i.test(texto)) {
    areaDetectada = "Comunicação";
  } else if (/(pedagogia|educação|licenciatura|história|matemática)/i.test(texto)) {
    areaDetectada = "Educação";
  } else if (/(enfermagem|psicologia|saúde|fisioterapia|medicina|farmácia)/i.test(texto)) {
    areaDetectada = "Saúde";
  } else if (/(direito|jurídic)/i.test(texto)) {
    areaDetectada = "Direito";
  }

  const matchPeriodo = texto.match(/(\d+)\s*[º°o]?\s*(per|sem)/i) || texto.match(/(\d+)/);
  const periodoNumero = matchPeriodo ? parseInt(matchPeriodo[1], 10) : 1;

  return {
    area: areaDetectada,
    periodo: periodoNumero,
    turno: turnoUsuario || ""
  };
}

// ==================== SISTEMA DE TEMA CLARO / ESCURO ====================
function aplicarTema(tema) {
  document.documentElement.setAttribute("data-theme", tema);
  localStorage.setItem("ib_tema", tema);

  const isDark = tema === "dark";
  document.querySelectorAll(".theme-icon").forEach((el) => {
    el.textContent = isDark ? "☀️" : "🌙";
  });
  document.querySelectorAll(".theme-label").forEach((el) => {
    el.textContent = isDark ? "Claro" : "Escuro";
  });
}

function alternarTema() {
  const atual = document.documentElement.getAttribute("data-theme") || "light";
  aplicarTema(atual === "dark" ? "light" : "dark");
}

const temaSalvo = localStorage.getItem("ib_tema") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
aplicarTema(temaSalvo);

["btn-theme-auth", "btn-theme-desktop", "btn-theme-mobile"].forEach((id) => {
  const btn = document.getElementById(id);
  if (btn) btn.addEventListener("click", alternarTema);
});

// ==================== MOSTRAR / OCULTAR SENHA ====================
document.querySelectorAll(".toggle-password").forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = document.getElementById(btn.dataset.target);
    if (!input) return;

    const mostrando = input.type === "text";
    input.type = mostrando ? "password" : "text";
    btn.setAttribute("aria-pressed", String(!mostrando));
    btn.setAttribute("aria-label", mostrando ? "Mostrar senha" : "Ocultar senha");

    const eyeOpen = btn.querySelector(".icon-eye-open");
    const eyeClosed = btn.querySelector(".icon-eye-closed");
    if (eyeOpen && eyeClosed) {
      eyeOpen.classList.toggle("hidden", !mostrando);
      eyeClosed.classList.toggle("hidden", mostrando);
    }
  });
});

function resetarCamposSenhaVisibilidade() {
  document.querySelectorAll(".toggle-password").forEach((btn) => {
    const input = document.getElementById(btn.dataset.target);
    if (input) input.type = "password";
    btn.setAttribute("aria-pressed", "false");
    btn.setAttribute("aria-label", "Mostrar senha");
    const eyeOpen = btn.querySelector(".icon-eye-open");
    const eyeClosed = btn.querySelector(".icon-eye-closed");
    if (eyeOpen && eyeClosed) {
      eyeOpen.classList.remove("hidden");
      eyeClosed.classList.add("hidden");
    }
  });
}

// ==================== SPLASH SCREEN (5s) E AUTENTICAÇÃO ====================
const authScreen = document.getElementById("auth-screen");
const splashScreen = document.getElementById("splash-screen");
const authCard = document.getElementById("auth-card");
const appShell = document.getElementById("app-shell");
const authTabs = document.querySelector(".auth-tabs");
const tabLogin = document.getElementById("tab-login");
const tabRegister = document.getElementById("tab-register");
const formLogin = document.getElementById("form-login");
const formRegister = document.getElementById("form-register");
const authSuccessEl = document.getElementById("auth-success");

let splashTimer = null;

function iniciarSplashParaLogin() {
  clearTimeout(splashTimer);
  authCard.classList.add("hidden");
  splashScreen.classList.remove("hidden", "fade-out");

  const bar = splashScreen.querySelector(".splash-progress-bar");
  if (bar) {
    bar.style.animation = "none";
    void bar.offsetWidth;
    bar.style.animation = "";
  }

  splashTimer = setTimeout(() => {
    splashScreen.classList.add("fade-out");
    setTimeout(() => {
      splashScreen.classList.add("hidden");
      authCard.classList.remove("hidden");
    }, 450);
  }, 4550);
}

function getUsuarios() {
  return JSON.parse(localStorage.getItem("ib_usuarios")) || [];
}

function getUsuarioLogado() {
  return JSON.parse(localStorage.getItem("ib_sessao")) || null;
}

function mostrarAbaLogin() {
  authTabs.classList.remove("register-mode");
  tabLogin.classList.add("active");
  tabRegister.classList.remove("active");
  tabLogin.setAttribute("aria-selected", "true");
  tabRegister.setAttribute("aria-selected", "false");
  formRegister.classList.add("hidden");
  formLogin.classList.remove("hidden");
}

function mostrarAbaCadastro() {
  authSuccessEl.classList.add("hidden");
  authTabs.classList.add("register-mode");
  tabRegister.classList.add("active");
  tabLogin.classList.remove("active");
  tabRegister.setAttribute("aria-selected", "true");
  tabLogin.setAttribute("aria-selected", "false");
  formLogin.classList.add("hidden");
  formRegister.classList.remove("hidden");
}

tabLogin.addEventListener("click", () => {
  document.getElementById("login-erro").classList.add("hidden");
  mostrarAbaLogin();
});

tabRegister.addEventListener("click", () => {
  document.getElementById("reg-erro").classList.add("hidden");
  mostrarAbaCadastro();
});

function dispararErroAuth(el, mensagem) {
  authSuccessEl.classList.add("hidden");
  el.textContent = mensagem;
  el.classList.remove("hidden");
  authCard.classList.remove("shake");
  void authCard.offsetWidth;
  authCard.classList.add("shake");
}

// Cadastro: salva no localStorage e retorna para o Login
formRegister.addEventListener("submit", (e) => {
  e.preventDefault();
  const erroEl = document.getElementById("reg-erro");
  erroEl.classList.add("hidden");

  const nome = document.getElementById("reg-nome").value.trim();
  const email = document.getElementById("reg-email").value.trim().toLowerCase();
  const telefoneEl = document.getElementById("reg-telefone");
  const telefone = telefoneEl ? telefoneEl.value.trim() : "";
  const curso = document.getElementById("reg-curso").value.trim();
  const turno = document.getElementById("reg-turno").value;
  const senha = document.getElementById("reg-senha").value;

  const usuarios = getUsuarios();
  if (usuarios.some((u) => u.email === email)) {
    dispararErroAuth(erroEl, "Este e-mail já está cadastrado. Faça login na aba Entrar.");
    return;
  }

  const novoUsuario = { nome, email, telefone, curso, turno, senha };
  usuarios.push(novoUsuario);
  localStorage.setItem("ib_usuarios", JSON.stringify(usuarios));

  formRegister.reset();
  resetarCamposSenhaVisibilidade();
  mostrarAbaLogin();
  document.getElementById("login-email").value = email;
  document.getElementById("login-senha").value = "";
  document.getElementById("login-senha").focus();

  authSuccessEl.textContent = "Cadastro realizado! Digite sua senha para validar o acesso.";
  authSuccessEl.classList.remove("hidden");
  mostrarToast("Conta criada! Faça login para entrar.");
});

// Login: valida acesso
formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const erroEl = document.getElementById("login-erro");
  erroEl.classList.add("hidden");
  authSuccessEl.classList.add("hidden");

  const email = document.getElementById("login-email").value.trim().toLowerCase();
  const senha = document.getElementById("login-senha").value;

  const usuarios = getUsuarios();
  const encontrado = usuarios.find((u) => u.email === email && u.senha === senha);

  if (!encontrado) {
    dispararErroAuth(erroEl, "E-mail ou senha incorretos. Verifique os dados ou crie uma conta.");
    return;
  }

  resetarCamposSenhaVisibilidade();
  iniciarSessao(encontrado);
  mostrarToast(`Acesso validado! Bem-vindo(a), ${encontrado.nome.split(" ")[0]}!`);
});

function mapearTurnoSelect(turnoCurto) {
  if (turnoCurto === "Manhã") return "Manhã (08h às 13h)";
  if (turnoCurto === "Tarde") return "Tarde (13h às 18h)";
  if (turnoCurto === "Noite") return "Noite (18h às 22h)";
  return turnoCurto || "Manhã (08h às 13h)";
}

function iniciarSessao(usuario) {
  clearTimeout(splashTimer);
  localStorage.setItem("ib_sessao", JSON.stringify(usuario));
  authScreen.classList.add("hidden");
  appShell.classList.remove("hidden");

  const primeiroNome = usuario.nome.split(" ")[0];
  document.getElementById("user-greeting").textContent = `Olá, ${primeiroNome} • ${usuario.curso} • Turno: ${usuario.turno}`;

  const cvSalvo = JSON.parse(localStorage.getItem(`ib_cv_${usuario.email}`));
  if (cvSalvo) {
    preencherFormularioEPreviewCv(cvSalvo);
  } else {
    const contatoInicial = usuario.telefone
      ? `${usuario.email} | ${usuario.telefone}`
      : usuario.email;

    const cvInicial = {
      nome: usuario.nome,
      curso: usuario.curso,
      turno: mapearTurnoSelect(usuario.turno),
      contato: contatoInicial,
      projetos: "",
      habilidades: ""
    };
    preencherFormularioEPreviewCv(cvInicial);
  }

  candidaturas = JSON.parse(localStorage.getItem(`ib_cand_${usuario.email}`)) || [];
  atualizarContadores();
  renderVagas();
  renderCandidaturas();
}

function encerrarSessao() {
  localStorage.removeItem("ib_sessao");
  appShell.classList.add("hidden");
  authScreen.classList.remove("hidden");
  splashScreen.classList.add("hidden");
  authCard.classList.remove("hidden");
  authSuccessEl.classList.add("hidden");
  formLogin.reset();
  formRegister.reset();
  resetarCamposSenhaVisibilidade();
  mostrarAbaLogin();
  mostrarToast("Você saiu da sua conta.");
}

document.getElementById("btn-logout-desktop").addEventListener("click", encerrarSessao);
document.getElementById("btn-logout-mobile").addEventListener("click", encerrarSessao);

// ==================== ESTADO E ELEMENTOS DO APP ====================
let filtroTurno = "todos";
let filtroCurso = "todos";
let filtroNivel = "todos";
let vagaSelecionada = null;
let candidaturas = [];

const listaVagasEl = document.getElementById("lista-vagas");
const estadoVazioEl = document.getElementById("estado-vazio");
const contadorVagasEl = document.getElementById("contador-vagas");
const modalVaga = document.getElementById("modal-vaga");
const toastEl = document.getElementById("toast");

// ==================== RENDERIZAÇÃO DE VAGAS ====================
function renderVagas() {
  const usuario = getUsuarioLogado();
  const perfil = usuario
    ? extrairPerfilAcademico(
        document.getElementById("cv-curso").value || usuario.curso,
        usuario.turno
      )
    : { area: null, periodo: 1, turno: "" };

  const filtradas = VAGAS_DATA.filter((vaga) => {
    const matchTurno = filtroTurno === "todos" || vaga.turno === filtroTurno;
    const matchCurso = filtroCurso === "todos" || vaga.curso === filtroCurso;
    const matchNivel =
      filtroNivel === "todos" ||
      (filtroNivel === "iniciante" && vaga.aceitaIniciante) ||
      (filtroNivel === "avancado" && !vaga.aceitaIniciante);
    return matchTurno && matchCurso && matchNivel;
  });

  // Ordena priorizando vagas compatíveis com a área, turno e período do usuário
  const ordenadas = [...filtradas].sort((a, b) => {
    const scoreA =
      (perfil.area && a.curso === perfil.area ? 4 : 0) +
      (perfil.turno && a.turno === perfil.turno ? 2 : 0) +
      (perfil.periodo >= a.periodoMinimo ? 1 : 0);
    const scoreB =
      (perfil.area && b.curso === perfil.area ? 4 : 0) +
      (perfil.turno && b.turno === perfil.turno ? 2 : 0) +
      (perfil.periodo >= b.periodoMinimo ? 1 : 0);
    return scoreB - scoreA;
  });

  contadorVagasEl.textContent = `${ordenadas.length} vaga(s) encontrada(s)`;
  listaVagasEl.innerHTML = "";

  if (ordenadas.length === 0) {
    estadoVazioEl.classList.remove("hidden");
    return;
  }

  estadoVazioEl.classList.add("hidden");

  ordenadas.forEach((vaga) => {
    const jaCandidatado = candidaturas.some((c) => c.id === vaga.id);
    const batePerfil =
      perfil.area &&
      vaga.curso === perfil.area &&
      perfil.periodo >= vaga.periodoMinimo;

    const card = document.createElement("article");
    card.className = "vaga-card";
    card.innerHTML = `
      <div>
        <div class="card-tags">
          ${
            vaga.aceitaIniciante
              ? `<span class="tag-iniciante">Sem experiência • ${vaga.semestre}</span>`
              : `<span class="tag-turno">Experiência prática • ${vaga.semestre}</span>`
          }
          <span class="tag-turno">Turno: ${vaga.turno}</span>
          ${batePerfil ? '<span class="tag-iniciante">★ Compatível com seu perfil</span>' : ""}
        </div>
        <h3 class="vaga-title">${vaga.titulo}</h3>
        <p class="vaga-empresa">${vaga.empresa} • ${vaga.curso} • ${vaga.modalidade}</p>
        <div class="vaga-info">
          <span><strong>Horário:</strong> ${vaga.horario}</span>
          <span><strong>Bolsa:</strong> ${vaga.bolsa}</span>
        </div>
      </div>
      <button type="button" class="btn ${jaCandidatado ? "btn-secondary" : "btn-primary"} btn-full" data-id="${vaga.id}">
        ${jaCandidatado ? "Candidatura Enviada ✓ (Ver Detalhes)" : "Ver Detalhes e Requisitos"}
      </button>
    `;

    card.querySelector("button").addEventListener("click", () => abrirDetalhesVaga(vaga));
    listaVagasEl.appendChild(card);
  });
}

// ==================== MODAL DE DETALHES ====================
function abrirDetalhesVaga(vaga) {
  vagaSelecionada = vaga;
  document.getElementById("modal-titulo").textContent = vaga.titulo;
  document.getElementById("modal-empresa").textContent = `${vaga.empresa} • Área: ${vaga.curso}`;
  document.getElementById("modal-horario").textContent = vaga.horario;
  document.getElementById("modal-bolsa").textContent = vaga.bolsa;
  document.getElementById("modal-modalidade").textContent = vaga.modalidade;
  document.getElementById("modal-semestre").textContent = vaga.semestre;

  const seloEl = document.getElementById("modal-selo");
  seloEl.textContent = vaga.aceitaIniciante
    ? `${vaga.semestre} • Sem experiência prévia`
    : `${vaga.semestre} • Requer experiência prática`;

  document.getElementById("modal-obrigatorios").innerHTML = vaga.obrigatorios.map((item) => `<li>${item}</li>`).join("");
  document.getElementById("modal-desejaveis").innerHTML = vaga.desejaveis.map((item) => `<li>${item}</li>`).join("");

  const btnCand = document.getElementById("btn-candidatar-modal");
  const jaEnviou = candidaturas.some((c) => c.id === vaga.id);
  btnCand.textContent = jaEnviou ? "Você já se candidatou a esta vaga ✓" : "Candidatar-se em 1 Clique";
  btnCand.disabled = jaEnviou;

  modalVaga.showModal();
}

document.getElementById("btn-fechar-modal").addEventListener("click", () => modalVaga.close());

document.getElementById("btn-candidatar-modal").addEventListener("click", () => {
  const user = getUsuarioLogado();
  if (!vagaSelecionada || !user) return;

  if (!candidaturas.some((c) => c.id === vagaSelecionada.id)) {
    candidaturas.push({
      ...vagaSelecionada,
      dataEnvio: new Date().toLocaleDateString("pt-BR"),
      statusEtapa: 2
    });
    localStorage.setItem(`ib_cand_${user.email}`, JSON.stringify(candidaturas));
    atualizarContadores();
    renderVagas();
    renderCandidaturas();
    mostrarToast("Candidatura enviada com sucesso!");
  }
  modalVaga.close();
});

// ==================== FILTROS ====================
document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    filtroTurno = chip.dataset.turno;
    renderVagas();
  });
});

document.getElementById("filtro-curso").addEventListener("change", (e) => {
  filtroCurso = e.target.value;
  renderVagas();
});

document.getElementById("filtro-nivel").addEventListener("change", (e) => {
  filtroNivel = e.target.value;
  renderVagas();
});

document.getElementById("btn-limpar-filtros").addEventListener("click", () => {
  filtroTurno = "todos";
  filtroCurso = "todos";
  filtroNivel = "todos";
  document.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c.dataset.turno === "todos"));
  document.getElementById("filtro-curso").value = "todos";
  document.getElementById("filtro-nivel").value = "todos";
  renderVagas();
});

// ==================== CURRÍCULO ====================
document.getElementById("form-curriculo").addEventListener("submit", (e) => {
  e.preventDefault();
  const user = getUsuarioLogado();
  const dadosCv = {
    nome: document.getElementById("cv-nome").value.trim(),
    curso: document.getElementById("cv-curso").value.trim(),
    turno: document.getElementById("cv-turno").value,
    contato: document.getElementById("cv-contato").value.trim(),
    projetos: document.getElementById("cv-projetos").value.trim(),
    habilidades: document.getElementById("cv-habilidades").value.trim()
  };
  if (user) {
    localStorage.setItem(`ib_cv_${user.email}`, JSON.stringify(dadosCv));
  }
  preencherFormularioEPreviewCv(dadosCv);
  renderVagas(); // Atualiza recomendação de vagas conforme o curso/período editado no currículo
  document.getElementById("cv-feedback").textContent = "Currículo salvo e compatibilidade de vagas atualizada!";
  mostrarToast("Currículo e recomendações atualizados!");
});

function preencherFormularioEPreviewCv(dados) {
  if (!dados) return;
  document.getElementById("cv-nome").value = dados.nome || "";
  document.getElementById("cv-curso").value = dados.curso || "";
  if (dados.turno) document.getElementById("cv-turno").value = dados.turno;
  document.getElementById("cv-contato").value = dados.contato || "";

  document.getElementById("cv-projetos").value = dados.projetos || "";
  document.getElementById("cv-habilidades").value = dados.habilidades || "";

  document.getElementById("prev-nome").textContent = dados.nome || "Seu Nome Completo";
  document.getElementById("prev-curso").textContent = `${dados.curso || "Curso e Período"} • Disponível: ${dados.turno || "Turno Livre"}`;
  document.getElementById("prev-contato").textContent = dados.contato || "seu.email@exemplo.com | (00) 00000-0000";

  document.getElementById("prev-projetos").textContent = dados.projetos
    ? dados.projetos
    : "Ainda não preenchido — descreva suas experiências, trabalhos ou projetos acadêmicos no formulário ao lado.";

  document.getElementById("prev-habilidades").textContent = dados.habilidades
    ? dados.habilidades
    : "Ainda não preenchido — adicione suas habilidades ou ferramentas no formulário ao lado.";
}

document.getElementById("btn-imprimir-cv").addEventListener("click", () => window.print());

// ==================== CANDIDATURAS & NAVEGAÇÃO ====================
function renderCandidaturas() {
  const listaEl = document.getElementById("lista-candidaturas");
  const vazioEl = document.getElementById("candidaturas-vazio");
  listaEl.innerHTML = "";

  if (candidaturas.length === 0) {
    vazioEl.classList.remove("hidden");
    return;
  }

  vazioEl.classList.add("hidden");
  candidaturas.forEach((cand) => {
    const item = document.createElement("article");
    item.className = "status-card";
    item.innerHTML = `
      <div class="card-tags">
        <span class="tag-turno">Turno: ${cand.turno}</span>
        <span class="tag-iniciante">Enviado em ${cand.dataEnvio}</span>
      </div>
      <h3>${cand.titulo}</h3>
      <p class="vaga-empresa">${cand.empresa} • ${cand.bolsa}</p>
      <div class="progress-steps" aria-label="Progresso da candidatura">
        <div class="step done">1. Enviado ✓</div>
        <div class="step current">2. Currículo Visto</div>
        <div class="step">3. Entrevista</div>
      </div>
    `;
    listaEl.appendChild(item);
  });
}

function atualizarContadores() {
  document.getElementById("badge-count").textContent = candidaturas.length;
  document.getElementById("mobile-badge-count").textContent = candidaturas.length;
}

document.querySelectorAll("[data-tab]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const alvo = btn.dataset.tab;
    document.querySelectorAll(".tab-section").forEach((sec) => sec.classList.add("hidden"));
    document.getElementById(`sec-${alvo}`).classList.remove("hidden");

    document.querySelectorAll("[data-tab]").forEach((b) => {
      const ativo = b.dataset.tab === alvo;
      b.classList.toggle("active", ativo);
      if (ativo) b.setAttribute("aria-current", "page");
      else b.removeAttribute("aria-current");
    });
  });
});

function mostrarToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.remove("hidden");
  setTimeout(() => toastEl.classList.add("hidden"), 2800);
}

// ==================== VERIFICAR SESSÃO AO CARREGAR ====================
const sessaoAtiva = getUsuarioLogado();
if (sessaoAtiva) {
  iniciarSessao(sessaoAtiva);
} else {
  iniciarSplashParaLogin();
}