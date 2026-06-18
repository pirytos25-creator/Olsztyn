import { MAP_CONFIG, MONSTERS, HISTORICAL_NODES } from './data.js';

const STORAGE_KEY = 'glosariusz-olsztyna-progress-v2';
let xp = 0;
let visitedNodes = new Set();
let modalInitialized = false;

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    xp = Number(saved.xp) || 0;
    visitedNodes = new Set(Array.isArray(saved.visited) ? saved.visited : []);
  } catch {
    xp = 0;
    visitedNodes = new Set();
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    xp,
    visited: [...visitedNodes]
  }));
}

export function initGame() {
  loadProgress();

  const gameSection = document.getElementById('game-section');
  gameSection.classList.remove('hidden');
  document.getElementById('hud-xp').textContent = xp;

  const allNodes = [...HISTORICAL_NODES, ...MONSTERS];
  createGameMap(document.querySelector('.map-container'), allNodes, MAP_CONFIG);
  initCardModal();
}

function createGameMap(container, nodes, config) {
  container.innerHTML = `
    <div class="map-shell" aria-label="${config.title}">
      <div class="map-toolbar">
        <div>
          <p class="map-kicker">Mapa eksploracji</p>
          <h2>${config.title}</h2>
        </div>
        <div class="map-legend" aria-label="Legenda mapy">
          <span><i class="legend-dot historical"></i>Miejsca</span>
          <span><i class="legend-dot monster"></i>Bestiariusz</span>
          <span><i class="legend-line"></i>Trakt</span>
        </div>
      </div>
      <div class="map-scroll" aria-label="Interaktywna mapa gminy Purda">
        <div class="map-stage" style="aspect-ratio: ${config.width} / ${config.height};">
          <img class="map-base" src="${config.image}" alt="${config.title}" draggable="false" />
          <svg class="route-layer" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"></svg>
          <div id="nodes-container" class="nodes-layer"></div>
        </div>
      </div>
    </div>
  `;

  const routeLayer = container.querySelector('.route-layer');
  const nodesLayer = container.querySelector('#nodes-container');
  drawRoute(routeLayer, nodes, config.route);

  nodes.forEach((nodeData) => {
    const isMonster = !nodeData.pytanie;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `map-node ${isMonster ? 'is-monster' : 'is-historical'}`;
    button.style.left = `${nodeData.x}%`;
    button.style.top = `${nodeData.y}%`;
    button.setAttribute('aria-label', `${nodeData.name}: ${isMonster ? 'wpis bestiariusza' : 'miejsce historyczne'}`);

    if (visitedNodes.has(nodeData.id)) {
      button.classList.add('visited');
    }

    button.innerHTML = `
      <span class="node-pulse" aria-hidden="true"></span>
      <span class="${isMonster ? 'monster-icon' : 'node-icon'}" aria-hidden="true"></span>
      <span class="node-label">${nodeData.name}</span>
    `;

    button.addEventListener('click', () => openCard(nodeData, button, isMonster));
    nodesLayer.appendChild(button);
  });
}

function drawRoute(routeLayer, nodes, routeIds) {
  const nodeById = new Map(nodes.map((node) => [node.id, node]));
  const routeNodes = routeIds.map((id) => nodeById.get(id)).filter(Boolean);

  if (routeNodes.length < 2) return;

  const points = routeNodes.map((node) => `${node.x},${node.y}`).join(' ');
  const route = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
  route.setAttribute('points', points);
  route.setAttribute('class', 'main-route');
  routeLayer.appendChild(route);

  routeNodes.forEach((node, index) => {
    if (index === 0) return;
    const prev = routeNodes[index - 1];
    const segment = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    segment.setAttribute('x1', prev.x);
    segment.setAttribute('y1', prev.y);
    segment.setAttribute('x2', node.x);
    segment.setAttribute('y2', node.y);
    segment.setAttribute('class', 'route-hit-area');
    routeLayer.appendChild(segment);
  });
}

