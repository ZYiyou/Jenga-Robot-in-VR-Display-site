(function () {
  var root = document.getElementById('game-flow-control-room');
  if (!root) return;

  var buttons = Array.prototype.slice.call(root.querySelectorAll('.control-step-btn'));
  var video = root.querySelector('#control-room-video');
  var videoSource = root.querySelector('#control-room-video-source');
  var panelTitle = root.querySelector('#control-room-panel-title');
  var panelDesc = root.querySelector('#control-room-panel-desc');
  var placeholder = root.querySelector('#control-room-placeholder');

  if (!video || !videoSource || !panelTitle || !panelDesc || !placeholder || buttons.length === 0) return;

  var relBase = (window.__HUGO_REL_BASE__ || document.documentElement.getAttribute('data-hbb-relurl') || '/').trim();
  if (!relBase.startsWith('/')) relBase = '/' + relBase;
  if (!relBase.endsWith('/')) relBase += '/';

  function resolveVideoPath(path) {
    if (!path) return '';
    if (/^https?:\/\//i.test(path)) return path;
    if (path.startsWith('/uploads/')) {
      return relBase === '/' ? path : (relBase.replace(/\/$/, '') + path);
    }
    return path;
  }

  function showPlaceholder(stepLabel) {
    placeholder.classList.add('is-visible');
    video.style.display = 'none';
    placeholder.innerHTML = '<strong>Video coming soon</strong><span>' + stepLabel + '</span>';
  }

  function hidePlaceholder() {
    placeholder.classList.remove('is-visible');
    video.style.display = 'block';
  }

  function getActiveLabel() {
    var active = root.querySelector('.control-step-btn.is-active');
    if (!active) return '';
    return 'Step ' + (active.dataset.step || '') + ' · ' + (active.dataset.title || '');
  }

  function activate(button) {
    buttons.forEach(function (item) {
      var active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', active ? 'true' : 'false');
      item.setAttribute('aria-pressed', active ? 'true' : 'false');
      item.tabIndex = active ? 0 : -1;
    });

    var step = button.dataset.step || '';
    var title = button.dataset.title || '';
    var desc = button.dataset.desc || '';
    var videoPath = resolveVideoPath(button.dataset.video || '');
    var label = 'Step ' + step + ' · ' + title;

    panelTitle.textContent = label;
    panelDesc.textContent = desc;
    video.setAttribute('aria-label', 'Game flow video for ' + title);

    hidePlaceholder();
    video.pause();
    videoSource.src = videoPath;
    video.load();

    var playPromise = video.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(function () {});
    }
  }

  function onVideoReady() {
    hidePlaceholder();
  }

  video.addEventListener('loadedmetadata', onVideoReady);
  video.addEventListener('loadeddata', onVideoReady);
  video.addEventListener('canplay', onVideoReady);

  video.addEventListener('error', function () {
    var label = getActiveLabel();
    if (!label) return;
    showPlaceholder(label);
  });

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      activate(button);
    });

    button.addEventListener('keydown', function (event) {
      var index = buttons.indexOf(button);
      if (index < 0) return;

      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        event.preventDefault();
        buttons[(index + 1) % buttons.length].focus();
      }

      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        event.preventDefault();
        buttons[(index - 1 + buttons.length) % buttons.length].focus();
      }

      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activate(button);
      }
    });
  });

  var defaultButton = root.querySelector('.control-step-btn.is-active') || buttons[0];
  activate(defaultButton);
})();
