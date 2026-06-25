
  // Thumbnail fallback on load error
  document.querySelectorAll('.card-thumb').forEach(img => {
    img.onerror = function() {
      this.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)';
      this.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="600" height="400" fill="%231a1a2e"/><text x="50%25" y="50%25" font-family="sans-serif" font-size="40" fill="%23333" text-anchor="middle" dy=".3em">▶</text></svg>';
    };
  });

  // Filter logic
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.video-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      cards.forEach(card => {
        if (filter === 'all' || card.dataset.cat === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Lightbox logic
  const lightbox = document.getElementById('lightbox');
  const lightboxVideo = document.getElementById('lightboxVideo');
  const lightboxCat = document.getElementById('lightboxCat');
  const lightboxTitle = document.getElementById('lightboxTitle');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const videoUrl = card.dataset.video + '?autoplay=1';
      lightboxVideo.src = videoUrl;
      lightboxCat.textContent = card.dataset.cat.replace('-', ' ').toUpperCase();
      lightboxTitle.textContent = card.dataset.title;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightboxVideo.src = '';
    document.body.style.overflow = '';
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));
