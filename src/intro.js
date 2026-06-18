import { INTRO_VIDEOS } from './data.js';

export function initIntro(onComplete) {
  const introSection = document.getElementById('intro-section');
  const videoEl = document.getElementById('intro-video');
  const skipBtn = document.getElementById('skip-intro');
  const startBtn = document.getElementById('start-intro');
  const title = document.getElementById('intro-title');
  const subtitle = document.getElementById('intro-subtitle');
  
  let currentVideoIndex = 0;
  let isFinished = false;

  const finishIntro = () => {
    if (isFinished) return;
    isFinished = true;
    
    introSection.classList.add('fade-out');
    setTimeout(() => {
      introSection.classList.add('hidden');
      videoEl.pause();
      videoEl.removeAttribute('src');
      videoEl.load();
      if (onComplete) onComplete();
    }, 2000); // match CSS transition
  };

  skipBtn.addEventListener('click', finishIntro);

  const playNextVideo = () => {
    if (isFinished) return;
    if (currentVideoIndex >= INTRO_VIDEOS.length) {
      finishIntro();
      return;
    }
    
    videoEl.src = INTRO_VIDEOS[currentVideoIndex];
    videoEl.play().catch(err => {
      console.warn("Autoplay prevented or error:", err);
      finishIntro(); // Fallback if video fails
    });
    
    currentVideoIndex++;
  };

  videoEl.addEventListener('ended', playNextVideo);

  // Instead of starting immediately, we wait for user interaction to allow audio
  startBtn.addEventListener('click', () => {
      startBtn.classList.add('hidden');
      skipBtn.classList.remove('hidden');
      
      playNextVideo();

      // Text animations
      setTimeout(() => {
        title.classList.remove('hidden');
        title.classList.add('visible');
      }, 1000);

      setTimeout(() => {
        subtitle.classList.remove('hidden');
        subtitle.classList.add('visible');
      }, 3000);

      setTimeout(() => {
        title.classList.remove('visible');
        subtitle.classList.remove('visible');
      }, 9000);

      // Overall fallback timer (30s)
      setTimeout(() => {
        finishIntro();
      }, 30000);
  });
}
