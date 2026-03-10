'use strict';

// ============================================================
// DATA
// ============================================================

const MOVIES = [
  { id: 'a-clockwork-orange-1971',               title: 'A Clockwork Orange',              year: 1971, file: 'A Clockwork Orange (1971).jpg' },
  { id: 'alien-1979',                            title: 'Alien',                           year: 1979, file: 'Alien (1979).jpg' },
  { id: 'apocalypto-2006',                       title: 'Apocalypto',                      year: 2006, file: 'Apocalypto (2006).jpg' },
  { id: 'back-to-the-future-1985',               title: 'Back to the Future',              year: 1985, file: 'Back to the Future (1985).jpg' },
  { id: 'batman-mask-of-the-phantasm-1993',      title: 'Batman: Mask of the Phantasm',    year: 1993, file: 'Batman- Mask of the Phantasm (1993).jpg' },
  { id: 'children-of-men-2006',                  title: 'Children of Men',                 year: 2006, file: 'Children of Men (2006).jpg' },
  { id: 'conan-the-barbarian-1982',              title: 'Conan the Barbarian',             year: 1982, file: 'Conan the Barbarian (1982).jpg' },
  { id: 'crime-busters-1977',                    title: 'Crime Busters',                   year: 1977, file: 'Crime Busters (1977).jpg' },
  { id: 'demolition-man-1993',                   title: 'Demolition Man',                  year: 1993, file: 'Demolition Man (1993).jpg' },
  { id: 'die-hard-1988',                         title: 'Die Hard',                        year: 1988, file: 'Die Hard (1988).jpg' },
  { id: 'first-blood-1982',                      title: 'First Blood',                     year: 1982, file: 'First Blood (1982).jpg' },
  { id: 'freaks-1932',                           title: 'Freaks',                          year: 1932, file: 'Freaks (1932).jpg' },
  { id: 'full-metal-jacket-1987',                title: 'Full Metal Jacket',               year: 1987, file: 'Full Metal Jacket (1987).jpg' },
  { id: 'ghostbusters-1984',                     title: 'Ghostbusters',                    year: 1984, file: 'Ghostbusters (1984).jpg' },
  { id: 'gladiator-2000',                        title: 'Gladiator',                       year: 2000, file: 'Gladiator (2000).jpg' },
  { id: 'gremlins-1984',                         title: 'Gremlins',                        year: 1984, file: 'Gremlins (1984).jpg' },
  { id: 'groundhog-day-1993',                    title: 'Groundhog Day',                   year: 1993, file: 'Groundhog Day (1993).jpg' },
  { id: 'highlander-1986',                       title: 'Highlander',                      year: 1986, file: 'Highlander (1986).jpg' },
  { id: 'jurassic-park-1993',                    title: 'Jurassic Park',                   year: 1993, file: 'Jurassic Park (1993).jpg' },
  { id: 'legend-1985',                           title: 'Legend',                          year: 1985, file: 'Legend (1985).jpg' },
  { id: 'leon-the-professional-1994',            title: 'Léon : The Professional',         year: 1994, file: 'Leon- The Professional (1994).jpg' },
  { id: 'life-is-beautiful-1997',                title: 'Life Is Beautiful',               year: 1997, file: 'Life Is Beautiful (1997).jpg' },
  { id: 'life-of-brian-1979',                    title: 'Life of Brian',                   year: 1979, file: 'Life of Brian (1979).jpg' },
  { id: 'mad-max-1979',                          title: 'Mad Max',                         year: 1979, file: 'Mad Max (1979).jpg' },
  { id: 'men-in-black-1997',                     title: 'Men in Black',                    year: 1997, file: 'Men in Black (1997).jpg' },
  { id: 'monty-python-and-the-holy-grail-1975',  title: 'Monty Python and the Holy Grail', year: 1975, file: 'Monty Python and the Holy Grail (1975).jpg' },
  { id: 'my-name-is-nobody-1973',                title: 'My Name Is Nobody',               year: 1973, file: 'My Name Is Nobody (1973).jpg' },
  { id: 'no-country-for-old-men-2007',           title: 'No Country for Old Men',          year: 2007, file: 'No Country for Old Men (2007).jpg' },
  { id: 'oldboy-2003',                           title: 'Oldboy',                          year: 2003, file: 'Oldboy (2003).jpg' },
  { id: 'once-upon-a-time-in-the-west-1968',     title: 'Once Upon a Time in the West',    year: 1968, file: 'Once Upon a Time in the West (1968).jpg' },
  { id: 'predator-1987',                         title: 'Predator',                        year: 1987, file: 'Predator (1987).jpg' },
  { id: 'pulp-fiction-1994',                     title: 'Pulp Fiction',                    year: 1994, file: 'Pulp Fiction (1994).jpg' },
  { id: 'raiders-of-the-lost-ark-1981',          title: 'Raiders of the Lost Ark',         year: 1981, file: 'Raiders of the Lost Ark (1981).jpg' },
  { id: 'robocop-1987',                          title: 'RoboCop',                         year: 1987, file: 'RoboCop (1987).jpg' },
  { id: 'sin-city-2005',                         title: 'Sin City',                        year: 2005, file: 'Sin City (2005).jpg' },
  { id: 'star-wars-1977',                        title: 'Star Wars',                       year: 1977, file: 'Star Wars (1977).jpg' },
  { id: 'starship-troopers-1997',                title: 'Starship Troopers',               year: 1997, file: 'Starship Troopers (1997).jpg' },
  { id: 'the-blues-brothers-1980',               title: 'The Blues Brothers',              year: 1980, file: 'The Blues Brothers (1980).jpg' },
  { id: 'the-dark-crystal-1982',                 title: 'The Dark Crystal',                year: 1982, file: 'The Dark Crystal (1982).jpg' },
  { id: 'the-godfather-1972',                    title: 'The Godfather',                   year: 1972, file: 'The Godfather (1972).jpg' },
  { id: 'the-good-the-bad-and-the-ugly-1966',    title: 'The Good, the Bad and the Ugly',  year: 1966, file: 'The Good, the Bad and the Ugly (1966).jpg' },
  { id: 'the-lord-of-the-rings-1978',            title: 'The Lord of the Rings',           year: 1978, file: 'The Lord of the Rings (1978).jpg' },
  { id: 'the-name-of-the-rose-1986',             title: 'The Name of the Rose',            year: 1986, file: 'The Name of the Rose (1986).jpg' },
  { id: 'the-neverending-story',                 title: 'The NeverEnding Story',           year: 1984, file: 'The NeverEnding Story Collection.jpg' },
  { id: 'the-road-2009',                         title: 'The Road',                        year: 2009, file: 'The Road (2009).jpg' },
  { id: 'the-visitors-1993',                     title: 'The Visitors',                    year: 1993, file: 'The Visitors (1993).jpg' },
  { id: 'titane-2021',                           title: 'Titane',                          year: 2021, file: 'Titane (2021).jpg' },
  { id: 'total-recall-1990',                     title: 'Total Recall',                    year: 1990, file: 'Total Recall (1990).jpg' },
  { id: 'v-for-vendetta-2006',                   title: 'V for Vendetta',                  year: 2006, file: 'V for Vendetta (2006).jpg' },
  { id: 'willow-1988',                           title: 'Willow',                          year: 1988, file: 'Willow (1988).jpg' },
];

