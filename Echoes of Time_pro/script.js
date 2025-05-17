document.addEventListener("DOMContentLoaded", () => {
    const realTimeSection = document.getElementById('real-time-news');
  
    const realTimeEvents = [
      {
        title: "Solar Eclipse Witnessed",
        content: "April 8, 2025 – A total solar eclipse mesmerized sky-watchers across North America."
      },
      {
        title: "Historic Peace Treaty Signed",
        content: "April 5, 2025 – Long-standing conflict sees resolution with global praise."
      }
    ];
  
    realTimeEvents.forEach(event => {
      const card = document.createElement('div');
      card.className = 'event-card';
      card.innerHTML = `<h3>${event.title}</h3><p>${event.content}</p>`;
      realTimeSection.appendChild(card);
    });
  });
  