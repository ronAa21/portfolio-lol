# League of Legends-Inspired Video Editing Portfolio

A highly immersive, interactive portfolio website inspired by the League of Legends PC client interface. This portfolio transforms the classic LoL experience into a professional video editor's showcase.

## 🎮 Features

- **Authentic LoL Client Design**: Faithful recreation of the League of Legends interface
- **Interactive Matchmaking Flow**: Click PLAY → Search → Match Found → Champion Select
- **Project Categorization**: Browse projects by role (Long-form, Creative, Cinematic, Short-form, Motion Graphics)
- **Video Portfolio Showcase**: Display your video editing work in champion selection cards
- **Software Projects Tab**: Option to showcase software development projects
- **Friends List / Social Panel**: Contact links disguised as LoL friends list
- **Contact Modal**: League-styled contact form for client inquiries
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Smooth Animations**: Premium animations and transitions throughout

## 🚀 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Navigation
- **Framer Motion** - Advanced animations (optional)
- **CSS3** - Custom styling with League of Legends color palette

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ronAa21/portfolio-lol.git
   cd portfolio-lol
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### 1. Update Your Projects

Edit `src/data/projectsData.js` to add your actual video projects:

```javascript
{
  id: 1,
  title: "Your Project Title",
  category: "mid", // top, jungle, mid, bot, support
  thumbnail: "path/to/thumbnail.jpg",
  videoUrl: "https://youtube.com/embed/YOUR_VIDEO_ID",
  description: "Project description...",
  software: ["Premiere Pro", "After Effects"],
  techniques: ["Color Grading", "Motion Graphics"],
  duration: "3:45",
  role: "Lead Editor",
  client: "Client Name",
  featured: true
}
```

### 2. Update Personal Information

**Profile Info** - Edit `src/components/MainProfile.jsx`:
- Summoner name (your name/brand)
- Tagline
- Bio
- Status

**Contact Links** - Edit `src/components/FriendsList.jsx`:
- Update email, LinkedIn, YouTube, Discord links
- Modify the `friendsData` array

**Software & Skills** - Edit:
- `src/components/SoftwareTools.jsx` - Your editing software
- `src/components/TechStacks.jsx` - Your creative skills

### 3. Color Customization

All colors are defined in `src/index.css` as CSS variables:

```css
:root {
  --deep-navy: #010A13;
  --hextech-gold: #C8AA6E;
  --hextech-blue: #0397AB;
  /* ... modify as needed */
}
```

### 4. Add Your Logo/Branding

Update the logo in `src/components/TopNavigation.jsx` and add your favicon to `index.html`.

## 📂 Project Structure

```
portfolio-lol/
├── src/
│   ├── components/
│   │   ├── ContactModal.jsx/css
│   │   ├── FriendsList.jsx/css
│   │   ├── MainProfile.jsx/css
│   │   ├── MatchFoundScreen.jsx/css
│   │   ├── MatchmakingScreen.jsx/css
│   │   ├── PlayButton.jsx/css
│   │   ├── PostGameScreen.jsx/css
│   │   ├── ProjectCard.jsx/css
│   │   ├── SoftwareTools.jsx/css
│   │   ├── TechStacks.jsx/css
│   │   └── TopNavigation.jsx/css
│   ├── data/
│   │   └── projectsData.js
│   ├── pages/
│   │   ├── ChampionSelect.jsx/css
│   │   ├── HomePage.jsx/css
│   │   └── ProjectDetails.jsx/css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Categories Explained

Projects are organized into 5 roles matching League of Legends positions:

- **TOP** - Long-form editing (YouTube, documentaries)
- **JUNGLE** - Creative projects (experimental, artistic)
- **MID** - Cinematic editing (montages, trailers)
- **BOT** - Short-form content (TikTok, Reels, ads)
- **SUPPORT** - Motion graphics (animations, VFX)

## 🔧 Configuration

### Skip Matchmaking Animation

Users can check "Skip matchmaking animation" on the homepage to go directly to champion select.

### Contact Form Integration

To make the contact form functional, integrate with:
- **EmailJS** - Client-side email service
- **Formspree** - Form backend
- **Netlify Forms** - If hosting on Netlify
- **Custom backend** - Your own API endpoint

Update the form submission logic in `src/components/ContactModal.jsx`.

## 🌐 Deployment

### Deploy to Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy to Vercel

1. Push code to GitHub
2. Import project to Vercel
3. Framework preset: Vite
4. Deploy

### Deploy to GitHub Pages

```bash
npm run build
# Deploy the dist folder
```

## 📱 Responsive Breakpoints

- **Desktop**: 1920px and above (optimal)
- **Laptop**: 1024px - 1920px
- **Tablet**: 768px - 1024px
- **Mobile**: Below 768px

## 🎨 Typography

The project uses:
- **Cinzel** - Headings (fantasy-inspired)
- **Inter** - Body text and UI
- **Spectral** - Alternative for editorial text

Loaded from Google Fonts in `index.html`.

## 📄 License

This project is open source. Feel free to use it for your own portfolio, but please:
- Remove all placeholder content
- Add your own projects and information
- Give credit if you keep the core design

## 🤝 Credits

- **Design Inspiration**: Riot Games - League of Legends Client
- **Concept**: Video editing portfolio disguised as LoL client
- **Implementation**: Custom React application

## 📧 Support

For questions or issues, open a GitHub issue or contact through the portfolio's contact form.

---

**Note**: This is a portfolio template. Replace all placeholder content with your actual work, update contact information, and customize the design to match your personal brand while maintaining the League of Legends aesthetic.

## 🎮 User Journey

1. **Homepage** - View profile, software tools, and click PLAY
2. **Matchmaking** - Brief loading animation
3. **Match Found** - Accept to continue
4. **Champion Select** - Browse and select projects by category
5. **Project Details** - Watch videos and learn about projects
6. **Victory Screen** - Explore more or return home

Enjoy building your League-inspired portfolio! 🏆
