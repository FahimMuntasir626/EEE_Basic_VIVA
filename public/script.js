/* ═══════════════════════════════════════════════════════════════
   EEE VIVA BOARD — Main Application Script
   Tab switching, Quiz engine, Viva toggling, Search, Particles
   ═══════════════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────
const quizState = {
  intro:    { answers:{}, total:30 },
  basic:    { answers:{}, total:100 },
  filter:   { answers:{}, total:20 },
  subjects: { answers:{}, total:60 }
};
let vivaShowAll = { basic:false, filter:false, subjects:false };
let activeVivaTopicFilter = { basic:'all', filter:'all', subjects:'all' };

// ─────────────────────────────────────────────
// INITIALIZATION
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  buildComponentContent();  // diagrams.js
  renderQuiz('intro', INTRO_QUESTIONS);
  renderQuiz('basic', BASIC_QUIZ_QUESTIONS);
  renderQuiz('filter', FILTER_QUIZ_QUESTIONS);
  renderQuiz('subjects', SUBJECTS_QUIZ_QUESTIONS);
  renderVivaTopicFilters('basic', BASIC_VIVA_TOPICS);
  renderVivaTopicFilters('filter', FILTER_VIVA_TOPICS);
  renderVivaTopicFilters('subjects', SUBJECTS_VIVA_TOPICS);
  renderVivaCards('basic', BASIC_VIVA_QUESTIONS, BASIC_VIVA_TOPICS);
  renderVivaCards('filter', FILTER_VIVA_QUESTIONS, FILTER_VIVA_TOPICS);
  renderVivaCards('subjects', SUBJECTS_VIVA_QUESTIONS, SUBJECTS_VIVA_TOPICS);
  // Animate stats on home page
  animateCounters();
});

// ─────────────────────────────────────────────
// TAB SWITCHING
// ─────────────────────────────────────────────
function switchTab(tabId) {
  // Tab content
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('tab-content--active'));
  const target = document.getElementById('tab-' + tabId);
  if (target) target.classList.add('tab-content--active');

  // Nav tabs
  document.querySelectorAll('.nav-tab').forEach(el => el.classList.remove('nav-tab--active'));
  const activeNav = document.querySelector(`.nav-tab[data-tab="${tabId}"]`);
  if (activeNav) activeNav.classList.add('nav-tab--active');

  // Mobile nav
  document.querySelectorAll('.mobile-nav__item').forEach(el => el.classList.remove('mobile-nav__item--active'));
  const activeMob = document.querySelector(`.mobile-nav__item[data-tab="${tabId}"]`);
  if (activeMob) activeMob.classList.add('mobile-nav__item--active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─────────────────────────────────────────────
// MOBILE NAV
// ─────────────────────────────────────────────
function toggleMobileNav() {
  document.getElementById('mobileNav').classList.toggle('mobile-nav--open');
  document.getElementById('mobileNavOverlay').classList.toggle('mobile-nav-overlay--active');
  document.getElementById('hamburger').classList.toggle('top-nav__hamburger--active');
}

// ─────────────────────────────────────────────
// INTRO SUB-TABS (Learn / Quiz)
// ─────────────────────────────────────────────
function switchIntroSub(sub) {
  document.querySelectorAll('.intro-sub').forEach(el => el.classList.remove('intro-sub--active'));
  document.getElementById('intro-' + sub).classList.add('intro-sub--active');
  const btns = document.querySelectorAll('#introSubTabs .sub-tab');
  btns.forEach(b => b.classList.remove('sub-tab--active'));
  btns[sub === 'learn' ? 0 : 1].classList.add('sub-tab--active');
}

// Component tabs (Op-Amp / 555 / BJT / MOSFET / FET)
function switchComponent(comp) {
  document.querySelectorAll('.component-content').forEach(el => el.classList.remove('component-content--active'));
  document.getElementById('comp-' + comp).classList.add('component-content--active');
  document.querySelectorAll('.comp-tab').forEach(b => b.classList.remove('comp-tab--active'));
  const activeBtn = document.querySelector(`.comp-tab[data-comp="${comp}"]`);
  if (activeBtn) activeBtn.classList.add('comp-tab--active');
}

// ─────────────────────────────────────────────
// BASIC SUB-TABS
// ─────────────────────────────────────────────
function switchBasicSub(sub) {
  document.querySelectorAll('.basic-sub').forEach(el => el.classList.remove('basic-sub--active'));
  document.getElementById('basic-' + sub).classList.add('basic-sub--active');
  const btns = document.querySelectorAll('#basicSubTabs .sub-tab');
  btns.forEach(b => b.classList.remove('sub-tab--active'));
  btns[sub === 'viva' ? 0 : 1].classList.add('sub-tab--active');
}

// ─────────────────────────────────────────────
// FILTER SUB-TABS
// ─────────────────────────────────────────────
function switchFilterSub(sub) {
  document.querySelectorAll('.filter-sub').forEach(el => el.classList.remove('filter-sub--active'));
  document.getElementById('filter-' + sub).classList.add('filter-sub--active');
  const btns = document.querySelectorAll('#filterSubTabs .sub-tab');
  btns.forEach(b => b.classList.remove('sub-tab--active'));
  btns[sub === 'viva' ? 0 : 1].classList.add('sub-tab--active');
}

// ─────────────────────────────────────────────
// SUBJECTS SUB-TABS
// ─────────────────────────────────────────────
function switchSubjectsSub(sub) {
  document.querySelectorAll('.subjects-sub').forEach(el => el.classList.remove('subjects-sub--active'));
  document.getElementById('subjects-' + sub).classList.add('subjects-sub--active');
  const btns = document.querySelectorAll('#subjectsSubTabs .sub-tab');
  btns.forEach(b => b.classList.remove('sub-tab--active'));
  btns[sub === 'viva' ? 0 : 1].classList.add('sub-tab--active');
}

// ═══════════════════════════════════════════════
// QUIZ ENGINE
// ═══════════════════════════════════════════════
function renderQuiz(section, questions) {
  const container = document.getElementById('quiz-container-' + section);
  container.innerHTML = questions.map((q, i) => `
    <div class="quiz-card" id="qcard-${section}-${q.id}" data-answered="false">
      <div class="quiz-card__header">
        <span class="quiz-card__num">Q${i+1}</span>
        <span class="quiz-card__sec">${getSectionName(section, q.sec)}</span>
      </div>
      <p class="quiz-card__question">${q.q}</p>
      <div class="quiz-card__options">
        ${['a','b','c','d'].map(opt => `
          <button class="quiz-option" id="opt-${section}-${q.id}-${opt}" onclick="selectOption('${section}', ${q.id}, '${opt}')">
            <span class="quiz-option__letter">${opt.toUpperCase()}</span>
            <span class="quiz-option__text">${q[opt]}</span>
          </button>
        `).join('')}
      </div>
      <div class="quiz-card__explanation" id="exp-${section}-${q.id}">
        <div class="explanation-content">
          <span class="explanation-icon">💡</span>
          <p>${q.exp}</p>
        </div>
      </div>
    </div>
  `).join('');
}

function getSectionName(section, secId) {
  let sections = [];
  if (section === 'intro') sections = INTRO_SECTIONS;
  else if (section === 'basic') sections = BASIC_QUIZ_SECTIONS;
  else if (section === 'filter') sections = FILTER_QUIZ_SECTIONS;
  else if (section === 'subjects') sections = SUBJECTS_QUIZ_SECTIONS;
  const found = sections.find(s => s.id === secId);
  return found ? `${found.icon} ${found.name}` : '';
}

function getQuestions(section) {
  if (section === 'intro') return INTRO_QUESTIONS;
  if (section === 'basic') return BASIC_QUIZ_QUESTIONS;
  if (section === 'filter') return FILTER_QUIZ_QUESTIONS;
  if (section === 'subjects') return SUBJECTS_QUIZ_QUESTIONS;
  return [];
}

function selectOption(section, qId, selected) {
  const q = getQuestions(section).find(x => x.id === qId);
  if (!q) return;
  const card = document.getElementById(`qcard-${section}-${qId}`);
  if (card.dataset.answered === 'true') return; // already answered

  card.dataset.answered = 'true';
  quizState[section].answers[qId] = selected;

  const isCorrect = selected === q.ans;

  // Highlight options
  ['a','b','c','d'].forEach(opt => {
    const btn = document.getElementById(`opt-${section}-${qId}-${opt}`);
    btn.classList.add('quiz-option--disabled');
    if (opt === q.ans) btn.classList.add('quiz-option--correct');
    if (opt === selected && !isCorrect) btn.classList.add('quiz-option--wrong');
  });

  // Show explanation
  document.getElementById(`exp-${section}-${qId}`).classList.add('quiz-card__explanation--show');

  // Update progress
  updateProgress(section);
}

function updateProgress(section) {
  const answered = Object.keys(quizState[section].answers).length;
  const total = quizState[section].total;
  const pct = (answered / total) * 100;

  const progressBar = document.getElementById(`progress-${section}`);
  const progressText = document.getElementById(`progress-text-${section}`);
  if (progressBar) progressBar.style.width = pct + '%';
  if (progressText) progressText.textContent = `${answered} / ${total} answered`;

  // Check if complete
  if (answered >= total) {
    showResults(section);
  }
}

function showResults(section) {
  const questions = getQuestions(section);
  let correct = 0;
  questions.forEach(q => {
    if (quizState[section].answers[q.id] === q.ans) correct++;
  });
  const total = quizState[section].total;
  const pct = Math.round((correct / total) * 100);

  const resultsPanel = document.getElementById(`results-${section}`);
  resultsPanel.classList.add('results-panel--show');

  // Animate score ring
  const arc = document.getElementById(`scoreArc-${section}`);
  const circumference = 2 * Math.PI * 52; // ~326.7
  const offset = circumference - (circumference * pct / 100);
  setTimeout(() => { arc.style.strokeDashoffset = offset; }, 100);

  document.getElementById(`scoreText-${section}`).textContent = pct + '%';
  document.getElementById(`resultsDetail-${section}`).textContent = 
    `You got ${correct} out of ${total} questions correct!`;
}

function resetQuiz(section) {
  quizState[section].answers = {};
  const questions = getQuestions(section);

  questions.forEach(q => {
    const card = document.getElementById(`qcard-${section}-${q.id}`);
    if (card) card.dataset.answered = 'false';
    ['a','b','c','d'].forEach(opt => {
      const btn = document.getElementById(`opt-${section}-${q.id}-${opt}`);
      if (btn) {
        btn.classList.remove('quiz-option--disabled','quiz-option--correct','quiz-option--wrong');
      }
    });
    const exp = document.getElementById(`exp-${section}-${q.id}`);
    if (exp) exp.classList.remove('quiz-card__explanation--show');
  });

  const resultsPanel = document.getElementById(`results-${section}`);
  if (resultsPanel) resultsPanel.classList.remove('results-panel--show');

  const arc = document.getElementById(`scoreArc-${section}`);
  if (arc) arc.style.strokeDashoffset = '326.7';

  updateProgress(section);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function revealAllQuiz(section) {
  const questions = getQuestions(section);
  questions.forEach(q => {
    if (quizState[section].answers[q.id]) return; // already answered
    selectOption(section, q.id, q.ans); // auto-select correct
  });
}

// ═══════════════════════════════════════════════
// VIVA Q&A ENGINE
// ═══════════════════════════════════════════════
function renderVivaTopicFilters(section, topics) {
  const container = document.getElementById(`viva-topics-${section}`);
  container.innerHTML = `
    <button class="topic-chip topic-chip--active" data-topic="all" onclick="filterVivaByTopic('${section}','all', this)">
      All Topics
    </button>
    ${topics.map(t => `
      <button class="topic-chip" data-topic="${t.id}" onclick="filterVivaByTopic('${section}','${t.id}', this)" style="--chip-color:${t.color}">
        ${t.icon} ${t.name}
      </button>
    `).join('')}
  `;
}

function renderVivaCards(section, questions, topics) {
  const container = document.getElementById(`viva-container-${section}`);
  container.innerHTML = questions.map((q, i) => {
    const topic = topics.find(t => t.id === q.topic);
    const color = topic ? topic.color : '#6c63ff';
    const topicName = topic ? `${topic.icon} ${topic.name}` : '';
    return `
      <div class="viva-card" data-topic="${q.topic}" data-q="${q.q.toLowerCase()}" data-a="${(q.ans || '').toLowerCase()}">
        <div class="viva-card__header" onclick="toggleVivaAnswer(this)">
          <div class="viva-card__meta">
            <span class="viva-card__num" style="background:linear-gradient(135deg,${color},${color}aa);color:#fff">Q${i+1}</span>
            <span class="viva-card__topic" style="color:${color}">${topicName}</span>
          </div>
          <div class="viva-card__q">${q.q}</div>
          <span class="viva-card__toggle">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </div>
        <div class="viva-card__answer">
          <div class="viva-card__answer-inner">
            <div class="viva-answer-content">${q.ans}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function toggleVivaAnswer(headerEl) {
  const card = headerEl.closest('.viva-card');
  card.classList.toggle('viva-card--open');
}

function toggleAllViva(section) {
  vivaShowAll[section] = !vivaShowAll[section];
  const container = document.getElementById(`viva-container-${section}`);
  container.querySelectorAll('.viva-card').forEach(card => {
    if (card.style.display === 'none') return; // skip hidden
    if (vivaShowAll[section]) {
      card.classList.add('viva-card--open');
    } else {
      card.classList.remove('viva-card--open');
    }
  });
}

function filterVivaByTopic(section, topicId, btn) {
  activeVivaTopicFilter[section] = topicId;
  // Update active chip
  const chips = document.querySelectorAll(`#viva-topics-${section} .topic-chip`);
  chips.forEach(c => c.classList.remove('topic-chip--active'));
  btn.classList.add('topic-chip--active');
  // Filter cards
  applyVivaFilters(section);
}

function filterViva(section) {
  applyVivaFilters(section);
}

function applyVivaFilters(section) {
  const searchInput = document.getElementById(`search-${section}`);
  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const topicFilter = activeVivaTopicFilter[section] || 'all';
  const container = document.getElementById(`viva-container-${section}`);
  
  container.querySelectorAll('.viva-card').forEach(card => {
    const cardTopic = card.dataset.topic;
    const cardQ = card.dataset.q || '';
    const cardA = card.dataset.a || '';
    const matchesTopic = topicFilter === 'all' || cardTopic === topicFilter;
    const matchesSearch = !searchTerm || cardQ.includes(searchTerm) || cardA.includes(searchTerm);
    card.style.display = (matchesTopic && matchesSearch) ? '' : 'none';
  });
}

// ═══════════════════════════════════════════════
// PARTICLES BACKGROUND
// ═══════════════════════════════════════════════
function createParticles() {
  const container = document.getElementById('particles');
  const count = 30;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    p.style.width = p.style.height = (Math.random() * 4 + 1) + 'px';
    p.style.opacity = Math.random() * 0.3 + 0.1;
    p.style.animationDelay = (Math.random() * 20) + 's';
    p.style.animationDuration = (Math.random() * 20 + 15) + 's';
    container.appendChild(p);
  }
}

// ═══════════════════════════════════════════════
// STAT COUNTER ANIMATION
// ═══════════════════════════════════════════════
function animateCounters() {
  const cards = document.querySelectorAll('.stat-card__num');
  cards.forEach(card => {
    const finalText = card.textContent;
    const finalNum = parseInt(finalText.replace('+',''));
    const suffix = finalText.includes('+') ? '+' : '';
    let current = 0;
    const step = Math.max(1, Math.floor(finalNum / 40));
    const interval = setInterval(() => {
      current += step;
      if (current >= finalNum) {
        current = finalNum;
        clearInterval(interval);
      }
      card.textContent = current + suffix;
    }, 30);
  });
}

// ═══════════════════════════════════════════════
// SCROLL NAV EFFECT
// ═══════════════════════════════════════════════
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const nav = document.getElementById('topNav');
  if (window.scrollY > 60) {
    nav.classList.add('top-nav--scrolled');
  } else {
    nav.classList.remove('top-nav--scrolled');
  }
  lastScroll = window.scrollY;
});
