# News Pulse Pro - Modern News Reader App
## Overview

News Pulse Pro is a modern, feature-rich news reader application that delivers the latest headlines with a clean, intuitive interface. Built with HTML, CSS, and JavaScript, this app provides:

- 📰 Latest news from multiple sources
- 🌓 Dark/light theme toggle
- 🔊 Text-to-speech functionality
- 🌍 Multi-language translation
- 📲 QR code generation for sharing
- 🔖 Bookmarking capabilities
- 📱 Fully responsive design

## Features

### Core Features
- **Real-time News**: Fetches current headlines from NewsAPI
- **Category Filtering**: Browse news by category (Business, Technology, Sports, etc.)
- **Text-to-Speech**: Have articles read aloud in multiple languages
- **Translation**: Translate articles to various languages
- **QR Codes**: Generate shareable QR codes for any article
- **Bookmarks**: Save your favorite articles for later

### Technical Features
- **Responsive Design**: Works on all device sizes
- **Dark Mode**: Eye-friendly dark theme option
- **Local Storage**: Saves preferences and bookmarks
- **Modern UI**: Clean, card-based interface with smooth animations

## Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/news-pulse-pro.git
   ```

2. Navigate to the project directory:
   ```bash
   cd news-pulse-pro
   ```

3. Open `index.html` in your browser:
   ```bash
   open index.html  # On macOS
   # or
   start index.html # On Windows
   ```

## Configuration

To use the NewsAPI functionality:

1. Get a free API key from [NewsAPI.org](https://newsapi.org/)
2. Replace the API key in `script.js`:
   ```javascript
   const API_KEY = 'your-api-key-here';
   ```

## Usage

1. **Browse News**: Scroll through the latest headlines
2. **Filter**: Click category buttons to filter by topic
3. **Listen**: Click the 🔊 button to hear articles read aloud
4. **Translate**: Select a language from the dropdown
5. **Bookmark**: Click the ♡ button to save articles
6. **Share**: Generate QR codes or use native sharing

## Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- JavaScript (ES6+)
- NewsAPI
- Web Speech API
- QRCode.js

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