function openCard(data, nodeElement, isMonster) {
  const modal = document.getElementById('card-modal');
  const video = document.getElementById('card-video');
  const image = document.getElementById('card-image');
  const actionResult = document.getElementById('action-result');
  const cardSeeAlso = document.getElementById('card-see-also');
  const quizSection = document.getElementById('quiz-section');
  const quizOptionsContainer = document.getElementById('quiz-options');
  const credit = document.getElementById('card-credit');

  document.getElementById('card-title').textContent = data.name;
  document.getElementById('card-type').textContent = data.type || 'Miejsce';
  document.getElementById('card-desc').textContent = data.desc;

  if (data.zobacz) {
    cardSeeAlso.innerHTML = `<strong>Warto zobaczyć:</strong> ${data.zobacz}`;
    cardSeeAlso.classList.remove('hidden');
  } else {
    cardSeeAlso.classList.add('hidden');
  }

  if (data.video) {
    video.src = data.video;
    video.classList.remove('hidden');
    image.classList.add('hidden');
    image.removeAttribute('src');
    video.play().catch((error) => console.warn(error));
  } else if (data.image) {
    image.src = data.image;
    image.alt = data.podpis || data.name;
    image.classList.remove('hidden');
    video.classList.add('hidden');
    video.pause();
    video.removeAttribute('src');
  } else {
    image.classList.add('hidden');
    video.classList.add('hidden');
  }

  if (credit) {
    const caption = [data.podpis, data.autor].filter(Boolean).join(' | ');
    credit.textContent = caption;
    credit.classList.toggle('hidden', !caption);
  }

  actionResult.classList.add('hidden');
  quizOptionsContainer.innerHTML = '';

  if (visitedNodes.has(data.id)) {
    quizSection.classList.add('hidden');
    actionResult.innerHTML = `<strong>Wpis dodany do Glosariusza!</strong><br><br>${data.wyj || ''}`;
    actionResult.className = 'action-result success';
    actionResult.classList.remove('hidden');
  } else if (isMonster) {
    quizSection.classList.remove('hidden');
    document.getElementById('quiz-question').textContent = 'Zbadaj tę postać, aby dodać ją do Glosariusza.';

    const btn = document.createElement('button');
    btn.className = 'quiz-btn glass-button';
    btn.type = 'button';
    btn.textContent = 'Zbadaj wpis (+100 XP)';
    btn.addEventListener('click', () => completeNode(data, nodeElement, actionResult, quizSection, 'Pomyślnie zbadano! Wiedza została zachowana.'));
    quizOptionsContainer.appendChild(btn);
  } else if (data.pytanie) {
    quizSection.classList.remove('hidden');
    document.getElementById('quiz-question').textContent = data.pytanie;

    data.odp.forEach((answerText, index) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-btn glass-button';
      btn.type = 'button';
      btn.textContent = answerText;
      btn.addEventListener('click', () => handleQuizAnswer(index, data, nodeElement, actionResult, quizSection));
      quizOptionsContainer.appendChild(btn);
    });
  } else {
    quizSection.classList.add('hidden');
  }

  modal.classList.remove('hidden');
}

function completeNode(data, nodeElement, actionResult, quizSection, message, details = '') {
  xp += 100;
  visitedNodes.add(data.id);
  saveProgress();

  document.getElementById('hud-xp').textContent = xp;
  nodeElement.classList.add('visited');
  quizSection.classList.add('hidden');
  actionResult.innerHTML = `<strong>${message}</strong>${details ? `<br><br>${details}` : ''}`;
  actionResult.className = 'action-result success';
  actionResult.classList.remove('hidden');
}

function handleQuizAnswer(selectedIndex, data, nodeElement, actionResult, quizSection) {
  if (selectedIndex === data.dobra) {
    completeNode(data, nodeElement, actionResult, quizSection, 'Dobrze! Otrzymujesz 100 XP.', data.wyj);
  } else {
    actionResult.innerHTML = '<strong>Zła odpowiedź! Spróbuj ponownie.</strong>';
    actionResult.className = 'action-result error';
    actionResult.classList.remove('hidden');
  }
}

function initCardModal() {
  if (modalInitialized) return;
  modalInitialized = true;

  const modal = document.getElementById('card-modal');
  const closeBtn = document.getElementById('close-card');
  const video = document.getElementById('card-video');
  const backdrop = document.querySelector('.card-backdrop');

  const closeModal = () => {
    modal.classList.add('hidden');
    if (!video.classList.contains('hidden') && video.src) {
      video.pause();
    }
  };

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}