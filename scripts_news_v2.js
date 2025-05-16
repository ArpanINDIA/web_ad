 const newsElement = document.getElementById('news');
    const categoryElement = document.getElementById('category');
    const langSelect = document.getElementById('langSelect');

    let headlines = [];
    let currentIndex = 0;
    let originalText = '';
    let currentLang = 'en';

    async function fetchNews() {
      const category = categoryElement.value;
      currentLang = langSelect.value;
      const apiKey = 'your api key here'; // Replace with your actual API key
      let url = `https://api.currentsapi.services/v1/latest-news?apiKey=${apiKey}`;
      if (category) url += `&category=${category}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        headlines = data.news.map(article => article.title);
        currentIndex = 0;

        if (headlines.length === 0) {
          animateFadeIn('No news found for this category.');
          return;
        }

        originalText = headlines[currentIndex];
        animateFadeIn(originalText);
      } catch (error) {
        animateFadeIn('Offline or failed to load news. Please check your API key.');
      }
    }

    function nextHeadline() {
      if (headlines.length === 0) return;
      currentIndex = (currentIndex + 1) % headlines.length;
      originalText = headlines[currentIndex];
      animateFadeIn(originalText);
    }

    function translateCurrent() {
      const lang = langSelect.value;
      if (lang === 'en') {
        animateFadeIn(originalText);
      } else {
        translateText(originalText, lang);
      }
    }

    async function translateText(text, targetLang) {
      if (targetLang === 'en') {
        animateFadeIn(text);
        return;
      }

      try {
        const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`);
        const data = await res.json();
        const translated = data[0][0][0];
        animateFadeIn(translated);
      } catch (err) {
        animateFadeIn(text + ' (Translation failed)');
      }
    }

    function animateFadeIn(content) {
      newsElement.innerText = content;
      newsElement.style.animation = 'none';
      void newsElement.offsetWidth;
      newsElement.style.animation = 'fadeIn 1s forwards';
    }

    function toggleTheme() {
      const theme = document.body.getAttribute('data-theme');
      document.body.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
    }

    function startVoiceInput() {
      if (!('webkitSpeechRecognition' in window)) {
        alert('Voice input not supported in this browser.');
        return;
      }
      const recognition = new webkitSpeechRecognition();
      recognition.lang = 'en-US';
      recognition.onresult = function(event) {
        const result = event.results[0][0].transcript.toLowerCase();
        const options = [...categoryElement.options];
        const match = options.find(opt => result.includes(opt.value));
        if (match) {
          categoryElement.value = match.value;
          fetchNews();
        } else {
          alert('No matching category found: ' + result);
        }
      };
      recognition.start();
    }

    document.body.setAttribute('data-theme', 'light');
    fetchNews();

    if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
      const swCode = `
        const CACHE_NAME = 'auto-news-cache-v1';
        const urlsToCache = [
          location.href,
          location.origin + location.pathname
        ];

        self.addEventListener('install', event => {
          event.waitUntil(
            caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
          );
        });

        self.addEventListener('fetch', event => {
          event.respondWith(
            caches.match(event.request).then(response => response || fetch(event.request))
          );
        });
      `;
      const blob = new Blob([swCode], { type: 'application/javascript' });
      const swUrl = URL.createObjectURL(blob);
      navigator.serviceWorker.register(swUrl).then(() => {
        console.log('Inline Service Worker registered');
      }).catch(err => {
        console.error('Service Worker registration failed:', err);
      });
    } else {
      console.warn('Service Worker not registered: must be HTTPS or localhost');
    }