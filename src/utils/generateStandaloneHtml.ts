import { GALLERY_PHOTOS } from '../data/galleryData';
import { PANDA_FACTS, MIDNIGHT_SCENARIOS } from '../data/insideJokes';

export function getStandaloneHtml(): string {
  const photosJson = JSON.stringify(GALLERY_PHOTOS);
  const factsJson = JSON.stringify(PANDA_FACTS);
  const midnightJson = JSON.stringify(MIDNIGHT_SCENARIOS);

  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Happy Birthday, Panda! 🐼🎂</title>
  <meta name="description" content="Personalized Birthday Gallery & Tribute for our chaotic, smart-working big sister Panda.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Fredoka:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
  <style>
    :root {
      --bg: #121214;
      --card-bg: #1e1e24;
      --card-border: #2e2e38;
      --text: #f3f4f6;
      --text-muted: #9ca3af;
      --accent: #10b981;
      --accent-hover: #059669;
      --rose: #f43f5e;
      --gold: #f59e0b;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      background-color: var(--bg);
      color: var(--text);
      font-family: 'Plus Jakarta Sans', sans-serif;
      line-height: 1.6;
      overflow-x: hidden;
    }
    .font-display {
      font-family: 'Fredoka', sans-serif;
    }
    .font-handwriting {
      font-family: 'Caveat', cursive;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    /* Layout */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.25rem;
    }
    /* Nav */
    nav {
      position: sticky;
      top: 0;
      z-index: 40;
      background: rgba(18, 18, 20, 0.88);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--card-border);
      height: 64px;
      display: flex;
      align-items: center;
    }
    .nav-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-weight: 700;
      font-size: 1.2rem;
      font-family: 'Fredoka', sans-serif;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: 9999px;
      font-size: 0.875rem;
      font-weight: 600;
      cursor: pointer;
      border: 1px solid transparent;
      transition: all 0.2s ease;
    }
    .btn-primary {
      background: var(--accent);
      color: #000;
    }
    .btn-primary:hover {
      background: var(--accent-hover);
      transform: scale(1.03);
    }
    .btn-secondary {
      background: #27272a;
      color: #fff;
      border-color: #3f3f46;
    }
    .btn-secondary:hover {
      background: #3f3f46;
    }
    /* Hero */
    .hero {
      text-align: center;
      padding: 4rem 1rem 3rem;
      position: relative;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.35rem 1rem;
      border-radius: 9999px;
      background: rgba(16, 185, 129, 0.15);
      border: 1px solid rgba(16, 185, 129, 0.3);
      color: #6ee7b7;
      font-size: 0.8rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
    }
    .hero h1 {
      font-size: clamp(2.2rem, 6vw, 4.2rem);
      font-weight: 700;
      margin-bottom: 1.25rem;
      line-height: 1.15;
    }
    .hero p {
      max-width: 680px;
      margin: 0 auto 2rem;
      color: var(--text-muted);
      font-size: clamp(1rem, 2vw, 1.2rem);
    }
    /* Countdown Card */
    .timer-card {
      max-width: 520px;
      margin: 0 auto 2.5rem;
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 1.25rem;
      padding: 1.5rem;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
    }
    .timer-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.75rem;
      margin-top: 1rem;
    }
    .timer-box {
      background: #141417;
      border: 1px solid #2e2e38;
      border-radius: 0.75rem;
      padding: 0.75rem 0.5rem;
      text-align: center;
    }
    .timer-digit {
      display: block;
      font-family: 'Fredoka', sans-serif;
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--accent);
    }
    .timer-label {
      font-size: 0.7rem;
      text-transform: uppercase;
      color: var(--text-muted);
      letter-spacing: 0.05em;
    }
    /* Gallery */
    .gallery-section {
      padding: 4rem 0;
    }
    .section-title {
      text-align: center;
      margin-bottom: 2.5rem;
    }
    .section-title h2 {
      font-size: 2.2rem;
      font-family: 'Fredoka', sans-serif;
      margin-bottom: 0.5rem;
    }
    .filters {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
      margin-bottom: 2rem;
    }
    .filter-btn {
      padding: 0.4rem 0.9rem;
      border-radius: 9999px;
      background: #202026;
      border: 1px solid #33333f;
      color: #d1d5db;
      font-size: 0.8rem;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .filter-btn.active {
      background: var(--accent);
      color: #000;
      font-weight: 700;
      border-color: var(--accent);
    }
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 1.25rem;
    }
    .photo-card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 1rem;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.25s ease, border-color 0.25s ease;
      display: flex;
      flex-direction: column;
    }
    .photo-card:hover {
      transform: translateY(-4px);
      border-color: var(--accent);
    }
    .photo-img {
      width: 100%;
      height: 220px;
      object-fit: cover;
      display: block;
      background: #000;
    }
    .photo-meta {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      justify-content: space-between;
    }
    .photo-title {
      font-family: 'Fredoka', sans-serif;
      font-size: 1.05rem;
      margin-bottom: 0.4rem;
      color: #fff;
    }
    .photo-caption {
      font-size: 0.8rem;
      color: #a1a1aa;
      line-height: 1.4;
      margin-bottom: 0.75rem;
    }
    .photo-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.75rem;
      color: #71717a;
      border-top: 1px solid #27272a;
      padding-top: 0.5rem;
    }
    /* Lightbox */
    .lightbox {
      display: none;
      position: fixed;
      inset: 0;
      z-index: 100;
      background: rgba(0, 0, 0, 0.92);
      backdrop-filter: blur(8px);
      padding: 1rem;
      align-items: center;
      justify-content: center;
    }
    .lightbox.active {
      display: flex;
    }
    .lightbox-modal {
      background: #18181b;
      border: 1px solid #27272a;
      border-radius: 1rem;
      max-width: 900px;
      width: 100%;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
    }
    @media(min-width: 768px) {
      .lightbox-modal {
        flex-direction: row;
      }
    }
    .lightbox-img-wrap {
      flex: 1;
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      min-height: 280px;
    }
    .lightbox-img {
      max-width: 100%;
      max-height: 65vh;
      object-fit: contain;
    }
    .lightbox-info {
      width: 100%;
      max-width: 340px;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: #141417;
    }
    .lightbox-close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: rgba(0, 0, 0, 0.6);
      color: #fff;
      border: 1px solid #3f3f46;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      cursor: pointer;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    }
    .nav-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(24, 24, 27, 0.8);
      border: 1px solid #3f3f46;
      color: #fff;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
    }
    .nav-prev { left: 1rem; }
    .nav-next { right: 1rem; }
    /* Tribute Story */
    .tribute-section {
      padding: 5rem 0;
      background: rgba(0, 0, 0, 0.4);
      border-top: 1px solid var(--card-border);
      border-bottom: 1px solid var(--card-border);
    }
    .story-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    @media(min-width: 900px) {
      .story-grid {
        grid-template-columns: 1.5fr 1fr;
      }
    }
    .letter-card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 1.25rem;
      padding: 2rem;
      font-size: 1rem;
      line-height: 1.8;
      color: #d1d5db;
    }
    .letter-card p {
      margin-bottom: 1.2rem;
    }
    .quote-box {
      background: rgba(245, 158, 11, 0.1);
      border-left: 4px solid var(--gold);
      padding: 1rem;
      border-radius: 0.5rem;
      margin: 1.5rem 0;
      color: #fef3c7;
      font-style: italic;
    }
    /* Formula Card */
    .formula-card {
      background: #18181b;
      border: 1px solid var(--card-border);
      border-radius: 1.25rem;
      padding: 1.5rem;
    }
    .stat-row {
      margin-bottom: 1rem;
    }
    .stat-bar {
      height: 8px;
      background: #27272a;
      border-radius: 9999px;
      overflow: hidden;
      margin-top: 0.25rem;
    }
    .stat-fill {
      height: 100%;
      border-radius: 9999px;
    }
    .post-it {
      background: #fef3c7;
      color: #451a03;
      padding: 1.5rem;
      border-radius: 1rem;
      transform: rotate(-1.5deg);
      box-shadow: 0 10px 20px rgba(0,0,0,0.3);
      margin-top: 1.5rem;
    }
    /* Facts */
    .facts-section {
      padding: 4rem 0;
      text-align: center;
    }
    .fact-card {
      max-width: 640px;
      margin: 0 auto;
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 1.5rem;
      padding: 2.5rem 1.5rem;
      box-shadow: 0 15px 30px rgba(0,0,0,0.4);
    }
    /* Footer */
    footer {
      text-align: center;
      padding: 3rem 0;
      border-top: 1px solid var(--card-border);
      color: var(--text-muted);
      font-size: 0.85rem;
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav>
    <div class="container nav-inner">
      <div class="brand">
        <span>🐼</span>
        <span>Panda's Birthday Gallery</span>
      </div>
      <div>
        <button class="btn btn-primary" onclick="launchConfetti()">
          ✨ Celebrate!
        </button>
      </div>
    </div>
  </nav>

  <!-- Hero -->
  <header class="hero">
    <div class="container">
      <div class="badge">🎋 Dedicated to Our Eldest Sister & Supreme Panda 🐼</div>
      <h1 class="font-display">Happy Birthday, <span style="color: #10b981;">Panda!</span> 🎂</h1>
      <p>
        The oldest in our squad, the mastermind of smart-working shortcuts, the reigning hot pot champion,
        and the only person allowed to wake me up with a 00:00 AM random nostalgia call.
      </p>

      <!-- Live Countdown Card -->
      <div class="timer-card">
        <div style="font-size: 0.85rem; font-weight: 600; color: #a1a1aa; margin-bottom: 0.5rem;">
          ⏰ Birthday Countdown
        </div>
        <div class="timer-grid">
          <div class="timer-box">
            <span class="timer-digit" id="days">14</span>
            <span class="timer-label">Days</span>
          </div>
          <div class="timer-box">
            <span class="timer-digit" id="hours">08</span>
            <span class="timer-label">Hours</span>
          </div>
          <div class="timer-box">
            <span class="timer-digit" id="minutes">42</span>
            <span class="timer-label">Mins</span>
          </div>
          <div class="timer-box">
            <span class="timer-digit" id="seconds" style="color: #f59e0b;">19</span>
            <span class="timer-label">Secs</span>
          </div>
        </div>
      </div>

      <div style="display: flex; justify-content: center; gap: 0.75rem; flex-wrap: wrap;">
        <a href="#gallery" class="btn btn-primary">Browse 20 Memories 📸</a>
        <a href="#story" class="btn btn-secondary">Read The Tribute 💌</a>
      </div>
    </div>
  </header>

  <!-- Gallery (20 Photos) -->
  <section id="gallery" class="gallery-section">
    <div class="container">
      <div class="section-title">
        <span class="badge">📸 The 20 Archives</span>
        <h2>20 Unforgettable Panda Moments</h2>
        <p style="color: var(--text-muted);">From hot-pot food comas to midnight nostalgia calls and big-sister wisdom.</p>
      </div>

      <!-- Filters -->
      <div class="filters" id="filter-container">
        <button class="filter-btn active" onclick="filterGallery('all')">All 20 Photos</button>
        <button class="filter-btn" onclick="filterGallery('sister')">Sister Instincts 🛡️</button>
        <button class="filter-btn" onclick="filterGallery('midnight')">Midnight Calls 🌙</button>
        <button class="filter-btn" onclick="filterGallery('food_sleep')">Food & Sleep 🎋</button>
        <button class="filter-btn" onclick="filterGallery('chaos')">Pure Chaos ⚡</button>
        <button class="filter-btn" onclick="filterGallery('milestone')">Milestones 🌸</button>
      </div>

      <!-- Grid -->
      <div class="gallery-grid" id="gallery-grid"></div>
    </div>
  </section>

  <!-- Tribute Story -->
  <section id="story" class="tribute-section">
    <div class="container">
      <div class="section-title">
        <span class="badge">💌 From The Heart</span>
        <h2>Why She Is Our "Panda" (And My Big Sister)</h2>
      </div>

      <div class="story-grid">
        <div class="letter-card">
          <h3 class="font-display" style="font-size: 1.4rem; color: #fff; margin-bottom: 1rem;">
            To My Favorite Elder Sister,
          </h3>
          <p>
            In every friend group, there is someone who inadvertently becomes the anchor. But in our group,
            you didn't just become our anchor—you became our <strong>Panda</strong>.
          </p>
          <p>
            You embody the spirit of a panda in the most endearing way imaginable: you possess an Olympic-level
            dedication to eating and sleeping, yet whenever someone we care about is hurting, you move with ferocious
            speed to protect them. As the oldest of us, you naturally slipped into the role of my big sister. You make
            sure everyone eats, you check that we got home safely, and you never let anyone walk all over us.
          </p>
          <div class="quote-box">
            “Why work hard for 8 hours when you can finish the whole task in 35 minutes with pure brainpower and sleep for the rest of the day?”
          </div>
          <p>
            Your <strong>smart-working philosophy</strong> is legendary. While the rest of us panic and overcomplicate things,
            you casually stroll in with an iced latte, identify the 2 critical shortcuts that eliminate 90% of the effort,
            and solve the crisis before lunchtime.
          </p>
          <p>
            And then there are the <strong>midnight phone calls</strong>. At 00:23 AM, my phone will suddenly light up with your name.
            Not because of an emergency, but simply because you were scrolling through old photo albums, saw a snapshot of us from
            years ago, and called just to laugh loudly and say, <em>“I missed your goofy face, okay go back to sleep!”</em>
          </p>
          <p style="color: #fff; font-weight: 600;">
            Thank you for being loud, chaotic, ridiculously smart, and endlessly loving. Happy Birthday, big sis.
          </p>
        </div>

        <div>
          <div class="formula-card">
            <h4 class="font-display" style="color: #fff; margin-bottom: 1rem; font-size: 1.2rem;">The Official Panda Formula</h4>
            <div class="stat-row">
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 600;">
                <span>🎋 Food & Bamboo Hibernation</span>
                <span style="color: #10b981;">40%</span>
              </div>
              <div class="stat-bar"><div class="stat-fill" style="width: 40%; background: #10b981;"></div></div>
            </div>
            <div class="stat-row">
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 600;">
                <span>⚡ Smart-Working Clever Hacks</span>
                <span style="color: #f59e0b;">35%</span>
              </div>
              <div class="stat-bar"><div class="stat-fill" style="width: 35%; background: #f59e0b;"></div></div>
            </div>
            <div class="stat-row">
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 600;">
                <span>🌙 Midnight Nostalgia Rings</span>
                <span style="color: #f43f5e;">15%</span>
              </div>
              <div class="stat-bar"><div class="stat-fill" style="width: 15%; background: #f43f5e;"></div></div>
            </div>
            <div class="stat-row">
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 600;">
                <span>🛡️ Big Sister Shield & Care</span>
                <span style="color: #38bdf8;">10%</span>
              </div>
              <div class="stat-bar"><div class="stat-fill" style="width: 10%; background: #38bdf8;"></div></div>
            </div>
          </div>

          <div class="post-it">
            <div style="font-weight: bold; font-size: 0.85rem; text-transform: uppercase; margin-bottom: 0.5rem;">📌 Elder Sister Golden Rule</div>
            <div class="font-handwriting" style="font-size: 1.7rem; font-weight: 700; line-height: 1.2;">
              “Whenever life gets chaotic, remember: I am older than you, I have seen it all, and nobody gets to make you sad while I’m around.”
            </div>
            <div style="text-align: right; font-weight: bold; font-size: 0.8rem; margin-top: 0.5rem;">— Big Sis Panda 🐼</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Interactive Panda Fact Generator -->
  <section class="facts-section" id="facts">
    <div class="container">
      <div class="section-title">
        <span class="badge">🎲 Interactive Inside Jokes</span>
        <h2>The Panda Fact Generator</h2>
        <p style="color: var(--text-muted);">Roll the dice to reveal an indisputable truth about her high-energy persona.</p>
      </div>

      <div class="fact-card">
        <div style="font-size: 0.8rem; color: #10b981; font-weight: bold; margin-bottom: 0.5rem;" id="fact-badge">BIOLOGY 🎋</div>
        <h3 class="font-display" id="fact-title" style="color: #fff; font-size: 1.5rem; margin-bottom: 1rem;">The Panda Hibernation Law</h3>
        <blockquote class="font-handwriting" id="fact-quote" style="font-size: 2.2rem; color: #6ee7b7; line-height: 1.3; margin-bottom: 1.2rem;">
          “Can sleep for 14 hours straight, wake up complaining that her bones hurt from resting, and then immediately order iced coffee.”
        </blockquote>
        <p id="fact-context" style="font-size: 0.85rem; color: #9ca3af; background: #141417; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 1.5rem;">
          Scientific Classification: Ailuropoda Chaoticus.
        </p>
        <button class="btn btn-primary" onclick="rollNewFact()">
          🎲 Roll Another Panda Fact!
        </button>
      </div>
    </div>
  </section>

  <!-- Lightbox Modal -->
  <div class="lightbox" id="lightbox" onclick="closeLightbox(event)">
    <button class="lightbox-close" onclick="closeLightboxDirect()">✕</button>
    <button class="nav-arrow nav-prev" onclick="navLightbox(-1)">‹</button>
    <button class="nav-arrow nav-next" onclick="navLightbox(1)">›</button>
    <div class="lightbox-modal" onclick="event.stopPropagation()">
      <div class="lightbox-img-wrap">
        <img src="" alt="" id="lb-img" class="lightbox-img">
      </div>
      <div class="lightbox-info">
        <div>
          <span class="badge" id="lb-badge" style="margin-bottom: 0.5rem;">#1 Memory</span>
          <h3 class="font-display" id="lb-title" style="color: #fff; font-size: 1.4rem; margin-bottom: 0.75rem;">Title</h3>
          <p class="font-handwriting" id="lb-caption" style="font-size: 1.5rem; color: #e4e4e7; line-height: 1.4; margin-bottom: 1rem;">“Caption”</p>
        </div>
        <div style="font-size: 0.8rem; color: #a1a1aa; border-top: 1px solid #27272a; padding-top: 0.75rem;" id="lb-date">
          Date
        </div>
      </div>
    </div>
  </div>

  <footer>
    <div class="container">
      <p>Crafted with endless love for Panda's Birthday 🐼🎂</p>
      <p style="margin-top: 0.25rem; font-size: 0.75rem;">May your year be filled with glorious naps, smart shortcuts, and zero bad days.</p>
    </div>
  </footer>

  <script>
    const photos = ${photosJson};
    const facts = ${factsJson};
    let currentPhotoIdx = 0;
    let currentFactIdx = 0;

    // Render Gallery
    function renderGallery(filter = 'all') {
      const grid = document.getElementById('gallery-grid');
      grid.innerHTML = '';
      const list = filter === 'all' ? photos : photos.filter(p => p.category === filter);

      list.forEach((p) => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.onclick = () => openLightbox(p.id);
        card.innerHTML = \`
          <img src="\${p.url}" alt="\${p.alt}" class="photo-img" loading="lazy">
          <div class="photo-meta">
            <div>
              <div class="photo-title">#\${p.id} \${p.title}</div>
              <div class="photo-caption">\${p.caption}</div>
            </div>
            <div class="photo-footer">
              <span>\${p.date}</span>
              <span style="color: #f59e0b;">\${p.vibe}</span>
            </div>
          </div>
        \`;
        grid.appendChild(card);
      });
    }

    function filterGallery(category) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      event.target.classList.add('active');
      renderGallery(category);
    }

    // Lightbox logic
    function openLightbox(id) {
      currentPhotoIdx = photos.findIndex(p => p.id === id);
      updateLightbox();
      document.getElementById('lightbox').classList.add('active');
    }
    function closeLightbox(e) {
      if (e.target.id === 'lightbox') closeLightboxDirect();
    }
    function closeLightboxDirect() {
      document.getElementById('lightbox').classList.remove('active');
    }
    function navLightbox(direction) {
      currentPhotoIdx = (currentPhotoIdx + direction + photos.length) % photos.length;
      updateLightbox();
    }
    function updateLightbox() {
      const p = photos[currentPhotoIdx];
      document.getElementById('lb-img').src = p.url;
      document.getElementById('lb-img').alt = p.alt;
      document.getElementById('lb-badge').innerText = '#' + p.id + ' • ' + (p.vibe || 'Panda Memory');
      document.getElementById('lb-title').innerText = p.title;
      document.getElementById('lb-caption').innerText = '“' + p.caption + '”';
      document.getElementById('lb-date').innerText = p.date + (p.location ? ' • ' + p.location : '');
    }

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      if (!document.getElementById('lightbox').classList.contains('active')) return;
      if (e.key === 'Escape') closeLightboxDirect();
      if (e.key === 'ArrowLeft') navLightbox(-1);
      if (e.key === 'ArrowRight') navLightbox(1);
    });

    // Fact generator
    function rollNewFact() {
      launchConfetti();
      currentFactIdx = Math.floor(Math.random() * facts.length);
      const f = facts[currentFactIdx];
      document.getElementById('fact-badge').innerText = f.badge;
      document.getElementById('fact-title').innerText = f.title;
      document.getElementById('fact-quote').innerText = '“' + f.quote + '”';
      document.getElementById('fact-context').innerHTML = '<strong>Field Note:</strong> ' + f.context;
    }

    // Confetti
    function launchConfetti() {
      if (window.confetti) {
        window.confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#10b981', '#f59e0b', '#f43f5e', '#38bdf8']
        });
      }
    }

    // Live countdown timer
    function startTimer() {
      const now = new Date();
      const target = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 14, 0, 0, 0);
      function tick() {
        const current = new Date();
        let diff = target - current;
        if (diff < 0) diff = 0;
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);
        document.getElementById('days').innerText = String(d).padStart(2, '0');
        document.getElementById('hours').innerText = String(h).padStart(2, '0');
        document.getElementById('minutes').innerText = String(m).padStart(2, '0');
        document.getElementById('seconds').innerText = String(s).padStart(2, '0');
      }
      tick();
      setInterval(tick, 1000);
    }

    // Initialize
    window.addEventListener('DOMContentLoaded', () => {
      renderGallery('all');
      startTimer();
    });
  </script>
</body>
</html>`;
}