const QUESTIONS = [
  { id: 1,  enigma: 'Le Film le Plus Vu',                      answerId: 'the-blues-brothers-1980' },
  { id: 2,  enigma: 'Mieux que Le Seigneur des Anneaux',       answerId: 'conan-the-barbarian-1982' },
  { id: 3,  enigma: 'Souvenir de mon Grand-Père',              answerId: 'crime-busters-1977' },
  { id: 4,  enigma: 'J\'étais Mal à l\'Aise',                  answerId: 'freaks-1932' },
  { id: 5,  enigma: 'Le Meilleur Méchant',                     answerId: 'legend-1985' },
  { id: 6,  enigma: 'Je Pleure à Chaque Fois',                 answerId: 'life-is-beautiful-1997' },
  { id: 7,  enigma: 'Ma Sonnerie de Téléphone',                answerId: 'oldboy-2003' },
  { id: 8,  enigma: 'Le Plus Grand Fou Rire',                  answerId: 'monty-python-and-the-holy-grail-1975' },
  { id: 9,  enigma: 'IMMORTAN !',                              answerId: 'mad-max-1979' },
  { id: 10, enigma: 'J\'avais pas l\'âge de le voir au cinéma', answerId: 'starship-troopers-1997' },
];

const SCORE_DATA = [
  { gif: 'https://media1.tenor.com/m/s9QOQqA-aVYAAAAC/action-war.gif',                                          quote: '"You\'re so ugly you could be a modern art masterpiece!', film: 'Full Metal Jacket' },
  { gif: 'https://media1.tenor.com/m/tT57ofXKP8MAAAAC/run-away.gif',                                            quote: '"Run away! Run away!"',                                   film: 'Monty Python and the Holy Grail' },
  { gif: 'https://media1.tenor.com/m/iSYI2BQu-TIAAAAC/great-scott-back-to-the-future.gif',                      quote: '"Great Scott!"',                                          film: 'Back to the Future' },
  { gif: 'https://media1.tenor.com/m/Iwgypq5HuxcAAAAC/arnold-schwarzenegger-predator.gif',                      quote: '"Get to the choppa!"',                                    film: 'Predator' },
  { gif: 'https://media1.tenor.com/m/mvCOlk-A6MEAAAAC/ghostbusters-dogs-and-cats-living-together.gif',          quote: '"Dogs and cats living together... mass hysteria!"',       film: 'Ghostbusters' },
  { gif: 'https://media1.tenor.com/m/izzBiUifngcAAAAC/yoda-do-or-do-not.gif',                                   quote: '"Do. Or do not. There is no try."',                       film: 'Star Wars' },
  { gif: 'https://media1.tenor.com/m/95AGbCSEeY4AAAAC/always-look-on-the-bright-side-of-life-monty-python.gif', quote: '"Always look on the bright side of life."',               film: 'Life of Brian' },
  { gif: 'https://media1.tenor.com/m/JNROTOuADA0AAAAC/gladiator-russell-crowe.gif',                             quote: '"Are you not entertained?"',                              film: 'Gladiator' },
  { gif: 'https://media1.tenor.com/m/7GBKPeSQZPUAAAAC/die-hard-bruce-willis.gif',                               quote: '"Yippee-ki-yay!"',                                        film: 'Die Hard' },
  { gif: 'https://media1.tenor.com/m/RkO3ytNjWUEAAAAC/highlander-there-can-be-only-one.gif',                    quote: '"There can be only one."',                                film: 'Highlander' },
  { gif: 'https://media1.tenor.com/m/y0LVeURAIi4AAAAC/brothers-mission-from-god.gif',                           quote: '"We\'re on a mission from God."',                         film: 'The Blues Brothers' },
];

