# 🎨 Customization Guide

This guide will help you personalize your League of Legends-inspired portfolio with your own content.

## 📋 Quick Start Checklist

- [ ] Update personal information
- [ ] Add your projects
- [ ] Update contact links
- [ ] Customize software tools
- [ ] Add your resume
- [ ] Update colors (optional)
- [ ] Add logo/favicon
- [ ] Test responsiveness
- [ ] Deploy to hosting

---

## 1️⃣ Update Personal Information

### MainProfile Component

**File**: `src/components/MainProfile.jsx`

Replace these sections:

```jsx
<h2 className="summoner-name">VIDEO EDITOR</h2>
<p className="tagline">Creative Storyteller & Visual Artist</p>
<p className="bio">
  Your bio here...
</p>
```

**What to update:**
- Summoner name: Your name or brand
- Tagline: Your professional tagline
- Bio: Short introduction (2-3 sentences)
- Status: "Available for Hire" or your current status

---

## 2️⃣ Add Your Video Projects

**File**: `src/data/projectsData.js`

Replace the placeholder projects with your actual work:

```javascript
{
  id: 1,
  title: "Your Amazing Project",
  category: "mid", // Choose: top, jungle, mid, bot, support
  thumbnail: "https://your-image-url.com/thumbnail.jpg",
  videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
  description: "Detailed project description...",
  software: ["Adobe Premiere Pro", "After Effects"],
  techniques: ["Color Grading", "Motion Graphics", "Sound Design"],
  duration: "3:45",
  role: "Lead Editor",
  client: "Client Name",
  featured: true // Set to true for featured projects
}
```

### Category Guide:

- **"top"** - Long-form content (YouTube videos, documentaries)
- **"jungle"** - Creative/experimental projects
- **"mid"** - Cinematic editing (montages, trailers)
- **"bot"** - Short-form (TikTok, Reels, ads)
- **"support"** - Motion graphics and VFX

### How to Get YouTube Embed URL:

1. Go to your YouTube video
2. Click "Share" → "Embed"
3. Copy the URL from `src="..."` in the iframe code
4. Format: `https://www.youtube.com/embed/VIDEO_ID`

---

## 3️⃣ Update Contact Information

### Friends List / Social Links

**File**: `src/components/FriendsList.jsx`

Update the `friendsData` array with your actual links:

```javascript
const friendsData = [
  { 
    name: 'Email', 
    status: 'Online', 
    icon: '✉️',
    link: 'mailto:your.email@example.com', // Your email
    type: 'email'
  },
  { 
    name: 'LinkedIn', 
    status: 'Online', 
    icon: '💼',
    link: 'https://linkedin.com/in/yourprofile', // Your LinkedIn
    type: 'external'
  },
  { 
    name: 'YouTube', 
    status: 'Online', 
    icon: '📺',
    link: 'https://youtube.com/@yourchannel', // Your channel
    type: 'external'
  },
  // Add more platforms...
];
```

### Contact Form Email Setup

**File**: `src/components/ContactModal.jsx`

To make the contact form actually send emails, integrate with EmailJS:

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Install EmailJS: `npm install @emailjs/browser`
3. Update the `handleSubmit` function:

```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  ).then(() => {
    alert('Thank you! I will get back to you soon.');
    onClose();
  }).catch(() => {
    alert('Failed to send. Please try again.');
  });
};
```

---

## 4️⃣ Update Software & Skills

### Software Tools

**File**: `src/components/SoftwareTools.jsx`

Update the `softwareData` array:

```javascript
const softwareData = [
  { name: 'Adobe Premiere Pro', proficiency: 95, icon: 'Pr' },
  { name: 'Adobe After Effects', proficiency: 90, icon: 'Ae' },
  // Add your actual software...
];
```

**Icon abbreviations:** Use 2-3 letter codes for software icons

### Tech Stacks / Skills

**File**: `src/components/TechStacks.jsx`

Update the `techData` array with your skills:

```javascript
const techData = [
  'Video Editing',
  'Color Grading',
  'Motion Graphics',
  // Add your skills...
];
```

---

## 5️⃣ Add Software Projects (Optional)

If you also do web development or software projects:

**File**: `src/data/projectsData.js`

Update the `softwareProjects` array:

```javascript
export const softwareProjects = [
  {
    id: 101,
    title: "Portfolio Website",
    category: "web",
    thumbnail: "thumbnail-url.jpg",
    description: "Project description...",
    technologies: ["React", "CSS", "Framer Motion"],
    liveUrl: "https://your-site.com",
    githubUrl: "https://github.com/username/repo",
    featured: true
  },
];
```

---

## 6️⃣ Add Your Resume

**File**: `src/components/PostGameScreen.jsx`

Update the download resume function:

```javascript
const handleDownloadResume = () => {
  window.open('/path/to/your-resume.pdf', '_blank');
};
```

**Steps:**
1. Add your resume PDF to the `public` folder
2. Update the path: `window.open('/resume.pdf', '_blank');`

---

## 7️⃣ Customize Colors (Optional)

**File**: `src/index.css`

Modify the CSS variables to match your brand:

```css
:root {
  /* Primary Colors */
  --deep-navy: #010A13;
  --dark-navy-blue: #091428;
  --interface-blue: #0A323C;
  --hextech-blue: #0397AB;
  
  /* Accent Colors */
  --hextech-gold: #C8AA6E; /* Change to your accent color */
  --light-gold: #F0E6D2;
  --muted-gold: #785A28;
  
  /* ... */
}
```

---

## 8️⃣ Add Logo & Favicon

### Logo

**File**: `src/components/TopNavigation.jsx`

Replace the logo section:

```jsx
<div className="logo">
  <img src="/your-logo.png" alt="Logo" className="logo-icon" />
  <span className="logo-text">YOUR BRAND</span>
</div>
```

### Favicon

**File**: `index.html`

Update the favicon link:

```html
<link rel="icon" type="image/png" href="/your-favicon.png" />
```

Add your favicon file to the `public` folder.

---

## 9️⃣ Image Assets

### Recommended Image Sizes:

- **Project Thumbnails**: 300x200px (3:2 ratio)
- **Profile Avatar**: 100x100px (square)
- **Logo**: 36x36px or scalable SVG
- **Favicon**: 32x32px or 64x64px

### Image Hosting Options:

1. **Local** - Add to `public` folder
2. **Imgur** - Free image hosting
3. **Cloudinary** - Professional image CDN
4. **Direct video thumbnails** - YouTube auto-generates them

---

## 🔟 Testing Checklist

Before deploying, test:

- [ ] All navigation works
- [ ] Videos play correctly
- [ ] Contact form submits (if integrated)
- [ ] All external links open correctly
- [ ] Responsive on mobile/tablet
- [ ] No console errors
- [ ] Images load properly
- [ ] Search functionality works
- [ ] Category filters work

---

## 🚀 Quick Deploy Commands

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

---

## 📱 Responsive Testing

Test your portfolio on these screen sizes:

- **Desktop**: 1920x1080
- **Laptop**: 1366x768
- **Tablet**: 768x1024
- **Mobile**: 375x667

Use Chrome DevTools → Toggle Device Toolbar (Ctrl+Shift+M)

---

## 💡 Tips & Best Practices

### Project Thumbnails
- Use high-quality images
- Keep consistent aspect ratio
- Add text overlays for clarity
- Use compelling visuals

### Video Descriptions
- Keep descriptions concise (2-3 sentences)
- Highlight your specific role
- Mention key techniques used
- Include client/context when relevant

### Featured Projects
- Mark your 3-5 best projects as featured
- These will have the ⭐ badge
- Put your most impressive work first

### Categories
- Distribute projects across categories
- Don't leave categories empty
- Use "All" to show everything

### Performance
- Optimize images (use WebP if possible)
- Keep video embeds, don't upload huge files
- Test load times regularly

---

## 🆘 Common Issues

### "Projects not showing"
- Check `projectsData.js` syntax
- Verify all fields are filled
- Check browser console for errors

### "Videos not playing"
- Use embed URLs, not regular YouTube links
- Check video privacy settings
- Ensure proper iframe format

### "Contact form not working"
- Integrate with EmailJS or Formspree
- Check email service configuration
- Test form submission in console

### "Images not loading"
- Verify image URLs are accessible
- Check public folder structure
- Use full URLs for external images

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [EmailJS Setup](https://www.emailjs.com/docs/)
- [Netlify Deployment](https://docs.netlify.com)
- [Google Fonts](https://fonts.google.com)

---

## 🎨 Design Philosophy

This portfolio balances three priorities:

1. **Authenticity** - True to LoL client design
2. **Professionalism** - Showcases work effectively
3. **Usability** - Easy for recruiters to navigate

Keep this balance as you customize!

---

**Need help?** Open an issue on GitHub or reach out through the contact form.

Good luck with your portfolio! 🏆