const STORAGE_KEY      = 'trouves-le-film';
const STORAGE_VERSION  = 1;
const CLUE_UNLOCKED_KEY = 'trouves-le-film-clue';

// ============================================================
// STATE
// ============================================================

let STATE = {
  playerName:       '',
  currentQuestion:  0,
  answers:          [],  // { movieId, isCorrect }[]
  phase:            'welcome',
  selectedMovieId:  null,
};

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: STORAGE_VERSION, ...STATE }));
  } catch (_) { /* quota or private mode — silent fail */ }
}

function loadSavedState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw);
    if (saved.version !== STORAGE_VERSION) return null;
    if (!saved.phase || saved.phase === 'welcome') return null;
    return saved;
  } catch (_) { return null; }
}

function clearState() {
  try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
  STATE = {
    playerName: '', currentQuestion: 0, answers: [],
    phase: 'welcome', selectedMovieId: null,
  };
}

// ============================================================
// DOM REFS
// ============================================================

function $(id) { return document.getElementById(id); }

const DOM = {
  screens: {
    welcome:  $('screen-welcome'),
    question: $('screen-question'),
    score:    $('screen-score'),
    results:  $('screen-results'),
  },
  // Welcome
  playerNameInput:  $('player-name'),
  btnStart:         $('btn-start'),
  btnResume:        $('btn-resume'),
  welcomeClue:      $('welcome-clue'),
  btnShowClue:      $('btn-show-clue'),
  welcomeClueWord:  $('welcome-clue-word'),
  // Question
  qNumber:          $('q-number'),
  progressFill:     $('progress-fill'),
  qEnigma:          $('q-enigma'),
  posterGrid:       $('poster-grid'),
  // Bottom sheet
  overlay:          $('overlay'),
  bottomSheet:      $('bottom-sheet'),
  bsPoster:         $('bs-poster'),
  bsTitle:          $('bs-title'),
  btnCancel:        $('btn-cancel'),
  btnConfirm:       $('btn-confirm'),
  // Score
  scoreGif:         $('score-gif'),
  scoreCount:       $('score-count'),
  scoreMessage:     $('score-message'),
  scoreFilm:        $('score-film'),
  scoreName:        $('score-name'),
  btnResults:       $('btn-results'),
  btnReplay:        $('btn-replay'),
  clueBlock:        $('clue-block'),
  confettiCanvas:   $('confetti-canvas'),
  // Results
  resultsSummary:   $('results-summary'),
  resultsList:      $('results-list'),
  btnHome:          $('btn-home'),
};

// ============================================================
// SCREEN NAVIGATION
// ============================================================

function showScreen(name) {
  Object.values(DOM.screens).forEach(s => s.classList.remove('screen--active'));
  DOM.screens[name].classList.add('screen--active');
  DOM.screens[name].scrollTop = 0;
}

// ============================================================
// HELPERS
// ============================================================

function movieLabel(movie) {
  if (!movie) return '?';
  return movie.year ? `${movie.title} (${movie.year})` : movie.title;
}

function posterSrc(movie) {
  // encodeURIComponent handles spaces + special chars; leaves ( ) . - intact
  return `Posters_Films/${encodeURIComponent(movie.file)}`;
}

// ============================================================
// WELCOME SCREEN
// ============================================================

function renderWelcome() {
  showScreen('welcome');
  const saved = loadSavedState();
  if (saved && saved.phase === 'question' && saved.currentQuestion > 0) {
    DOM.btnResume.style.display = '';
    DOM.playerNameInput.value = saved.playerName || '';
  } else {
    DOM.btnResume.style.display = 'none';
    DOM.playerNameInput.value = '';
  }
  // Show clue button if player previously got 10/10
  const clueUnlocked = localStorage.getItem(CLUE_UNLOCKED_KEY) === '1';
  DOM.welcomeClue.style.display     = clueUnlocked ? '' : 'none';
  DOM.welcomeClueWord.style.display = 'none'; // always collapsed on load
}

DOM.btnShowClue.addEventListener('click', () => {
  const visible = DOM.welcomeClueWord.style.display !== 'none';
  DOM.welcomeClueWord.style.display = visible ? 'none' : '';
  DOM.btnShowClue.textContent = visible ? '🔑 Revoir mon indice' : '🔑 Masquer l\'indice';
});

DOM.btnStart.addEventListener('click', () => {
  clearState();
  STATE.playerName     = DOM.playerNameInput.value.trim().slice(0, 20);
  STATE.phase          = 'question';
  STATE.currentQuestion = 0;
  STATE.answers        = [];
  saveState();
  renderPosterGrid();
  renderQuestion(0);
});

DOM.btnResume.addEventListener('click', () => {
  const saved = loadSavedState();
  if (!saved) return;
  STATE = { ...saved, selectedMovieId: null };
  renderPosterGrid();
  renderQuestion(STATE.currentQuestion);
});

// ============================================================
// POSTER GRID
// ============================================================

let gridRendered = false;

function renderPosterGrid() {
  if (gridRendered) return;
  gridRendered = true;

  DOM.posterGrid.innerHTML = '';

  // Sort alphabetically so the grid is browsable
  const sorted = [...MOVIES].sort((a, b) => a.title.localeCompare(b.title));

  sorted.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'poster-card';
    card.dataset.movieId = movie.id;

    const img = document.createElement('img');
    img.src      = posterSrc(movie);
    img.alt      = movie.title;
    img.loading  = 'lazy';
    img.decoding = 'async';
    img.addEventListener('load', () => img.classList.add('loaded'), { once: true });

    card.appendChild(img);
    DOM.posterGrid.appendChild(card);
  });

  // Single delegated listener — much faster than 50 individual listeners
  DOM.posterGrid.addEventListener('click', handlePosterClick);
}

function handlePosterClick(e) {
  const card = e.target.closest('.poster-card');
  if (!card) return;
  const movieId = card.dataset.movieId;
  if (movieId) openBottomSheet(movieId);
}

// ============================================================
// QUESTION SCREEN
// ============================================================

function renderQuestion(index, withAnimation = false) {
  showScreen('question');
  const q = QUESTIONS[index];

  DOM.qNumber.textContent      = `${index + 1} / 10`;
  DOM.progressFill.style.width = `${(index / 10) * 100}%`;

  if (withAnimation) {
    DOM.qEnigma.classList.add('anim-enter');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => DOM.qEnigma.classList.remove('anim-enter'));
    });
  }

  DOM.qEnigma.textContent = `« ${q.enigma} »`;

  // Scroll the poster grid back to the top for each new question
  const container = DOM.posterGrid.parentElement;
  container.scrollTop = 0;
}

// ============================================================
// BOTTOM SHEET
// ============================================================

let sheetLocked = false;

function openBottomSheet(movieId) {
  if (sheetLocked) return;
  sheetLocked = true;

  const movie = MOVIES.find(m => m.id === movieId);
  if (!movie) { sheetLocked = false; return; }

  STATE.selectedMovieId = movieId;

  DOM.bsPoster.src = posterSrc(movie);
  DOM.bsPoster.alt = movie.title;
  DOM.bsTitle.textContent = movieLabel(movie);

  DOM.bottomSheet.classList.add('is-open');
  DOM.overlay.classList.add('is-visible');

  // Unlock after the CSS transition (300ms) + a small buffer
  setTimeout(() => { sheetLocked = false; }, 350);
}

function closeBottomSheet() {
  DOM.bottomSheet.classList.remove('is-open');
  DOM.overlay.classList.remove('is-visible');
  STATE.selectedMovieId = null;
}

DOM.btnCancel.addEventListener('click', closeBottomSheet);
DOM.overlay.addEventListener('click', closeBottomSheet);

DOM.btnConfirm.addEventListener('click', () => {
  if (!STATE.selectedMovieId) return;

  const movieId   = STATE.selectedMovieId;
  const q         = QUESTIONS[STATE.currentQuestion];
  const isCorrect = movieId === q.answerId;

  closeBottomSheet();

  STATE.answers.push({ movieId, isCorrect });
  STATE.currentQuestion++;
  saveState();

  if (STATE.answers.length === 10) {
    STATE.phase = 'score';
    saveState();
    renderScore();
  } else {
    animateTransition(() => renderQuestion(STATE.currentQuestion, true));
  }
});

function animateTransition(callback) {
  const enigma    = DOM.qEnigma;
  const container = DOM.posterGrid.parentElement;

  // Fade out
  enigma.classList.add('anim-exit');
  container.style.transition = 'opacity 180ms ease';
  container.style.opacity    = '0';

  setTimeout(() => {
    enigma.classList.remove('anim-exit');
    container.style.opacity = '1';
    callback();
  }, 200);
}

// ============================================================
// SCORE SCREEN
// ============================================================

function renderScore() {
  showScreen('score');
  stopConfetti();

  const score = STATE.answers.filter(a => a.isCorrect).length;
  const data  = SCORE_DATA[score];

  // Reset GIF animation
  DOM.scoreGif.classList.remove('revealed');
  DOM.scoreGif.src = data.gif;
  DOM.scoreGif.alt = data.caption;
  DOM.scoreCount.textContent = '0';
  DOM.scoreMessage.textContent = data.quote;
  DOM.scoreFilm.textContent    = data.film;
  DOM.scoreName.textContent    = STATE.playerName
    ? `Bravo ${STATE.playerName} !`
    : '';

  // Reveal GIF after a short delay
  setTimeout(() => DOM.scoreGif.classList.add('revealed'), 200);

  // Count-up animation
  const duration  = 1200;
  const startTime = performance.now();

  function tick(now) {
    const elapsed  = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    DOM.scoreCount.textContent = Math.round(eased * score);
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      DOM.scoreCount.textContent = score;
      DOM.progressFill.style.width = '100%';
      if (score === 10) {
        try { localStorage.setItem(CLUE_UNLOCKED_KEY, '1'); } catch (_) {}
        DOM.clueBlock.style.display = '';
        setTimeout(launchConfetti, 300);
      } else {
        DOM.clueBlock.style.display = 'none';
      }
    }
  }

  requestAnimationFrame(tick);
}

DOM.btnResults.addEventListener('click', () => {
  STATE.phase = 'results';
  renderResults();
});

DOM.btnReplay.addEventListener('click', () => {
  stopConfetti();
  clearState();
  gridRendered = false; // allow re-render (scores reset, new game)
  renderWelcome();
});

// ============================================================
// RESULTS SCREEN
// ============================================================

function renderResults() {
  showScreen('results');

  const score = STATE.answers.filter(a => a.isCorrect).length;
  DOM.resultsSummary.textContent =
    `${score} bonne${score > 1 ? 's' : ''} réponse${score > 1 ? 's' : ''} sur 10`;

  DOM.resultsList.innerHTML = '';

  QUESTIONS.forEach((q, i) => {
    const answer = STATE.answers[i];
    if (!answer) return;

    const userMovie = MOVIES.find(m => m.id === answer.movieId);
    const icon      = answer.isCorrect ? '✓' : '✗';

    const li = document.createElement('li');
    li.className = `result-row result-row--${answer.isCorrect ? 'correct' : 'wrong'}`;
    li.innerHTML = `
      <div class="result-row__num">${icon} Question ${i + 1}</div>
      <div class="result-row__enigma">« ${q.enigma} »</div>
      <div class="result-row__answer">${movieLabel(userMovie)}</div>
      ${!answer.isCorrect ? `<div class="result-row__wrong-label">✗ Mauvaise réponse</div>` : ''}
    `;
    DOM.resultsList.appendChild(li);
  });
}

DOM.btnHome.addEventListener('click', () => {
  clearState();
  gridRendered = false;
  renderWelcome();
});

// ============================================================
// CONFETTI
// ============================================================

const CONFETTI_COLORS = [
  '#d4a017', '#f0ece0', '#e74c3c', '#2ecc71',
  '#3498db', '#9b59b6', '#f39c12', '#1abc9c',
];

let confettiRafId = null;

function launchConfetti() {
  const canvas = DOM.confettiCanvas;
  const ctx    = canvas.getContext('2d');

  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({ length: 70 }, () => ({
    x:             Math.random() * canvas.width,
    y:             -10 - Math.random() * 120,
    vx:            (Math.random() - 0.5) * 4,
    vy:            2.5 + Math.random() * 3,
    color:         CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    size:          6 + Math.random() * 8,
    rotation:      Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.18,
    shape:         Math.random() > 0.5 ? 'rect' : 'circle',
  }));

  const startTime = performance.now();
  const duration  = 4500;

  function draw(now) {
    const elapsed = now - startTime;
    if (elapsed > duration) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      confettiRafId = null;
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Fade out during last 30%
    const fadeRatio = elapsed > duration * 0.7
      ? 1 - (elapsed - duration * 0.7) / (duration * 0.3)
      : 1;
    ctx.globalAlpha = Math.max(0, fadeRatio);

    particles.forEach(p => {
      p.x        += p.vx;
      p.y        += p.vy;
      p.vy       += 0.06; // gravity
      p.rotation += p.rotationSpeed;

      // Wrap horizontally
      if (p.x < -20)                p.x = canvas.width  + 20;
      if (p.x > canvas.width  + 20) p.x = -20;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;

      if (p.shape === 'rect') {
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    });

    ctx.globalAlpha = 1;
    confettiRafId   = requestAnimationFrame(draw);
  }

  confettiRafId = requestAnimationFrame(draw);
}

function stopConfetti() {
  if (confettiRafId) {
    cancelAnimationFrame(confettiRafId);
    confettiRafId = null;
  }
  const canvas = DOM.confettiCanvas;
  const ctx    = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// ============================================================
// PREVENT ACCIDENTAL EXIT DURING GAME
// ============================================================

window.addEventListener('beforeunload', e => {
  if (STATE.phase === 'question') {
    e.preventDefault();
    e.returnValue = ''; // required by some browsers
  }
});

// ============================================================
// INIT
// ============================================================

function init() {
  const saved = loadSavedState();

  if (saved && saved.phase === 'score') {
    STATE = { ...saved, selectedMovieId: null };
    renderPosterGrid();
    renderScore();
  } else if (saved && saved.phase === 'results') {
    STATE = { ...saved, selectedMovieId: null };
    renderPosterGrid();
    renderResults();
  } else {
    renderWelcome();
  }
}

init();
